import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, addTextPost, StateType} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(<React.StrictMode>
        <App state={state}
             addPost={addPost}
             addTextPost={addTextPost}
        />
    </React.StrictMode>, document.getElementById('root'));
}
// reportWebVitals();
