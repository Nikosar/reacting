import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
import {Provider} from 'react-redux';
import App from "./containers/App";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import rootReducer from "./reducers/reducers";
import {fetchComponents} from "./actions";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// store.dispatch(fetchComponents('processors')).then(() => console.log(store.getState()));

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

// fetch("http://localhost:8080/processors").then(response => response.json())
//     .then(processors => {
//         ReactDOM.render(<App components={processors} entityName={'processor'}/>, document.getElementById('root'));
//     });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
