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