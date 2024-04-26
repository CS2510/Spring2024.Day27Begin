class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getAdd(other) {
    return new Vector2(this.x + other.x, this.y + other.y);
  }
  getSubtract(other) {
    return new Vector2(this.x - other.x, this.y - other.y);
  }
  getLengthSquared() {
    return this.x ** 2 + this.y ** 2;
  }
  getLength() {
    return Math.sqrt(this.getLengthSquared());
  }
  getNormalized() {
    return new Vector2(this.x / this.getLength(), this.y / this.getLength());
  }
  getScaled(scalar) {
    return new Vector2(this.x * scalar, this.y * scalar);
  }
  getDot(other) {
    return this.x * other.x + this.y * other.y
  }
}

window.Vector2 = Vector2;

let p1 = new Vector2(0,0);
let p2 = new Vector2(1,1);
console.assert(p1.x == 0 && p1.y == 0)
console.assert(p2.x == 1 && p2.y == 1)

let p3 = p1.getAdd(p2);
console.assert(p3.x == 1 && p3.y == 1)

let p4 = p1.getSubtract(p2);
console.assert(p4.x == -1 && p4.y == -1)

let p5 = new Vector2(3,4);
console.assert(p5.getLengthSquared() == 25)
console.assert(p5.getLength() == 5)

let p6 = p5.getNormalized();
console.assert(p6.x == 3/5 && p6.y == 4/5)

let p7 = p5.getScaled(2)
console.assert(p7.x == 6 && p7.y == 8)

let dot = p5.getDot(new Vector2(1,2))
console.assert(dot == 3+8)