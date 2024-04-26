class CheckCollisionsComponentRectangle extends Component{
  constructor(){
    super();
  }
  start(){
    this.point =  GameObject.find("MouseCursorGameObject")

  }
  update(){
    let rectangleX = this.transform.x
    let rectangleY = this.transform.y
    let pointX = this.point.transform.x;
    let pointY = this.point.transform.y;

    let isCollision = Collisions.isPointRectangleCollision(
      {x:pointX, y:pointY},
      {x:rectangleX, y:rectangleY},
      this.transform.scaleX,
      this.transform.scaleY
    )

    if(isCollision){
      this.parent.components.find(c=>c.constructor.name == "Rectangle").fill = "red"
    }
    else{
      this.parent.components.find(c=>c.constructor.name == "Rectangle").fill = "green"
    }


  }
}

window.CheckCollisionsComponentRectangle = CheckCollisionsComponentRectangle