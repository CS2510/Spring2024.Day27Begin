import "../prefabs/BoardLinePrefab.js"
import "../prefabs/XPrefab.js"
import "../prefabs/OPrefab.js"
import "../prefabs/BlankPrefab.js"
import "../components/BlankComponent.js"
import "../tictactoe-model.js"
import "../tictactoe-model-events.js"

/** The main scene in our game */
class MainScene extends Scene {
  static model;
  constructor() {
    super("lightgray")
    MainScene.model = new TicTacToeModelEvents()
  }
  start(ctx) {
    //Draw the board
    const margin = 10;
    const barWidth = 5;
    const barHeight = 100;
    GameObject.instantiate(new BoardLinePrefab(), barHeight/3 + margin, barHeight/2 + margin, barWidth, barHeight)
    GameObject.instantiate(new BoardLinePrefab(), 2*barHeight/3 + margin, barHeight/2 + margin, barWidth, barHeight)
    GameObject.instantiate(new BoardLinePrefab(), barHeight/2+margin,barHeight/3 + margin, barHeight, barWidth)
    GameObject.instantiate(new BoardLinePrefab(), barHeight/2+margin, 2*barHeight/3+margin, barHeight, barWidth)

    //Draw the button
    let buttonSize = 20;
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        //Use buttonHeight/6 to center the buttons
        GameObject.instantiate(new BlankPrefab(x,y), 
        x * barHeight/3 + barHeight/6+ margin, 
        y * barHeight/3 + barHeight/6 + margin, 
        buttonSize, 
        buttonSize)
      }
    }



  }
}

window.MainScene = MainScene