import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import registerServiceWorker from './registerServiceWorker';
import { client } from './Apollo';
import { Routes } from './routes';
import './index.css';
import Main from './Main';

ReactDOM.render(
  <ApolloProvider client={client as any}>
    <Main />
    <Routes />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
