// the following code doesn't work
// we need to use "interface" instead!

// let user: object;
// user = {
//     name: "test",
//     age: 30
// }
// console.log(user.name);

// define a type "Score" which can be one of the following "string" variables
type Score = "A" | "B" | "C" | "F";

// define interface
interface User {
    name: string;
    age: number;
    // ? indicates optional values
    gender?: string;
    // readonly values are immutable after initialization
    readonly birthYear: number;
    [grade: number]: Score;
}

// create object with typing using interface
let user: User = {
    name: "test",
    age: 30,
    birthYear: 2000,
    // allocating grade ("number") to "Score"
    1: "A",
    // 2: "B",
    // allocating "s" is not allowed as it must be of the "Score" type
    // 2: "s",
}

// you can redefine values
user.age = 10
// you can also add new values
user.gender = "male";
// console.log(user.gender);

// define "Add" interface
interface Add {
    (num1: number, num2: number): number;
}

// define a function using "Add" input
const add: Add = function(x, y) {
    return x + y;
}
add(10, 20);

// define "IsAdult" interface
interface IsAdult{
    (age: number): boolean;
}

// define a function using "IsAdult" input
const test: IsAdult = (age) => {
    return age > 19;
}

interface Car {
    color: string;
    wheels: number;
    start(): void;
}

// "implements" keyword used when creating class based on interface
class BMW implements Car {
    color;
    wheels = 4;
    constructor(c: string){
        this.color = c;
    }
    start(): void {
        console.log("Go!");
    }
}
const bmw = new BMW("green");
console.log(bmw);
bmw.start();
console.log(bmw.wheels);

// "extends" keyword used when creating new interface based on another interface
interface Benz extends Car {
       door: number;
       stop(): void;
}
const benz: Benz = {
    door: 5,
    stop(){
        console.log("Stop!");
    },
    color: "green",
    wheels: 4,
    start(){
        console.log("Go!");
    }
}