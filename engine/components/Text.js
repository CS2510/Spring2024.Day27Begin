class Text extends Component {
  constructor(text = "", font = "30px sans", fill = "gray") {
    super();
    this.text = text;
    this.font = font;
    this.fill = fill;

  }
  draw(ctx) {
    ctx.fillStyle = this.fill
    ctx.font = this.font
    ctx.fillText(this.text, this.transform.x, this.transform.y)
  }
}

window.Text = Text