class SaveTransform extends Component{
  update(ctx){
    Globals.lastX = this.transform.x;
    Globals.lastY = this.transform.y
  }
}

window.SaveTransform = SaveTransform