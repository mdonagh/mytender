import {
  ApolloClient,
  ApolloProvider as ApolloHooksProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import cache from '../cache';

const httpLink = createHttpLink({
  uri: 'https://mytender-dc1b2d59a1a2.herokuapp.com/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  let token = await SecureStore.getItemAsync('token');

  return {
    headers: {
      ...headers,
      Authorization: token ? `Basic ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  defaultOptions: {
    fetchPolicy: 'cache-and-network',
  },
});

export const ApolloProvider = ({ children }) => {
  return <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>;
};
