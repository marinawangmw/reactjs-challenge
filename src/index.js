import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import generateStore from './redux/store';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import './index.css';

const store = generateStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
  
  , document.getElementById('root')
);

serviceWorker.unregister();
