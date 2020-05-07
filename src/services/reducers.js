import {combineReducers} from 'redux'
import componentReducer from "./component/reducer";
import configurationReducer from "./configuration/reducer";
import configurationListReducer from "./configurationList/reducer";
import contentReducer from "./content/reducer";

export default combineReducers({
        component: componentReducer,
        configuration: configurationReducer,
        configurationList: configurationListReducer,
        content: contentReducer
    }
);