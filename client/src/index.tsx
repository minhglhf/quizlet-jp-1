import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from './apollo-graphql';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { ToastProvider } from "react-toast-notifications";
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.render(
  // <React.StrictMode>
  <ToastProvider placement="bottom-left">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </PersistGate>
    </Provider>
  </ToastProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
