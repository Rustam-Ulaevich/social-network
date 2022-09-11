// @ts-ignore
import {store} from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateType} from "./Redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state: StateType) => {
    // @ts-ignore
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}

//rerenderEntireTree(store.getState());

// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// });

reportWebVitals();
