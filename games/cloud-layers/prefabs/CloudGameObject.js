class CloudGameObject extends GameObject{
  constructor(){
    super("CloudGameObject")
  }
  start(ctx){
    this.layer = -1
    this.addComponent(new Circle("white", "transparent"))
    this.addComponent(new CloudMoverComponent())
    super.start(ctx)
  }
}

window.CloudGameObject = CloudGameObject;