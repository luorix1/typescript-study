// function
function hello(age?: number, name?: string): string {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age}`;
    } else {
        return `Hello, ${name || "World"}`;
    }
}

console.log(hello(30, "Sam"));

// if you replace "age?: number" with "age: undefined | number", it still works
console.log(hello(undefined, "Sam"));

interface TestUser {
    name: string;
}

const Sam: TestUser = {name: "Sam"};

// the following function can be bound to an object in order to use "this"
function showName(age: number, gender: "m" | "f") {
    console.log(this.name, age, gender);
}

// use case of bound function
const bound = showName.bind(Sam);
bound(30, "m");

// redefine interface
interface User {
    name: string;
    age: number;
}

// you can define input, output types separately
function join(name: string, age: string): string;
function join(name: string, age: number): User;

// full definition of function
function join(name: string, age: number | string): User | string {
    if (typeof age == "number") {
        return {
            name,
            age,
        };
    } else {
        return "Please input age as a number.";
    }
}

const sam: User = join("Sam", 30);
const jane: string = join("Jane", "30");