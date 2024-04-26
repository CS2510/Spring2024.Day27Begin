class PlayerComponent extends Component {
    start(ctx) {
        //If we are using the event system, we have to listen for events
        EventSystem.registerListener(this)
    }
    handleEvent(event) {
        //Respond to an event
        //Note that we assume that there is only one kind of event
        //that can be fired and that it has a property called inCollision
        this.inCollision = event.inCollision
    }
    update(ctx) {
        //If we are communicating using the Globals global class
        //then update our value based on that

        if(Globals.communicationMethod == "globals")
            this.inCollision = Globals.inCollision
       
        if (this.inCollision) 
            //Example of same game object communication
            this.parent.getComponent("Circle").fill = "red"
        
        else 
            //Example of same game object communication
            this.parent.getComponent("Circle").fill = "green"
    }
}

window.PlayerComponent = PlayerComponent;