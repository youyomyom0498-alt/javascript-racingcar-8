import { Car } from "./Car.js";

export class RacingGame {
    constructor (nameArr, tryCount) {
        this.carList = [];
        this.tryCount = tryCount;

        for(let i = 0; i < nameArr.length; i++){
            const newCar = new Car(nameArr[i]);
            this.carList.push(newCar);
        }
    }

    runRound() {
        for(let carIdx = 0; carIdx < this.carList.length; carIdx++){
            this.carList[carIdx].move();
        }
    }

}