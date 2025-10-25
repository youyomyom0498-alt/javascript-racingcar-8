import { Console } from "@woowacourse/mission-utils";
import { RacingGame } from "../model/RacingGame.js";
import { RacingView } from "../view/RacingView.js";

export class RacingController {
    constructor() {
        this.view = new RacingView();
        this.game = null;
    }

    async start() {
        const carInput = await this.view.inputCarNames();
        this.game = new RacingGame(carInput.split(','));
    }
}