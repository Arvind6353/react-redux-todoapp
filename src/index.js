import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Main from './Main';

import { Provider } from 'react-redux'
import { createStore, compose } from 'redux';

import todoApp from './reducers'


const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(todoApp, enhancers);


ReactDOM.render(
   <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
