import { Random } from "@woowacourse/mission-utils";

export class Car {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move() {
        const randomNumber = Random.pickNumberInRange(0, 9);
        let move = false;
        if(randomNumber >= 4){
            move = true;
        } else {
            move = false;
        }
        return move;
    }
}