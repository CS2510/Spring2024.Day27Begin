class DeathGameObject extends GameObject {
    constructor(name = "DeathGameObject") {
        super(name);
    }
    start(ctx) {
        this.addComponent(new Circle("blue", "black"))

    }
}

window.DeathGameObject = DeathGameObject