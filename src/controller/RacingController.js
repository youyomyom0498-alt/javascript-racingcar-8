import { RacingGame } from "../model/RacingGame.js";
import { exceptionHandler } from "../utils/exceptionHandler.js";
import { validateCarNameNotNull, validateCarNamesLength, validateCarNameUnique, validateTryCountNumber } from "../utils/validator.js";
import { RacingView } from "../view/RacingView.js";

export class RacingController {
    constructor() {
        this.view = new RacingView();
        this.game = null;
    }

    async startGame() {
        try{
            const carInput = await this.view.inputCarNames();
            const carNameList = carInput.split(',');

            validateCarNamesLength(carNameList);
            validateCarNameNotNull(carNameList);
            validateCarNameUnique(carNameList);

            const tryCountInput = await this.view.inputTryCount();

            validateTryCountNumber(Number(tryCountInput));

            this.game = new RacingGame(carNameList, Number(tryCountInput));
            this.runGame();
        } catch (error){
            exceptionHandler(error);
        }

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