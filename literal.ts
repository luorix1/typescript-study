// literal types
const userName1 = "Bob";
let userName2 = "Tom";

type Job = "police" | "developer" | "teacher";

interface User {
    name: string;
    job: Job;
}

const newUser: User = {
    name: "Bob",
    job: "developer",
}

interface HighSchoolStudent {
    name: string;
    grade: 1 | 2 | 3;
}