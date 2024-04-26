class ControllerGameObject extends GameObject{
  constructor(){
    super("ControllerGameObject")
  }
  start(ctx){
    this.addComponent(new CameraMoverComponent())
    super.start(ctx)
  }
  
}

window.ControllerGameObject = ControllerGameObject;