import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';

// We're making a counter app

// Store -> Gloabal State

// Action (Increment)
const increment = () => {
  return {
    type: 'INCREMENT' // 'type' is just a name for the action, but type is the convention
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT' // 'type' is just a name for the action, but type is the convention
  }
}

// Reducer - Takes care of all the actions related to our counter app
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
}

// Add the reducer to the store
let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

// Dispatch
store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
