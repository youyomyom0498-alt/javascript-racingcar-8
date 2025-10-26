import { errorMessage } from "../constants/errorMessage.js";

export function validateCarNamesLength (carList) {
    for(const carName of carList){
        if(carName.length > 5){
            throw new Error(errorMessage.INVALID_CAR_NAME_LENGTH);
        }
    }
}

export function validateCarNameNotNull (carList) {
    for(const carName of carList){
        if(!carName){
            throw new Error(errorMessage.CAR_NAME_NULL);
        }
    }
}

export function validateCarNameUnique (carList) {
    const carSet = new Set(carList);
    if(carSet.size !== carList.length){
        throw new Error(errorMessage.CAR_NAME_NOT_UNIQUE);
    }
}

export function validateTryCountNumber (tryCount) {
    if(isNaN(tryCount) || !Number.isInteger(tryCount)){
        throw new Error(errorMessage.TRY_COUNT_IS_NAN);
    }
}

export function validateTryCountPositive (tryCount) {
    if(tryCount <= 0){
        throw new Error(errorMessage.TRY_COUNT_POSITIVE);
    }
}