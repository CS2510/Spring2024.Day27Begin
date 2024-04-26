class Rectangle extends Component {
  constructor(fill = "yellow", stroke = "black") {
    super()
    this.fill = fill;
    this.stroke = stroke;
  }
  draw(ctx) {
    ctx.fillStyle = this.fill;
    ctx.strokeStyle = this.stroke;
    ctx.beginPath()
    ctx.rect(
      this.transform.x - this.transform.scaleX / 2,
      this.transform.y - this.transform.scaleY / 2,
      this.transform.scaleX, this.transform.scaleY
    )
    ctx.fill();
    ctx.stroke()
  }
  asGeometry(){
    return new Rectangle2(this.transform.x, this.transform.y, this.transform.scaleX, this.transform.scaleY);
  }
}

window.Rectangle = Rectangle