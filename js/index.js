import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { appReducer } from './appReducer';

const store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <App dataUrl="data.json" />
  </Provider>,
  document.getElementById('root')
);
