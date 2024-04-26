

/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
    super("darkgray")
    this.aspectRatio = 1;
    this.logicalWidth = 20;
  }
  start(ctx) {
    let groundGameObject = new GameObject("GroundGameObject")
    groundGameObject.addComponent(new Rectangle("brown", "transparent"))
    GameObject.instantiate(groundGameObject, 10, 15, 20, 10)

    let tankGameObject = new GameObject("TankGameObject");
    tankGameObject.addComponent(new Rectangle("blue", "transparent"))
    GameObject.instantiate(tankGameObject, 10, 10, 1, .5)

    let barrelGameObject = new GameObject("TankGameObject")
    barrelGameObject.addComponent(new Line(new Vector2(10,10),new Vector2(10, 9), "black", .1))
    GameObject.instantiate(barrelGameObject)


  }
}

window.MainScene = MainScene