import {RECEIVE_COMPONENTS, REQUEST_COMPONENTS} from "./actionTypes";
import {CONFIGURATOR_API} from "../server";
import {showComponentList} from "../content/actions";

export function requestComponents(componentType) {
    return {
        type: REQUEST_COMPONENTS,
        componentType
    }
}


export function receiveComponents(componentType, json) {
    return {
        type: RECEIVE_COMPONENTS,
        componentType: componentType,
        content: json
    }
}

export function fetchComponents(componentType, filter) {
    return function (dispatch) {
        dispatch(requestComponents(componentType));

        let url = `${CONFIGURATOR_API}/${componentType}?page=0`;
        if (filter) {
            url += `&filter=${filter}`;
        }
        return fetch(url)
            .then(response => response.json(), error => console.log('error', error))
            .then(json => dispatch(receiveComponents(componentType, json)))
            .then(() => dispatch(showComponentList()));
    }
}