class FireComponent extends Component {
    constructor() {
        super();
    }
    start() {
        this.secondsToFire = 0
        this.secondsBetweenLasers = .5
    }
    update() {
        if (this.secondsToFire <= 0) {

            let laserGameObject = new GameObject("LaserGameObject")
            laserGameObject.addComponent(new Circle())
            laserGameObject.addComponent(new LaserComponent())
            GameObject.instantiate(laserGameObject, this.transform.x, this.transform.y);

            this.secondsToFire = this.secondsBetweenLasers;
        }
        else{
            this.secondsToFire -= Time.deltaTime
        }
    }
}
window.FireComponent = FireComponent