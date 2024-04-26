class CloudMoverComponent extends Component{
  constructor(){
    super("CloudMoverComponent")
  }
  update(ctx){
    this.transform.x += Time.deltaTime * 10;
  }
}

window.CloudMoverComponent = CloudMoverComponent