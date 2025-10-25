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
        this.runGame();
    }

    runGame () {
        this.view.printExecutionResultTitle();
        for(let round = 0; round < this.game.tryCount; round ++){
            this.game.runRound();
            this.view.printRoundCarPosition(this.game.carList);
        }

        const winnerList = this.game.getWinners();
        this.view.printWinners(winnerList);
    }
}