import { Console } from "@woowacourse/mission-utils";

export function exceptionHandler(error) {
    Console.print(`[ERROR] ${error.message}`);
}