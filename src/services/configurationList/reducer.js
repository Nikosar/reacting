import {RECEIVE_CONFIGURATIONS} from "./actionTypes";

const initialState = {
    configurations: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        // case REQUEST_CONFIGURATIONS:
        //     return Object.assign({}, state, {components: action.components});
        case RECEIVE_CONFIGURATIONS:
            return {
                ...state,
                configurations: action.configurations
            };
        default:
            return state;
    }
}