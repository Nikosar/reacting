import {combineReducers} from 'redux'
import serverReducer from "./component/reducer";
import configurationReducer from "./configuration/reducer";
import configurationListReducer from "./configurationList/reducer";
import contentReducer from "./content/reducer";

export default combineReducers({
        component: serverReducer,
        configuration: configurationReducer,
        configurationList: configurationListReducer,
        content: contentReducer
    }
);