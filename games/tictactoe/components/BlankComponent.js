
class BlankComponent extends Component{
  constructor(x,y,name="BlackPrefabComponent"){
    super(name);
    this.x = x;
    this.y = y
    EventSystem.registerListener(this);
  }
  handleEvent(event){
    if(event.name == "ValidPlay")
    {
      if(this.x == event.args[0] && this.y == event.args[1]){
        console.log("destroy")
        GameObject.destroy(this.parent);

        let toAdd;
        if(MainScene.model.getNextTurn() == TicTacToeModel.O)
          toAdd = new XPrefab(this.x, this.y);
        else
          toAdd = new OPrefab(this.x, this.y);
        GameObject.instantiate(
          toAdd, 
          this.transform.x, this.transform.y, 
          this.transform.scaleX, this.transform.scaleY)
      }
    }

  }
  update(ctx) {
    if (Input.mouseUpThisFrame) {
      let { x, y } = Input.mousePosition;
      if (Collisions.isPointRectangleCollision(
        { x, y },
        { x: this.transform.x, y: this.transform.y },
        this.transform.scaleX, this.transform.scaleY
      )) {
        console.log(this.x + ", " + this.y);
        EventSystem.fireEvent({
          origin: this,
          name: "Play",
          args: [this.x, this.y]
        }
        )
      }
    }
  }
}

window.BlankComponent = BlankComponent