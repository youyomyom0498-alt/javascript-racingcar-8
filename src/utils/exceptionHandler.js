export function exceptionHandler(error) {
    throw new Error(`[ERROR] ${error.message}`);
}