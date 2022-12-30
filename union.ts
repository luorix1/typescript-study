// union types
interface GiftCar {
    name: "car";
    color: string;
    start(): void;   
}

interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
}

function getGift(gift: GiftCar | Mobile) {
    console.log(gift.color);
    if (gift.name === "car") {
        gift.start();
    } else {
        gift.call();
    }
}

let giftCar: GiftCar = {
    name: "car",
    color: "red",
    start(): void {
        console.log("Start");
    }
}

getGift(giftCar);