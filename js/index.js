import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { data, searchQuery, activeUser, handleLoadedDataMiddleware } from './appReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({ data, searchQuery, activeUser }), composeEnhancers(applyMiddleware(handleLoadedDataMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <App dataUrl="data.json" />
  </Provider>,
  document.getElementById('root')
);
