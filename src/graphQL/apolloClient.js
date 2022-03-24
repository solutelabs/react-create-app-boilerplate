// import hasuraClient/nestClient in the Component where you want to use graphQL query/mutation and pass it to the query/mutation's client property based on type of the API (Hasura/NestJS)

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const hasuraHttpLink = createHttpLink({
  uri: process.env.REACT_APP_HASURA_URL,
});

const nestHttpLink = createHttpLink({
  uri: process.env.REACT_APP_NEST_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const hasuraClient = new ApolloClient({
  link: authLink.concat(hasuraHttpLink),
  cache: new InMemoryCache(),
});

export const nestClient = new ApolloClient({
  link: authLink.concat(nestHttpLink),
  cache: new InMemoryCache(),
});
