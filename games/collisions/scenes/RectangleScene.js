import "../components/FollowMouseComponent.js"
import "../components/CheckCollisionsComponentCircle_Rectangle.js"
import "../components/CheckCollisionsComponentRectangle_Rectangle.js"

class RectangleScene extends Scene {
  constructor() {
    super("purple")
  }
  start(){

    //A circle against which we will do collision detection.
    let collisionCircleGameObject = new GameObject("CollisionCircleGameObject")
    collisionCircleGameObject.addComponent(new Circle())
    collisionCircleGameObject.addComponent(new CheckCollisionsComponentCircle_Rectangle())
    collisionCircleGameObject.transform.x = 100;
    collisionCircleGameObject.transform.y = 100;
    collisionCircleGameObject.transform.scaleX = 50
    this.gameObjects.push(collisionCircleGameObject);


    //A rectangle against which we will do collision detection
    let collisionRectangleGameObject = new GameObject("CollisionRectangleGameObject")
    collisionRectangleGameObject.addComponent(new Rectangle("green", "transparent"))
    collisionRectangleGameObject.addComponent(new CheckCollisionsComponentRectangle_Rectangle())
    collisionRectangleGameObject.transform.x = 200;
    collisionRectangleGameObject.transform.y = 200;
    collisionRectangleGameObject.transform.scaleX = 20
    collisionRectangleGameObject.transform.scaleY = 30;
    this.gameObjects.push(collisionRectangleGameObject);


    // A infinitely small point that will follow the mouse cursor
    let mouseCursorGameObject = new GameObject("MouseCursorGameObject")
    mouseCursorGameObject.addComponent(new Rectangle())
    mouseCursorGameObject.addComponent(new FollowMouseComponent())
    mouseCursorGameObject.transform.scaleX = 30;
    mouseCursorGameObject.transform.scaleY = 30;
    this.gameObjects.push(mouseCursorGameObject)
  }

}

window.RectangleScene = RectangleScene