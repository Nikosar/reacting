import {combineReducers} from 'redux'
import serverReducer from "./server/reducer";
import configurationReducer from "./configuration/reducer";
import contentReducer from "./content/reducer";

export default combineReducers({
        server: serverReducer,
        configuration: configurationReducer,
        content: contentReducer
    }
);