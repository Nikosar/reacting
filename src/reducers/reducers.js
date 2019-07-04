import {combineReducers} from 'redux'
import {RECEIVE_COMPONENTS, REQUEST_COMPONENTS} from "../actions";


function f(state = {}, action) {
    switch (action.type) {
        // case REQUEST_COMPONENTS:
        //     return Object.assign({}, state, {components: action.components});
        case RECEIVE_COMPONENTS:
            return Object.assign({}, state, {
                components: action.components,
                entityName: action.componentType,
                categoryName: action.categoryName,
                count: action.components.length
            });
        default:
            return state;
    }
}

const rootReducer = f;

export default rootReducer;