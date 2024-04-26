class ControllerGameObject extends GameObject{
  constructor(){
    super("ControllerGameObject")
  }
  start(ctx){
    this.addComponent(new CloudGeneratorComponent())
    super.start(ctx)
  }
}

window.ControllerGameObject = ControllerGameObject;