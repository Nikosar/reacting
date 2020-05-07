import {RECEIVE_CONFIGURATIONS, REQUEST_CONFIGURATIONS} from "./actionTypes";
import {CONFIGURATOR_API} from "../server";
import {CONFIGURATIONS} from "../../components/constants";

// export function requestComponents(componentType) {
//     return {
//         type: REQUEST_CONFIGURATIONS,
//         componentType
//     }
// }


export function receiveConfigurations(json) {
    return {
        type: RECEIVE_CONFIGURATIONS,
        configurations: json
    }
}

const url = `${CONFIGURATOR_API}/${CONFIGURATIONS}`;

export function fetchConfigurations() {
    return function (dispatch) {
        // dispatch(requestComponents(componentType));

        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveConfigurations(json)))
            .catch(err => console.log(err));
    }
}