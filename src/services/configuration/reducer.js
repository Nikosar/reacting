import {
    ADD_COMPONENT_TO_CONFIGURATION,
    CLEAR_CONFIGURATION,
    RECEIVE_CONFIGURATION,
    REMOVE_COMPONENT_FROM_CONFIGURATION
} from "./actionTypes";
import {HDDS, MOTHERBOARDS, PROCESSORS, RAMS, SSDS, VIDEO_CARDS} from "../../components/constants";

const initialState = {
    id: 0,
    [MOTHERBOARDS]: [],
    [PROCESSORS]: [],
    [VIDEO_CARDS]: [],
    [RAMS]: [],
    [SSDS]: [],
    [HDDS]: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_COMPONENT_TO_CONFIGURATION:
            return {
                ...state,
                [action.componentListType]: state[action.componentListType].concat(action.component)
            };
        case REMOVE_COMPONENT_FROM_CONFIGURATION:
            return {
                ...state,
                [action.componentType]: state[action.componentType].filter(e => e.id !== action.id)
            };

        case RECEIVE_CONFIGURATION:
            return Object.assign({}, action.configuration);
        case CLEAR_CONFIGURATION:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}