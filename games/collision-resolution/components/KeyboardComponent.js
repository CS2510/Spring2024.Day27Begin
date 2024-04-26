class KeyboardComponent extends Component {
  constructor() {
    super();
  }
  update() {
    let speed = 100
    if (Input.keysDown.includes("ArrowLeft") || false)
      this.transform.x -= speed / Time.fps
    if (Input.keysDown.includes("ArrowRight") || false)
      this.transform.x += speed / Time.fps
    if (Input.keysDown.includes("ArrowUp") || false)
      this.transform.y -= speed / Time.fps
    if (Input.keysDown.includes("ArrowDown") || false)
      this.transform.y += speed / Time.fps


  }
}

window.KeyboardComponent = KeyboardComponent;