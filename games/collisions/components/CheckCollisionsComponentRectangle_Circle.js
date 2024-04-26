class CheckCollisionsComponentRectangle_Circle extends Component{
    
  start(){
    this.mouseCursor =  GameObject.find("MouseCursorGameObject")

  }
  update(){
    let circleCenterX = this.transform.x
    let circleCenterY = this.transform.y
    let pointX = this.mouseCursor.transform.x;
    let pointY = this.mouseCursor.transform.y;

    let isCollision = CollisionsGeometric.isCircle2Rectangle2Collision(
      this.mouseCursor.getComponent("Circle").asGeometry(),
      this.parent.getComponent("Rectangle").asGeometry(),
    )

    // let isCollision = Collisions.isPointCircleCollision(
    //   {x:pointX, y:pointY},
    //   {x:circleCenterX, y:circleCenterY},
    //   this.transform.scaleX
    // )

    if(isCollision){
      this.parent.components.find(c=>c.constructor.name == "Rectangle").fill = "red"
    }
    else{
      this.parent.components.find(c=>c.constructor.name == "Rectangle").fill = "green"
    }


  }
}

window.CheckCollisionsComponentRectangle_Circle = CheckCollisionsComponentRectangle_Circle