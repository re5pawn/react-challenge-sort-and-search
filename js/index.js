import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { appReducer, handleLoadedDataMiddleware } from './appReducer';

const store = createStore(appReducer, applyMiddleware(handleLoadedDataMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App dataUrl="data.json" />
  </Provider>,
  document.getElementById('root')
);
