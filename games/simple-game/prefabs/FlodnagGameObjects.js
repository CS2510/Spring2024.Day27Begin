class FlodnagGameObject extends DeathGameObject{
    constructor(name="DeathGameObject"){
        super(name)
    }
    start(ctx){
        super.start(ctx)
        this.health = 2
        this.scoreValue = 5
        this.components[2].fill = "yellow"
    }
}

window.FlodnagGameObject = FlodnagGameObject