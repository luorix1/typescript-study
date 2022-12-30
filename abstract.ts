// abstract class
abstract class Car {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
    abstract doSomething(): void;
}

// the following fails for abstract classes
// const car = new Car("red");

class Porsche extends Car {
    constructor(color: string) {
        super(color);
    }
    doSomething() {
        alert(3);
    }
}

const z4 = new Porsche("black");