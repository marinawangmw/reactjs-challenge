import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import generateStore from './redux/store';
import { Provider } from 'react-redux';

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import * as serviceWorker from './serviceWorker';
import './index.css';

const store = generateStore();

const client = new ApolloClient({
    uri:"https://rickandmortyapi.com/graphql/"
  })

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store} >
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
  
  , document.getElementById('root')
);

serviceWorker.unregister();
