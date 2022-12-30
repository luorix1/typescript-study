// access modifier -> public, private, protected
class KoreanCar {
    // use "readonly" to make immutable
    readonly name: string = "car";
    protected color: string;
    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }
    start() {
        console.log("start");
        console.log(this.color);
    }
}

class Hyundai extends KoreanCar {
    constructor(color: string, name: string) {
        super(color, name);
    }
    showName() {
        console.log(super.name);
    }
    showColor() {
        console.log(super.color);
    }
}

const k5 = new Hyundai("black", "zzzz4");
console.log(k5.name);
console.log(k5.start())