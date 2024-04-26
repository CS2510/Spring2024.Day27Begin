class DeathGameObject extends GameObject {
    constructor(name = "DeathGameObject") {
        super(name);
    }
    start(ctx) {
        this.health = 1
        this.scoreValue = 1
        this.addComponent(new DeathComponent())
        this.addComponent(new Circle("red", "black"))

    }
}

window.DeathGameObject = DeathGameObject