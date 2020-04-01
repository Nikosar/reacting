import {CHANGE_CONTENT} from "./actionTypes";

const CONFIGURATION = "Configuration";
const COMPONENT_LIST = "ComponentList";
const CONFIGURATION_LIST = "ConfigurationList";

export function showConfiguration() {
    return {
        type: CHANGE_CONTENT,
        pageName: CONFIGURATION
    }
}

export function showComponentList() {
    return {
        type: CHANGE_CONTENT,
        pageName: COMPONENT_LIST
    }
}

export function showConfigurationList() {
    return {
        type: CHANGE_CONTENT,
        pageName: CONFIGURATION_LIST
    }
}