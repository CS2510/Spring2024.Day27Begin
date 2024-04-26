class ScoreReaderComponent extends Component {
  update() {
      this.parent.getComponent("Text").text = "" + Globals.score;
      // this.parent.components[1].text = "" + Globals.score;
  }
}

window.ScoreReaderComponent = ScoreReaderComponent;