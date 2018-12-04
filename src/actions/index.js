export const REQUEST_COMPONENTS = 'REQUEST_COMPONENTS';

export function requestComponents(componentType) {
    return {
        type: REQUEST_COMPONENTS,
        componentType
    }
}

export const RECEIVE_COMPONENTS = 'RECEIVE_COMPONENTS';

export function receiveComponents(componentType, json) {
    return {
        type: RECEIVE_COMPONENTS,
        componentType,
        components: json
    }
}

export function fetchComponents(componentType) {
    return function (dispatch) {
        dispatch(requestComponents(componentType));

        return fetch(`http://localhost:8080/${componentType}`)
            .then(response => response.json(), error => console.log('error', error))
            .then(json => dispatch(receiveComponents(componentType, json)));
    }
}