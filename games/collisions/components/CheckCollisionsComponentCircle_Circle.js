class CheckCollisionsComponentCircle_Circle extends Component{
  start(){
    this.mouseCircle =  GameObject.find("MouseCursorGameObject")

  }
  update(){
    let isCollision = CollisionsGeometric.isCircle2Circle2Collision(
      this.parent.getComponent("Circle").asGeometry(), 
      this.mouseCircle.getComponent("Circle").asGeometry()
      );
    
    if(isCollision){
      this.parent.components.find(c=>c.constructor.name == "Circle").fill = "red"
    }
    else{
      this.parent.components.find(c=>c.constructor.name == "Circle").fill = "green"
    }
  }
}

window.CheckCollisionsComponentCircle_Circle = CheckCollisionsComponentCircle_Circle