import store from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateType} from "./Redux/state";

let callSubscriber = (state: StateType) => {
    ReactDOM.render(<React.StrictMode>
        <App state={state}
             dispatch = {store.dispatch.bind(store)}
        />
    </React.StrictMode>, document.getElementById('root'));
}

callSubscriber(store.getState());



store.subscribe(() => {
    let state = store.getState()
    callSubscriber(state)
});

reportWebVitals();
