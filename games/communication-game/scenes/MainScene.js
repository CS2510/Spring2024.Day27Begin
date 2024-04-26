import "../components/PlayerComponent.js"
import "../components/KeyboardComponent.js"
import "../components/ControllerComponent.js"

import "../prefabs/DeathGameObject.js"
import "../prefabs/PlayerGameObject.js"


/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
    super("lightgray")
  }
  start(ctx) {
    Globals.communicationMethod = ""
    // Globals.communicationMethod = "sameScene"
    // Globals.communicationMethod = "events"
    Globals.communicationMethod = "globals"

    let gameObject = new GameObject("Controller")
    gameObject.addComponent(new ControllerComponent())
    GameObject.instantiate(gameObject)
    
    GameObject.instantiate(new PlayerGameObject(), 200, 90, 50)

    GameObject.instantiate(new DeathGameObject(), 200, 0, 50)
  }
}

window.MainScene = MainScene