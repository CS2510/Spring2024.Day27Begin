import "./tictactoe-model.js"

class TicTacToeModelEvents extends TicTacToeModel {
  constructor(){
    super();
    EventSystem.registerListener(this);
  }
  setAt(x, y) {
    try {
      super.setAt(x, y);
      EventSystem.fireEvent({origin:this,name:"ValidPlay",args:[x,y]})
      console.log(this.toString());
    } catch (e) {
      EventSystem.fireEvent({origin:this,name:"InvalidPlay"})
    }
  }
  handleEvent(event){
    if(event.name == "Play"){
      let x = event.args[0];
      let y = event.args[1];
      this.setAt(x,y);
    }
  }


}

window.TicTacToeModelEvents = TicTacToeModelEvents;