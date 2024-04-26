class CheckTransform extends Component {
  update(ctx) {
    let rectangles = GameObject.filter("WallGameObject")

    let inCollision = false;

    for(let rectangle of rectangles){
      if(CollisionsGeometric.isVector2Rectangle2Collision(this.parent.getComponent("Point").asGeometry(), rectangle.getComponent("Rectangle").asGeometry()))
        inCollision = true;
    }

    if (inCollision) {
      this.transform.x = Globals.lastX;
      this.transform.y = Globals.lastY;
    }
  }

}

window.CheckTransform = CheckTransform