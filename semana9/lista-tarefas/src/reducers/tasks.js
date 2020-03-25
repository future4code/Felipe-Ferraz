import { act } from "react-dom/test-utils";

const initialState = [
    {text: 'test'}
]

export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state, {
                    text: action.payload.text
                }
               ]   ;
        case "RM_TASK":
            return { ...state }
        default:
            return state;
    }
}

