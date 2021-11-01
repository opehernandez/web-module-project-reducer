export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const CLEAR_MEMORY = "CLEAR_MEMORY"
export const SET_MEMORY = "SET_MEMORY"
export const GET_FROM_MEMORY = "GET_FROM_MEMORY"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (op) => {
    return({type:CHANGE_OPERATION, payload:op});
}
export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}
export const clearMemory = () => {
    return({ type: CLEAR_MEMORY})
}
export const setMemory = () => {
    return({type: SET_MEMORY})
}
export const getFromMemory = () => {
    return({type: GET_FROM_MEMORY})
}