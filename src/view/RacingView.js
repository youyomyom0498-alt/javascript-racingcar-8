import { Console } from "@woowacourse/mission-utils";

export class RacingView{
    constructor(){};

    async inputCarNames() {
        const nameInput = await Console.readLineAsync(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
        );
        return nameInput;
    }

    async inputTryCount() {
        const tryCountInput = await Console.readLineAsync(
            '시도할 횟수는 몇 회인가요?'
        );
        return tryCountInput;
    }
    
    printExecutionResultTitle(){
        Console.print('\n실행 결과');
    }

    printEachCarPosition(car) {
        const distanceString = '-'.repeat(car.position);
        Console.print(`${car.name} : ${distanceString}`);
    }

    printRoundCarPosition(carList){
        for(const car of carList){
            this.printEachCarPosition(car);
        }
        Console.print('\n');
    }
}