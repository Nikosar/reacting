import {RECEIVE_COMPONENTS} from "./actionTypes";

const initialState = {
    components: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        // case REQUEST_COMPONENTS:
        //     return Object.assign({}, state, {components: action.components});
        case RECEIVE_COMPONENTS:
            return {
                ...state,
                components: action.components,
                componentType: action.componentType,
                // count: action.components.length
            };
        default:
            return state;
    }
}