import React from 'react';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {state} from "./Redux/state";

import {rerenderEntireTree} from "./render";

rerenderEntireTree()

reportWebVitals();
