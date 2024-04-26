import "../prefabs/WallGameObject.js"
import "../components/KeyboardComponent.js"
import "../components/PointConstraintsComponentTrivial.js"
import "../components/SaveTransform.js"
import "../components/CheckTransform.js"
import "../components/CheckTransform2.js"
import "../components/LoopSliding.js"

const scale = 250; //The half height and half width of the main walls
const margin = 50 //How far the walls start from 0,0
const overlap = 1 //How much the walls overlap


class PointGameObject extends GameObject {
  constructor() {
    super();
    this.addComponent(new Point())

    if (false) {
      //This option: Ignoring all walls
      //Sliding "works" :)
      //Collision doesn't work :(
      //Collision Resolution doesn't work :(
      //You can overshoot with a high enough speed :(
      this.addComponent(new KeyboardComponent())
    }
    if (false) {
      //This option: Move, but only if there is no collision at the end
      //Sliding doesn't work :(
      //Collision does work (you can't go through walls) :)
      //Collision resolution can stop you early :(
      //You can overshoot with a high enough speed :(
      this.addComponent(new SaveTransform())
      this.addComponent(new KeyboardComponent())
      this.addComponent(new CheckTransform())
    }
    if (false) {
      //This option: Move, but force movement to stop on rectangular boundary
      //i.e., we are ignoring everything but the outer walls
      //Sliding works :)
      //Collision doesn't works (except for outer walls) :(
      //Collision resultion works :)
      //You cannot overshoot :)
      this.addComponent(new KeyboardComponent())
      this.addComponent(new PointConstraintsComponentTrival())
    }
    if (false) {
      //This Option: Move, but loop slowly to see when a collision might occur
      //This may take a lot of time
      //Sliding doesn't work :(
      //Collision does work :)
      //Collision resolution works within some delta :|
      //It is very hard to overshoot, even with a high enough speed :)
      this.addComponent(new SaveTransform())
      this.addComponent(new KeyboardComponent())
      this.addComponent(new CheckTransform2())
    }
    if (true) {
      //This Option: Move, but loop slowly to check for collisions...
      //...if there is a collision, see if we can keep sliding
      //This may take a lot of time
      //Sliding does work :)
      //Collision does work :)
      //Collision resolution works within some delta :|
      //It is very hard to overshoot, even with a high enough speed :)
      this.addComponent(new SaveTransform())
      this.addComponent(new KeyboardComponent())
      this.addComponent(new LoopSliding())
    }
  }
}



/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
    super("lightgray")
  }
  start(ctx) {

    //West
    GameObject.instantiate(new WallGameObject(), margin, scale + margin, margin * 2, scale * 2 - margin * 2+overlap)
    //East
    GameObject.instantiate(new WallGameObject(), scale * 2 + margin, scale + margin, margin * 2, scale * 2 - margin * 2+overlap)
    //North
    GameObject.instantiate(new WallGameObject(), scale + margin, margin, scale * 2 - margin * 2+overlap, margin * 2)
    //South
    GameObject.instantiate(new WallGameObject(), scale + margin, scale * 2 + margin, scale * 2 - margin * 2 + overlap, margin * 2)


    //Center Wide
    GameObject.instantiate(new WallGameObject(), scale + margin, scale + margin, margin * 4, margin * 2)
    //Center Tall
    GameObject.instantiate(new WallGameObject(), scale + margin, scale + margin, margin * 2, margin * 4)

    GameObject.instantiate(new PointGameObject(), 498, 495)

    let s = 1;
    Camera.main.transform.x = 0
    Camera.main.transform.scaleX = s;
    Camera.main.transform.scaleY = s;
  }
}

window.MainScene = MainScene