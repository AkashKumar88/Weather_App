import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import  ReduxPromise from "redux-promise";

import App from './components/app';
import reducers from './reducers';



// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(ReduxPromise))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));