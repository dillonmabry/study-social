import * as React from "react";
import { ApolloProvider } from 'react-apollo';
import { client } from './Apollo';
import { Routes } from './routes';

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}