// intersection types
interface ToyCar {
    name: string;
    start(): void;
}

interface Toy {
    name: string;
    color: string;
    price: number;
}

const toyCar: Toy & ToyCar = {
    name: "toyCar",
    start() {},
    color: "blue",
    price: 1000,
};