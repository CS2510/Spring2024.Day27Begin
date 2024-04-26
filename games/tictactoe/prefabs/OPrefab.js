class OPrefab extends GameObject{
  constructor(x,y,name="OPrefab"){
    super(name);
    this.x = x;
    this.y = y;
    this.addComponent(new Rectangle("blue"))
  }
}

window.OPrefab = OPrefab