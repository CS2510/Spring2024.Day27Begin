class TankAimComponent extends Component {
  start(ctx) {

  }
  update(ctx) {
    if (Input.keysDown.includes("ArrowLeft"))
      this.nextMove = this.left
    if (Input.keysDown.includes("ArrowRight"))
      this.nextMove = this.right
    if (Input.keysDown.includes("ArrowUp"))
      this.nextMove = this.up
    if (Input.keysDown.includes("ArrowDown"))
      this.nextMove = this.down
  }
}