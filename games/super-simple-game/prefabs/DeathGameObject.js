class DeathGameObject extends GameObject {
    constructor(name = "DeathGameObject") {
        super(name);
    }
    start(ctx) {
        this.health = 1
        this.scoreValue = 1
        this.addComponent(new Circle("blue", "black"))

    }
}

window.DeathGameObject = DeathGameObject