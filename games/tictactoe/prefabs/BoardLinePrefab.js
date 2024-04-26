class BoardLinePrefab extends GameObject{
  constructor(name = "BoardLinePrefab"){
    super(name)
    this.addComponent(new Rectangle("black", "transparent"))
  }
}

window.BoardLinePrefab = BoardLinePrefab;