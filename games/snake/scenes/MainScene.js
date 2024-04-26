// import "../components/DeathComponent.js"
import "../components/KeyboardComponent.js"
// import "../components/FireComponent.js"
// import "../components/LaserComponent.js"
// import "../components/ScoreUpdaterComponent.js"

// import "../prefabs/DeathGameObject.js"
// import "../prefabs/FlodnagGameObjects.js"


/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
    super("lightgray")
  }
  start(ctx) {

    let headGameObject = new GameObject("SnakeHeadGameObject")
    headGameObject.addComponent(new Circle("green", "transparent"))
    headGameObject.addComponent(new KeyboardComponent())
    GameObject.instantiate(headGameObject, 100, 100, 5)

    let bodyGameObject = new GameObject("SnakeBodyGameObject")
    bodyGameObject.addComponent(new Rectangle("green", "transparent"))
    GameObject.instantiate(bodyGameObject, 100, 90, 10, 10);  
    
    headGameObject.getComponent("KeyboardComponent").nextBodyPart = bodyGameObject;




  }
}

window.MainScene = MainScene