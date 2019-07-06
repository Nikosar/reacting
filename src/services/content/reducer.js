import {CHANGE_CONTENT} from "./actionTypes";

const initialState = {
    pageName: "Configuration"
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_CONTENT:
                return {
                    ...state,
                    pageName: action.pageName
                };
        default:
            return state;
    }
}