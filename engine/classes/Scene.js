/**
 * A scene class. 
 * Everything in your game needs to be encapsulated in a scene and only
 * one scene can be running at a time.
 * 
 * Note: Recent versions of Unity allow for multiple scenes to be running 
 * simultaneously, for example one for the background and one for the foreground.
 * However, this advanced topic is out of scope for this course, so we 
 * won't be covering that in this class.
 */
class Scene {
    /** The list of game objects in the scene */
    gameObjects = []

    /** Flag to track if we have started the scene (by called start on the 
     * game objects) */
    hasStarted = false;

    logicalWidth = -1;

    aspectRatio = -1;

    logicalWidthViewWidthInPixels = -1
    logicalWidthViewHeightInPixels = -1

    letterBox1End = 0;
    letterBox2Start = 0;

    /**
     * Create a scene with the given background color.
     * 
     * Note: We will eventually move the color parameter to be on the Camera
     * game object, which is where it really belogs.
     * 
     * @param {Color} backgroundColor The background color for the scene. We can 
     * use any format that CSS understands, e.g. "red", "#FF0000", "rgb(255, 0, 0)"
     */
    constructor(backgroundColor) {
        this.backgroundColor = backgroundColor
        this.hasStarted = false;

    }

    /**
     * Call start on all the game objects and change our start flag
     * 
     * @param {CanvasRenderingContext2D} ctx The current rendering context
     */
    _start(ctx) {
        if (!this.hasStarted) {
            this.hasStarted = true;

            if (this.start)
                this.start(ctx);
            for (const gameObject of this.gameObjects) {
                if (gameObject.start) {
                    gameObject.start(ctx);
                }
            }
        }
    }

    /**
     * Call update on all the game objects 
     * 
     * @param {CanvasRenderingContext2D} ctx The current rendering context
     */
    update(ctx) {
        for (const gameObject of this.gameObjects) {
            if (gameObject.update) {
                gameObject.update(ctx);
            }
        }
    }

    /**
     * Clear the current frame and call draw on all the game objects 
     * 
     * @param {CanvasRenderingContext2D} ctx The current rendering context
     */
    draw(ctx) {
        // Clear the scene
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        ctx.save()


        let windowAspectRatio = ctx.canvas.height / ctx.canvas.width;



        let usingLogicalCoordinates = this.logicalWidth > 0 && this.aspectRatio > 0

        if (usingLogicalCoordinates) {
            if (this.aspectRatio > windowAspectRatio) {
                this.letterBox1End = (ctx.canvas.width) / 2 - (ctx.canvas.height / this.aspectRatio) / 2;
                this.letterBox2Start = (ctx.canvas.width) / 2 + (ctx.canvas.height / this.aspectRatio) / 2;
                ctx.translate(this.letterBox1End, 0)
                let scaleFactor = ctx.canvas.height / this.logicalWidth;
                ctx.scale(scaleFactor, scaleFactor)

                this.logicalWidthViewWidthInPixels = this.letterBox2Start - this.letterBox1End;
                this.logicalWidthViewHeightInPixels = ctx.canvas.height;
            }
            else {
                this.letterBox1End = (ctx.canvas.height) / 2 - (ctx.canvas.width * this.aspectRatio) / 2;
                this.letterBox2Start = (ctx.canvas.width * this.aspectRatio) / 2 + (ctx.canvas.height) / 2;
                ctx.translate(0, this.letterBox1End)
                let scaleFactor = ctx.canvas.width / (this.logicalWidth / this.aspectRatio);
                ctx.scale(scaleFactor, scaleFactor)

                this.logicalWidthViewWidthInPixels = ctx.canvas.width;
                this.logicalWidthViewHeightInPixels = this.letterBox2Start - this.letterBox1End;
            }
        }

        ctx.scale(Camera.main.transform.scaleX, Camera.main.transform.scaleY)
        ctx.translate(-Camera.main.transform.x, -Camera.main.transform.y)
        //ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2)

        let sortedLayers = [...this.gameObjects]
        sortedLayers = sortedLayers.sort((a, b) => a.layer - b.layer)

        //Call draw on all the game objects
        for (const gameObject of sortedLayers) {
            if (gameObject.layer == -1) {
                //Glow
                ctx.filter = "blur(2px)"
            }
            else {
                //Don't glow
                ctx.filter = "none"
            }
            if (gameObject.draw) {
                gameObject.draw(ctx)
            }

        }
        ctx.restore()

        ctx.fillStyle = "black"

        //Actually draw the letterboxes
        if (usingLogicalCoordinates) {
            if (this.aspectRatio > windowAspectRatio) {

                ctx.fillRect(0, 0, this.letterBox1End, ctx.canvas.height);
                ctx.fillRect(this.letterBox2Start, 0, ctx.canvas.width, ctx.canvas.height);
            }
            else {
                ctx.fillRect(0, 0, ctx.canvas.width, this.letterBox1End);
                ctx.fillRect(0, this.letterBox2Start, ctx.canvas.width, ctx.canvas.height);
            }
        }

        for (const gameObject of this.gameObjects) {
            if (gameObject.drawUI)
                gameObject.drawUI(ctx);
        }
    }
}

window.Scene = Scene