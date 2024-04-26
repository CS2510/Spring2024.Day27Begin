class CheckCollisionsComponentCircle_Line extends Component{
    
  start(){
    this.mouseCursor =  GameObject.find("MouseCursorGameObject")

  }
  update(){

    let isCollision = CollisionsGeometric.isCircle2Line2Collision(
      this.mouseCursor.getComponent("Circle").asGeometry(),
      this.parent.getComponent("Line").asGeometry(),
    )

    if(isCollision){
      this.parent.components.find(c=>c.constructor.name == "Line").stroke = "red"
    }
    else{
      this.parent.components.find(c=>c.constructor.name == "Line").stroke = "green"
    }


  }
}

window.CheckCollisionsComponentCircle_Line = CheckCollisionsComponentCircle_Line