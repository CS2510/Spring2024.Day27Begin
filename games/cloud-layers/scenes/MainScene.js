import "../prefabs/ForegroundGameObject.js"
import "../prefabs/ControllerGameObject.js"
import "../prefabs/CloudGameObject.js"

import "../components/CloudGeneratorComponent.js"
import "../components/CloudMoverComponent.js"

class MainScene extends Scene {
  constructor() {
    super("blue")
    
  }
  start(ctx){
    GameObject.instantiate(new ForegroundGameObject, 100, 100, 20, 20)
    GameObject.instantiate(new ControllerGameObject())
    GameObject.instantiate(new CloudGameObject(),50,100,20,20)
  }

}

window.MainScene = MainScene