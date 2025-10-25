import { RacingGame } from "../model/RacingGame.js";
import { RacingView } from "../view/RacingView.js";

export class RacingController {
    constructor() {
        this.view = new RacingView();
        this.game = null;
    }

    async start() {
        const carInput = await this.view.inputCarNames();
        const tryCountInput = await this.view.inputTryCount();

        this.game = new RacingGame(carInput.split(','), Number(tryCountInput));

        for(let i = 0; i < this.game.carList.length; i++){
            this.game.carList[i].move();
        }
        
    }
}