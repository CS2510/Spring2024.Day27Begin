class CheckCollisionsComponentRectangle_Rectangle extends Component{
    constructor(){
      super();
    }
    start(){
      this.rectangle =  GameObject.find("MouseCursorGameObject")
  
    }
    update(){
      let rectangleX = this.transform.x
      let rectangleY = this.transform.y
      let pointX = this.rectangle.transform.x;
      let pointY = this.rectangle.transform.y;
  
      let isCollision = Collisions.isRectangleRectangleCollision(
        {x:pointX, y:pointY},
        this.rectangle.transform.scaleX,
        this.rectangle.transform.scaleY,
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
  
  window.CheckCollisionsComponentRectangle_Rectangle = CheckCollisionsComponentRectangle_Rectangle