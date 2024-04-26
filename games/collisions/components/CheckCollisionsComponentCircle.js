class CheckCollisionsComponentCircle extends Component{
  constructor(){
    super();
  }
  start(){
    // this.point =  Engine.currentScene.gameObjects.find(go=>go.name == "MouseCursorGameObject")
    this.point =  GameObject.find("MouseCursorGameObject")

  }
  update(){
    let circleCenterX = this.transform.x
    let circleCenterY = this.transform.y
    let pointX = this.point.transform.x;
    let pointY = this.point.transform.y;

    let isCollision = Collisions.isPointCircleCollision(
      {x:pointX, y:pointY},
      {x:circleCenterX, y:circleCenterY},
      this.transform.scaleX
    )

    if(isCollision){
      this.parent.components.find(c=>c.constructor.name == "Circle").fill = "red"
    }
    else{
      this.parent.components.find(c=>c.constructor.name == "Circle").fill = "green"
    }


  }
}

window.CheckCollisionsComponentCircle = CheckCollisionsComponentCircle