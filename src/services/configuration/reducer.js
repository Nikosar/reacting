import {
    ADD_COMPONENT_TO_CONFIGURATION, CLEAR_CONFIGURATION,
    RECEIVE_CONFIGURATION,
    REMOVE_COMPONENT_FROM_CONFIGURATION
} from "./actionTypes";
import {MOTHERBOARDS, PROCESSORS, RAMS, SSDS, VIDEO_CARDS, HDDS} from "../../components/constants";

const initialState = {
    [MOTHERBOARDS]: [],
    [PROCESSORS]: [],
    [VIDEO_CARDS]: [],
    [RAMS]: [],
    [SSDS]: [],
    [HDDS]: [],
};

export default function (state = initialState, action) {
    let componentList;

    switch (action.type) {
        case ADD_COMPONENT_TO_CONFIGURATION:
            componentList = state[action.componentType + 's'];
            componentList.push(action.component);

            return {
                ...state,
                [action.componentType + 's']: componentList
            };
        case REMOVE_COMPONENT_FROM_CONFIGURATION:
            componentList = state[action.componentType];
            const i = componentList.findIndex((e) => e.id === action.id);
            componentList.splice(i, 1);
            return {
                ...state,
                [action.componentType]: componentList
            };

        case RECEIVE_CONFIGURATION:
            // let configuration = {};
            // for (let key of componentKeys) {
            //     componentList = [];
            //     action.configuration[key] && Object.values(action.configuration[key])
            //         .forEach(component => componentList.push(component));
            //     configuration[key] = componentList;
            // }
            const assign = Object.assign({}, action.configuration);
            return assign;
        case CLEAR_CONFIGURATION:
            for (let key in initialState) initialState[key] = [];
            return Object.assign({}, initialState);
        default:
            return state;
    }
}