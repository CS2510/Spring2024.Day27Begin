class LoopSliding extends Component {
  update(ctx) {
    let rectangles = GameObject.filter("WallGameObject")


    let tempX = Globals.lastX;
    let tempY = Globals.lastY;

    const steps = 10;
    let subStep = 1 / steps;
    let deltaX = this.transform.x - tempX;
    let deltaY = this.transform.y - tempY;
    let scaledDeltaX = subStep * deltaX;
    let scaledDeltaY = subStep * deltaY;

    let stoppedX = false;
    let stoppedY = false;

    let lastWorkingX = tempX;
    let lastWorkingY = tempY

    this.transform.x = tempX;
    this.transform.y = tempY;


    //Start at one, otherwise we are checking if we are in collision before 
    //we start.
    for (let i = 1; i <= steps; i++) {
      let x = Globals.lastX;
      let y = Globals.lastY;
      if (!stoppedX)
        x += scaledDeltaX * i;
      if (!stoppedY)
        y += scaledDeltaY * i;

      let isAnyCollision = this.anyCollision(x, y);
      if (isAnyCollision) {

        //Now check if either movement will work
        if (!stoppedX) {
          let isXCollision = this.anyCollision(x, Globals.lastY)
          if (isXCollision) {
            stoppedX = true;
            scaledDeltaX = 0;
          }
          else {
            this.transform.x = x;
            this.transform.y = lastWorkingY;
            lastWorkingX = this.transform.x;
            lastWorkingY = this.transform.y;
          }
        }
        if (!stoppedY) {
          let isYCollision = this.anyCollision(Globals.lastX, y)
          if (isYCollision) {
            stoppedY = true;
            scaledDeltaY = 0;
          }
          else {
            this.transform.x = lastWorkingX;
            this.transform.y = y;
            lastWorkingX = this.transform.x;
            lastWorkingY = this.transform.y;
          }

          if (stoppedX && stoppedY) {
            this.transform.x = lastWorkingX;
            this.transform.y = lastWorkingY;
            break;
          }
        }


      }
      else {
        lastWorkingX = x;
        lastWorkingY = y;
        this.transform.x = x;
        this.transform.y = y;
      }
    }

  }
  anyCollision(x, y) {
    let rectangles = GameObject.filter("WallGameObject")
    for (let rectangle of rectangles) {
      if (CollisionsGeometric.isVector2Rectangle2Collision(new Vector2(x, y), rectangle.getComponent("Rectangle").asGeometry()))
        return true
    }
    return false
  }

}

window.LoopSliding = LoopSliding