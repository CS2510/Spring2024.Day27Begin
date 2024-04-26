class FollowMouseComponent extends Component{
  constructor(){
    super()
  }
  update(){
    this.transform.x = Input.mousePosition.x
    this.transform.y = Input.mousePosition.y
  }

}

window.FollowMouseComponent = FollowMouseComponent