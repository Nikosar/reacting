import {ADD_COMPONENT_TO_CONFIGURATION} from "./actionTypes";

export function addComponentToConfiguration(component) {
    return {
        type: ADD_COMPONENT_TO_CONFIGURATION,
        component
    }
}