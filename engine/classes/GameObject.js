/**
 * A game object class.
 * Everything in each scene needs to be contained inside a game object.
 * At a high level a game object usually represents a "thing" in the game, e.g.
 * a score display, an enemy, a health bar, etc.
 * 
 * A game objects primary job is to have a list of components. As a result, there
 * is not a lot of logic in this class. 
 * 
 * Notes: 
 * 
 * Unlike `Scene` and `Transform`, you can directly instantiate this class, i.e.
 * `new GameObject("Slug")` is fine.
 * 
 * All major functions that get passed through to the components, e.g. `start`, 
 * have a reference to the current rendering context. This allows your components
 * to check the screen size, etc., in functions other than `draw()`
 */

class GameObject {

    /** The list of components in this game object */
    components = []

    layer = 0

    /**
     * Create a new game object. Note that this also instantiate and adds the 
     * first component, an instance of `Transform` so that all game objects are
     * forced to have a transform component.
     * 
     * @param {String} name The name of the game object
     */
    constructor(name) {
        this.name = name
        this.addComponent(new Transform())
        this.markForDestroy = false;
    }

    /**
     * Get the transform of this game object
     */
    get transform() {
        return this.components[0]
    }

    /**
     * Add a component to this game object and set its parent to this game
     * object
     * 
     * @param {Component} component The component to add.
     */
    addComponent(component) {
        this.components.push(component);
        component.parent = this;
    }

    /**
     * Start the game object by calling start on all its components.
     * 
     * @param {CanvasRenderingContext2D} ctx The context used in this game
     */
    start(ctx) {
        for (let component of this.components) {
            if (component.start) {
                component.start(ctx)
            }
        }
    }

    /**
     * Update the game object by calling update on all its components.
     * 
     * @param {CanvasRenderingContext2D} ctx The context used in this game
     */
    update(ctx) {
        for (let component of this.components) {
            if (component.update) {
                component.update(ctx)
            }
        }
    }

    /**
     * Draw the game object by calling draw on all its components.
     * 
     * @param {CanvasRenderingContext2D} ctx The context used in this game
     */
    draw(ctx) {
        for (let component of this.components) {
            if (component.draw) {
                component.draw(ctx)
            }
        }
    }

    drawUI(ctx) {
        for (let component of this.components) {
            if (component.drawUI) {
                component.drawUI(ctx)
            }
        }
    }

    getComponent(name){
        return this.components.find(c=>c.constructor.name == name);
    }

    /**
     * Find the first game object in the scene whose name matches the given string.
     * 
     * @param {String} gameObjectName 
     * @returns The first game object in the scene that matches. 'undefined' otherwise
     */
    static find(gameObjectName) {
        return Engine.currentScene.gameObjects.find(go => go.name == gameObjectName)
    }

    /**
     * Find all the game objects in the scene whose name matches the given string.
     * 
     * @param {String} gameObjectName 
     * @returns All game objects in the scene that match. `[]` otherwise.
     */
    static filter(gameObjectName) {
        return Engine.currentScene.gameObjects.filter(go => go.name == gameObjectName)
    }

    /**
     * Add a game object to the list of game objects in the current scene.
     * 
     * Note: This function is not complete. In the future we will need to make sure we properly 
     * initialize this game object.
     * @param {GameObject} gameObject The game object to add to the scene
     */
    static instantiate(gameObject, x = 0, y = 0, scaleX = 1, scaleY = 1) {
        Engine.currentScene.gameObjects.push(gameObject)
        gameObject.transform.x = x;
        gameObject.transform.y = y;
        gameObject.transform.scaleX = scaleX;
        gameObject.transform.scaleY = scaleY;
    }

    /**
     * Prepare a game object to be destroyed by marking it for destroy.
     * The next time the scene culls game objects that are marked for destroy,
     * this object will be removed from the scene.
     * 
     * @param {GameObject} gameObject  The game object to destroy
     */
    static destroy(gameObject) {
        gameObject.markForDestroy = true;
    }
}

window.GameObject = GameObject