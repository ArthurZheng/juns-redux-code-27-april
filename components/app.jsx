import '../public/css/style.css';
// import '../public/css/base.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Todos from './todos';


let elementToMountReactTo = document.getElementById('react-content');

ReactDOM.render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  elementToMountReactTo
);
