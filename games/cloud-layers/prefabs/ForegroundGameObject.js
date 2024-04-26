
class ForegroundGameObject extends GameObject{
  constructor(name="ForegroundGameObject"){
      super(name)
      this.addComponent(new Circle("red", "black"))
  }
  
}

window.ForegroundGameObject = ForegroundGameObject