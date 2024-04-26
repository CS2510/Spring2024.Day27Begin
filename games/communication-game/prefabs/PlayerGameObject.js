class PlayerGameObject extends GameObject {
  constructor(name = "PlayerGameObject") {
      super(name);
  }
  start(ctx) {
      this.addComponent(new PlayerComponent())
      this.addComponent(new KeyboardComponent())
      this.addComponent(new Circle("green", "black"))
      super.start(ctx)
  }
}

window.PlayerGameObject = PlayerGameObject