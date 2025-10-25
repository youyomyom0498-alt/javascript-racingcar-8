import { RacingController } from "./controller/RacingController.js";

class App {
  async run() {
    const racingController = new RacingController();
    await racingController.startGame();
  }
}

export default App;
