class Transform extends Component{
    x = 0
    y = 0
    scaleX = 1
    scaleY = 1
    getPositionAsVector2(){
        return new Vector2(this.x, this.y);
    }
    getScaleAsVector2(){
        return new Vector2(this.scaleX, this.scaleY);
    }
}

window.Transform = Transform

//Start doing unit tests
let t = new Transform();
console.assert(t.getPositionAsVector2().x == 0)
console.assert(t.getPositionAsVector2().y == 0)
console.assert(t.getScaleAsVector2().x == 1)
console.assert(t.getScaleAsVector2().y == 1)
t.x = 10;
t.y = - 20;
console.assert(t.getPositionAsVector2().x == 10)
console.assert(t.getPositionAsVector2().y == -20)
t.scaleX = 2
t.scaleY = -3
console.assert(t.getScaleAsVector2().x == 2)
console.assert(t.getScaleAsVector2().y == -3)