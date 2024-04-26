class Line extends Component{
  constructor(one, two, stroke, lineWidth = 1){
    super();
    [this.one, this.two] = [one, two]
    this.stroke = stroke;
    this.lineWidth = lineWidth
  }
  draw(ctx){
    ctx.save();
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.stroke;
    ctx.beginPath();
    ctx.moveTo(this.one.x, this.one.y);
    ctx.lineTo(this.two.x, this.two.y);
    ctx.stroke();
    ctx.restore();
  }
  asGeometry(){
    return new Line2(this.one, this.two);
  }
}

window.Line = Line;