// this function raises an error for getSize(arr2) because of a type mismatch
// function getSize(arr: number[]): number {
//     return arr.length;
// }

// this function works, but we can't just keep adding OR conditions
// function getSize(arr: number[] | string[]): number {
//     return arr.length;
// }

// use the type parameter <T> for a "generic"
function getSize<T>(arr: T[]): number {
    return arr.length;
}


const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];
const arr3 = [true, false, false];

// specify the type of "T" before the opening parenthesis
console.log(getSize<number>(arr1));
console.log(getSize<string>(arr2));
console.log(getSize<boolean>(arr3));