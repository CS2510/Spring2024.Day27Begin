import "../components/FollowMouseComponent.js"
import "../components/CheckCollisionsComponentCircle_Circle.js"
import "../components/CheckCollisionsComponentCircle_Rectangle.js"
import "../components/CheckCollisionsComponentCircle_Line.js"

class Line2Circle2Scene extends Scene {
  constructor() {
    super("purple")
  }
  start(){

    // An infinitely small point that will follow the mouse cursor
    let mouseCursorGameObject = new GameObject("MouseCursorGameObject")
    mouseCursorGameObject.addComponent(new Circle("yellow", "black"))
    mouseCursorGameObject.addComponent(new FollowMouseComponent())
    GameObject.instantiate(mouseCursorGameObject, 0, 0, 30, 30);

    //A circle against which we will do collision detection.
    let collisionCircleGameObject = new GameObject("CollisionCircleGameObject")
    collisionCircleGameObject.addComponent(new Circle())
    collisionCircleGameObject.addComponent(new CheckCollisionsComponentCircle_Circle())
    GameObject.instantiate(collisionCircleGameObject, 100, 100, 50);

    //A rectangle against which we will do collision detection
    let collisionRectangleGameObject = new GameObject("CollisionRectangleGameObject")
    collisionRectangleGameObject.addComponent(new Rectangle("green", "transparent"))
    collisionRectangleGameObject.addComponent(new CheckCollisionsComponentCircle_Rectangle())
    this.gameObjects.push(collisionRectangleGameObject);
    // GameObject.instantiate(collisionRectangleGameObject, 200, 200, 100, 75)
    GameObject.instantiate(collisionRectangleGameObject, 200, 200, 10, 10)

    //A rectangle against which we will do collision detection
    let collisionLineGameObject = new GameObject("CollisionLineGameObject")
    collisionLineGameObject.addComponent(new Line(new Vector2(0,0), new Vector2(100,50), "green"))
    collisionLineGameObject.addComponent(new CheckCollisionsComponentCircle_Line())
    GameObject.instantiate(collisionLineGameObject);
  }

}

window.Line2Circle2Scene = Line2Circle2Scene