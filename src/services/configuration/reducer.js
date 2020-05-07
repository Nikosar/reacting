import {
    ADD_COMPONENT_TO_CONFIGURATION,
    CLEAR_CONFIGURATION,
    RECEIVE_CONFIGURATION,
    REMOVE_COMPONENT_FROM_CONFIGURATION
} from "./actionTypes";
import {HDDS, MOTHERBOARDS, PROCESSORS, RAMS, SSDS, VIDEO_CARDS} from "../../components/constants";

export const initialState = {
    id: -1,
    name: "",
    [MOTHERBOARDS]: [],
    [PROCESSORS]: [],
    [VIDEO_CARDS]: [],
    [RAMS]: [],
    [SSDS]: [],
    [HDDS]: [],
    summary: {
        totalPrice: 0,
        compatibility: "",
        processorBenchmark: 0,
        videoCardBenchmark: 0,
        processorBenchmarkToPrice: 0,
        videoCardBenchmarkToPrice: 0
    }
};

function calculateSummary(newConfigurationState) {

}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_COMPONENT_TO_CONFIGURATION:
            return {
                ...state,
                [action.componentType]: state[action.componentType].concat(action.component)
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