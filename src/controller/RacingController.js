import { RacingGame } from "../model/RacingGame.js";
import { RacingView } from "../view/RacingView.js";

export class RacingController {
    constructor() {
        this.view = new RacingView();
        this.game = null;
    }

    async startGame() {
        const carInput = await this.view.inputCarNames();
        const tryCountInput = await this.view.inputTryCount();

        this.game = new RacingGame(carInput.split(','), Number(tryCountInput));
    }

    runGame () {
        for(let round = 0; round < this.game.tryCount; round ++){
            this.runRound();
        }
    }

    runRound() {
        for(let carIdx = 0; carIdx < this.game.carList.length; carIdx++){
            this.game.carList[carIdx].move();
        }
    }
}