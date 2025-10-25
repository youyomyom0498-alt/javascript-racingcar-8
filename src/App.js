import { RacingController } from "./controller/RacingController.js";

class App {
  async run() {
    const racingController = new RacingController();
    racingController.start();
  }
}

export default App;
