import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { hasuraClient } from "./apolloClient";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";

ReactDOM.render(
  <React.StrictMode>
    <ApolloHooksProvider client={hasuraClient}>
      <ApolloProvider client={hasuraClient}>
        <App />
      </ApolloProvider>
    </ApolloHooksProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
