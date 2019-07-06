import {ADD_COMPONENT_TO_CONFIGURATION} from "./actionTypes";

const initialState = {};

export default function (state = initialState, action) {

    switch (action.type) {
        case ADD_COMPONENT_TO_CONFIGURATION:
            return {
                ...state,
                processor: action.component
            };
        default:
            return state;
    }
}