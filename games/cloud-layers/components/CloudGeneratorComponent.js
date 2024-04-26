class CloudGeneratorComponent extends Component{
  constructor(){
    super("CloudGeneratorComponent");
  }
  start(ctx){
    this.countDown = 0;
    this.countDownAmount = 10;
  }
  update(ctx){
    this.countDown -= Time.deltaTime;
    if(this.countDown <= 0){
      let cloudGameObject = new CloudGameObject()
      GameObject.instantiate(cloudGameObject, 25, 100, 20, 20);
      cloudGameObject.start(ctx)

      this.countDown = this.countDownAmount;
    }

  }
}

window.CloudGeneratorComponent = CloudGeneratorComponent;