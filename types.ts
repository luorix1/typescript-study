// "string" type
let car: string = "bmw";

// variable can be redefined
car = "benz";

// error if trying to define as number
// car = 3;

// "number" type
let age: number = 30;

// "boolean" type
let isAdult: boolean = true;

// example of array using "number" array
let a: number[] = [1, 2, 3];

// alternative way of defining array
let a2: Array<number> = [1, 2, 3];

// add element to array
a.push(4);

// "tuple" type
let b: [string, number];
b = ["test", 2];

// "void", "never" type
// never can always return error or be used for an infinite loop
function showError(): never {
    throw new Error();
}

function infLoop(): never{
    while(true){
        // do something
    }
}

// "enum" type
// you can allot a value to each entry (similar to enum in other languages)
// it will fill in the next entry with a consecutive integer if not specified
enum Os {
    Window = 3,
    Ios = 10,
    Android // Android will be alloted 11
}

// you can allot the corresponding value as seen here
let myOs: Os;
myOs = Os.Ios;

// "null", "undefined" type
let x: null = null;
let y: undefined = undefined;