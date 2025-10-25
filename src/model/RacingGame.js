import { Car } from "./Car.js";

export class RacingGame {
    constructor (nameArr, tryCount) {
        this.carList = [];
        this.tryCount = tryCount;
        this.carCount = nameArr.length;

        for(let i = 0; i < this.carCount; i++){
            const newCar = new Car(nameArr[i]);
            this.carList.push(newCar);
        }
    }

    runRound() {
        for(let carIdx = 0; carIdx < this.carCount; carIdx++){
            this.carList[carIdx].move();
        }
    }

    getWinners() {
        const maxDistance = Math.max(...this.carList.map(car => car.position));
        const winnerList = this.carList.filter(car => car.position === maxDistance);
        return winnerList;
    }
}