// "keyof" -> a key of the interface
interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
}

type UserKey = keyof User; // "id" | "name" | "age" | "gender"
const uk: UserKey = "name";

// ""partial" -> subset of the interface (all members optional)
let admin: Partial<User> = {
    id: 1,
    name: "Bob"
}

// "required" -> all members are now required
// the code below raises an error!
// let newAdmin: Required<User> = {
//     id: 1,
//     name: "Bob",
//     age: 19,
// }

// "readonly" -> immutable after defining object
// the code below raises an error!
// let newAdmin: Readonly<User> = {
//     id: 1,
//     name: "Bob",
//     age: 19,
//     gender: "m"
// }

// newAdmin.id = 2;

// "record" -> creating key, value pairs for members in the interface
function isValid(user: User) {
    const result: Record<keyof User, boolean> = {
        id: user.id > 0,
        name: user.name !== "",
        age: user.age > 0,
        gender: user.gender in ["m", "f"],
    };
    return result;
}

// "pick" -> choose which members to leave in (Pick<T, K>)
let newGuy: Pick<User, "name" | "age"> = {
    name: "NewGuy",
    age: 18,
};

// "omit" -> remove specified members (Omit<T, K>)
let newNewGuy: Omit<User, "name" | "age"> = {
    gender: "m",
    id: 1,
    birthYear: 2000,
    job: "developer",
};

// "exclude" -> remove specified types from a type (Exclude<T1, T2>)
type weirdType = string | number | boolean | null | undefined;
type fixedType = Exclude<weirdType, null | undefined>

// "nonnullable" -> removes null option from type (NonNullable<T>)
type testType = null | string;
type newTestType = NonNullable<testType>