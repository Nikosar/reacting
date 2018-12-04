import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
import App from "./containers/App";
import {createStore} from "redux";

ReactDOM.render(<App/>, document.getElementById('root'));

$.ajax({
    url: "http://localhost:8080/processors",
}).then(function (processors) {
    ReactDOM.render(<App components={processors} entityName={'processor'}/>, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
