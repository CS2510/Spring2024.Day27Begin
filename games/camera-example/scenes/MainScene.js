import "../prefabs/ForegroundGameObject.js"
import "../prefabs/ControllerGameObject.js"

import "../components/CameraMoverComponent.js"

class MainScene extends Scene {
  constructor() {
    super("blue")
    this.aspectRatio = 1;
    this.logicalWidth = 20;
    
  }
  start(ctx){
    GameObject.instantiate(new ForegroundGameObject, 0, 0, 10, 10)
    GameObject.instantiate(new ForegroundGameObject, 20, 20, 10, 10)
    GameObject.instantiate(new ControllerGameObject())
  }

}

window.MainScene = MainScene