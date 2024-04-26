class CheckTransform2 extends Component {
  update(ctx) {
    let rectangles = GameObject.filter("WallGameObject")


    let tempX = Globals.lastX;
    let tempY = Globals.lastY;

    const steps = 10;
    let subStep = 1/steps;
    let deltaX = this.transform.x - tempX;
    let deltaY = this.transform.y - tempY;
    let scaledDeltaX = subStep * deltaX;
    let scaledDeltaY = subStep * deltaY;

    let lastWorkingX = tempX;
    let lastWorkingY = tempY
    for (let i = 0; i < steps; i++) {
      let x = Globals.lastX + scaledDeltaX * i;
      let y = Globals.lastY + scaledDeltaY * i;

      let inCollision = false;
      for (let rectangle of rectangles) {
        if (CollisionsGeometric.isVector2Rectangle2Collision(new Vector2(x,y), rectangle.getComponent("Rectangle").asGeometry()))
          inCollision = true;
      }
      if (inCollision) {
        this.transform.x = lastWorkingX;
        this.transform.y = lastWorkingY;
        break;
      }
      else {
        lastWorkingX = x;
        lastWorkingY = y;
        this.transform.x = x;
        this.transform.y = y;
      }
    }

  }

}

window.CheckTransform2 = CheckTransform2