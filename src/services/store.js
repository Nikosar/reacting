import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";


export default (initialState) => {
    initialState = JSON.parse(window.localStorage.getItem("state")) || initialState;

    const store = createStore(rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware)
    );

    store.subscribe(() => {
        const state = store.getState();
        const persist = {
            configuration: state.configuration
        };
        window.localStorage.setItem("state", JSON.stringify(persist));
    });

    return store;
}