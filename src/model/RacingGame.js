import { Console } from "@woowacourse/mission-utils";
import { Car } from "./Car.js";

export class RacingGame {
    constructor (nameArr) {
        this.carList = [];
        for(let i = 0; i < nameArr.length; i++){
            const newCar = new Car(nameArr[i]);
            this.carList.push(newCar);
        }
    }
}