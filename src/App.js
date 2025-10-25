import { RacingController } from "./controller/RacingController.js";

class App {
  async run() {
    const racingController = new RacingController();
    await racingController.startGame();
    racingController.runGame();
  }
}

export default App;
