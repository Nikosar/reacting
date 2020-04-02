import {
    ADD_COMPONENT_TO_CONFIGURATION, CLEAR_CONFIGURATION,
    RECEIVE_CONFIGURATION,
    REMOVE_COMPONENT_FROM_CONFIGURATION
} from "./actionTypes";
import {CONFIGURATOR_API} from "../util";
import {CONFIGURATION} from "../../components/constants";
import {showConfiguration} from "../content/actions";

export function addComponentToConfiguration(component, componentType) {
    return (dispatch) => {
        dispatch({
            type: ADD_COMPONENT_TO_CONFIGURATION,
            component,
            componentType
        });
        dispatch(showConfiguration());
    }
}


export function removeComponent(id, componentType) {
    return {
        type: REMOVE_COMPONENT_FROM_CONFIGURATION,
        id,
        componentType
    }
}

const configuration_url = `${CONFIGURATOR_API}/${CONFIGURATION}`;

export function saveConfiguration(configuration) {

    const s = JSON.stringify(configuration);

    //TODO dispatch request receive
    return function (dispatch) {
        fetch(configuration_url, {
            body: s,
            headers: {
                "Content-Type": "application/json"
            },
            method: 'PUT'
        }).then(response => response.json())
            .catch(err => console.log(err));
    }
}

export function receiveConfiguration(json) {
    return {
        type: RECEIVE_CONFIGURATION,
        configuration: json
    }
}

export function fetchConfiguration(id) {
    return function (dispatch) {
        return fetch(`${configuration_url}/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receiveConfiguration(json)))
            .then(() => dispatch(showConfiguration()))
            .catch(err => console.log(err));
    }
}

//TODO ServerError
class HttpNotFoundError extends Error {
}

export function clearConfiguration() {
    return {
        type: CLEAR_CONFIGURATION
    }
}

export function deleteConfiguration(id) {
    let configuration = {id: id};
    if (!id) {
        return function (dispatch) {
            dispatch(clearConfiguration());
        }
    }

    return function (dispatch) {
        fetch(configuration_url, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(configuration)
        }).then(response => {
            if (response.status === 404) {
                throw new HttpNotFoundError();
            }
        }).then(response =>
            dispatch(clearConfiguration())
        )
            .catch(err => {
                if (err instanceof HttpNotFoundError) {
                    //??
                    // dispatch(clearConfiguration());
                } else {
                    throw err;
                }
            })

    };
}