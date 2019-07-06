import {RECEIVE_COMPONENTS, REQUEST_COMPONENTS} from "./actionTypes";

export function requestComponents(componentType) {
    return {
        type: REQUEST_COMPONENTS,
        componentType
    }
}


export function receiveComponents(componentType, categoryName, json) {
    return {
        type: RECEIVE_COMPONENTS,
        componentType,
        categoryName,
        components: json
    }
}

export function fetchComponents(componentType, categoryName) {
    return function (dispatch) {
        dispatch(requestComponents(componentType));

        return fetch(`http://localhost:8080/${componentType}`)
            .then(response => response.json(), error => console.log('error', error))
            .then(json => dispatch(receiveComponents(componentType, categoryName, json)));
    }
}