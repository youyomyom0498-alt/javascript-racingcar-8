import { Console } from "@woowacourse/mission-utils";

export class RacingView{
    constructor(){};

    async inputCarNames() {
        const nameInput = await Console.readLineAsync(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
        );
        return nameInput;
    }

    async inputTryCount() {
        const tryCountInput = await Console.readLineAsync(
            '시도할 횟수는 몇 회인가요?\n'
        );
        return tryCountInput;
    }
    
    printExecutionResultTitle(){
        Console.print('');
        Console.print('실행 결과');
    }

    printEachCarPosition(car) {
        const distanceString = '-'.repeat(car.position);
        Console.print(`${car.name} : ${distanceString}`);
    }

    printRoundCarPosition(carList){
        for(const car of carList){
            this.printEachCarPosition(car);
        }
        Console.print('');
    }

    printWinners(winnerList){
        const winnerNameList = winnerList.map(car => car.name);
        Console.print(`최종 우승자 : ${winnerNameList.join(', ')}`);
    }
}