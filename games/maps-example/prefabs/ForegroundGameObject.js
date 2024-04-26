
class ForegroundGameObject extends GameObject{
  constructor(name="ForegroundGameObject"){
      super(name)
      this.addComponent(new Circle("green", "blue"))
  }
  
}

window.ForegroundGameObject = ForegroundGameObject