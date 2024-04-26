import "../prefabs/WallGameObject.js"
import "../components/KeyboardComponent.js"
import "../components/PointConstraintsComponentTrivial.js"
import "../components/SaveTransform.js"
import "../components/CheckTransform.js"
import "../components/CheckTransform2.js"

const scale = 250;
const margin = 50


class PointGameObject extends GameObject {
  constructor() {
    super();
    this.addComponent(new Point())

    if (false) {
      this.addComponent(new KeyboardComponent())
    }
    if (false) {
      this.addComponent(new SaveTransform())
      this.addComponent(new KeyboardComponent())
      this.addComponent(new CheckTransform())
    }
    if(false){
      this.addComponent(new KeyboardComponent())
      this.addComponent(new PointConstraintsComponentTrival())
    }
    if (true) {
      this.addComponent(new SaveTransform())
      this.addComponent(new KeyboardComponent())
      this.addComponent(new CheckTransform2())
    }
  }
  start(ctx) {
    this.transform.x = scale + margin - margin * 2
    this.transform.y = scale + margin - margin * 2+10
    super.start()

  }
}



/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
    super("lightgray")

  }



  start(ctx) {


    GameObject.instantiate(new WallGameObject(), margin, scale + margin, margin * 2, scale * 2 - margin * 2)
    GameObject.instantiate(new WallGameObject(), scale * 2 + margin, scale + margin, margin * 2, scale * 2 - margin * 2)
    GameObject.instantiate(new WallGameObject(), scale + margin, margin, scale * 2 - margin * 2, margin * 2)
    GameObject.instantiate(new WallGameObject(), scale + margin, scale * 2 + margin, scale * 2 - margin * 2, margin * 2)


    GameObject.instantiate(new WallGameObject(), scale + margin, scale + margin, margin * 4, margin * 2)
    GameObject.instantiate(new WallGameObject(), scale + margin, scale + margin, margin * 2, margin * 4)

    GameObject.instantiate(new PointGameObject())


  }
}

window.MainScene = MainScene