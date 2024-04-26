import "../prefabs/WallGameObject.js"
import "../components/KeyboardComponent.js"
import "../components/PointConstraintsComponentTrivial.js"
import "../components/SaveTransform.js"
import "../components/CheckTransform.js"
import "../components/CheckTransform2.js"
import "../components/LoopSliding.js"

const scale = 250;
const margin = 50


class PointGameObject extends GameObject {
  constructor() {
    super();
    this.addComponent(new Point())

    if (false) {
      //Ignoring all walls
      //Sliding "works" :)
      //Collision doesn't work :(
      //Collision Resolution doesn't work :(
      //You can overshoot :(
      this.addComponent(new KeyboardComponent())
    }
    if (false) {
      //Move, but only if there is no collision at the end
      //Sliding doesn't work :(
      //Collision does work (you can't go through walls) :)
      //Collision resolution can stop you early :(
      //You can overshoot :(
      this.addComponent(new SaveTransform())
      this.addComponent(new KeyboardComponent())
      this.addComponent(new CheckTransform())
    }
    if (false) {
      //Move, but force movement to stop on rectangular boundary
      //i.e., we are ignoring everything but the outer walls
      //Sliding works :)
      //Collision doesn't works (except for outer walls) :(
      //Collision resultion works :)
      //You cannot overshoot :)
      this.addComponent(new KeyboardComponent())
      this.addComponent(new PointConstraintsComponentTrival())
    }
    if (false) {
      //Move, but loop slowly to see when a collision might occur
      //This take a lot of time
      //Sliding doesn't work :(
      //Collision does work :)
      //Collision resolution works within some delta :|
      //It is very hard to overshoot :)
      this.addComponent(new SaveTransform())
      this.addComponent(new KeyboardComponent())
      this.addComponent(new CheckTransform2())
    }
    if (true) {
      this.addComponent(new SaveTransform())
      this.addComponent(new KeyboardComponent())
      this.addComponent(new LoopSliding())
    }
  }
  start(ctx) {
    // this.transform.x = scale + margin - margin * 2
    // this.transform.y = scale + margin - margin * 2 + 10
    super.start()

  }
}



/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
    super("lightgray")

  }



  start(ctx) {




    //GameObject.instantiate(new WallGameObject(), margin, scale + margin, margin * 2, scale * 2 - margin * 2 + 10)
    GameObject.instantiate(new WallGameObject(), scale * 2 + margin, scale + margin, margin * 2, scale * 2 - margin * 2+2)
    GameObject.instantiate(new WallGameObject(), scale + margin, margin, scale * 2 - margin * 2+2, margin * 2)
    //GameObject.instantiate(new WallGameObject(), scale + margin, scale * 2 + margin, scale * 2 - margin * 2 + 10, margin * 2)


    //GameObject.instantiate(new WallGameObject(), scale + margin, scale + margin, margin * 4, margin * 2)
    //GameObject.instantiate(new WallGameObject(), scale + margin, scale + margin, margin * 2, margin * 4)

    GameObject.instantiate(new PointGameObject(), 499, 105)

    let s = 4;
    Camera.main.transform.x = 400
    Camera.main.transform.scaleX = s;
    Camera.main.transform.scaleY = s;


  }
}

window.MainScene = MainScene