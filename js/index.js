import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { appReducer } from './appReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <App dataUrl="data.json" />
  </Provider>,
  document.getElementById('root')
);
