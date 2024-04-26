class EndSceneCounterComponent extends Component{
  constructor(){
    super();
  }
  start(){
    this.timeSinceDeath = 0;
  }
  update() {
    this.timeSinceDeath += Time.ms
    if (this.timeSinceDeath > 2000) {
        Globals.score = 0
        Engine.currentScene = new MainScene()
    }
  }
}

window.EndSceneCounterComponent = EndSceneCounterComponent