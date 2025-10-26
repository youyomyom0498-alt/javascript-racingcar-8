export function exceptionHandler(error) {
    throw `[ERROR] ${error.message}`;
}