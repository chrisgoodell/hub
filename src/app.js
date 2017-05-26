import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Client from './client';

import Profile from './profile';

let client = Client();

let App = () =>
  <ApolloProvider client={client}>
    <Profile />
  </ApolloProvider>

export default App;
