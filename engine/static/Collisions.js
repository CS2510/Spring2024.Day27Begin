class Collisions {
    static isRectangleRectangleCollision(rectangleOneCenter, rectangleOneWidth, rectangleOneHeight,
        rectangleTwoCenter, rectangleTwoWidth, rectangleTwoHeight) {
        if (
            rectangleOneCenter.x - rectangleOneWidth / 2 > rectangleTwoCenter.x + rectangleTwoWidth / 2 ||
            rectangleOneCenter.x + rectangleOneWidth / 2 < rectangleTwoCenter.x - rectangleTwoWidth / 2 ||
            rectangleOneCenter.y - rectangleOneHeight / 2 > rectangleTwoCenter.y + rectangleTwoHeight / 2 ||
            rectangleOneCenter.y + rectangleOneHeight / 2 < rectangleTwoCenter.y - rectangleTwoHeight / 2
        )
            return false;
        return true;
    }
    static isPointRectangleCollision(point, rectangleCenter, width, height) {
        if (
            point.x > rectangleCenter.x - width / 2 &&
            point.x < rectangleCenter.x + width / 2 &&
            point.y > rectangleCenter.y - height / 2 &&
            point.y < rectangleCenter.y + height / 2
        )
            return true;
        return false;
    }
    static isPointCircleCollision(point, circleCenter, circleRadius) {
        let distance = Math.sqrt((point.x - circleCenter.x) ** 2 + (point.y - circleCenter.y) ** 2);
        let toReturn = distance < circleRadius 
        return toReturn;
    }
    static isCircleCircleCollision(centerOne, centerTwo, radiusOne, radiusTwo) {
        let distance = Math.sqrt((centerOne.x - centerTwo.x) ** 2 + (centerOne.y - centerTwo.y) ** 2)
        if (radiusOne + radiusTwo > distance)
            return true;
        return false;
    }

}

window.Collisions = Collisions