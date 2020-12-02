import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

const httpLink1 = new createHttpLink({
  uri: process.env.REACT_APP_API_URL,
});
const httpLink2 = new createHttpLink({
  uri: process.env.REACT_APP_HASURA_ENDPOINT_URI,
});
const authLink = setContext(() => {
  const jwt_token = localStorage.getItem("jwt_token");
  return {
    headers: {
      authorization: jwt_token ? `Bearer ${jwt_token}` : "",
      //authorization : jwt_token? "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLXJvbGUiOiJib3hfb3duZXIiLCJ4LWhhc3VyYS11c2VyLWlkIjoiNGM2NzEwNzUtNDE5Zi00NDgwLWE4NzktYzAzMDJjNDFjMjdkIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJib3hfb3duZXIiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoiYm94X293bmVyIiwieC1oYXN1cmEtZ3ltLWlkIjoiNjhlMDRiNmEtY2I0MC00ODgzLTk0MzctYzY4YjdmOGQzYmYyIn0sImlhdCI6MTYwMDkzNDA3NiwiZXhwIjoxNjA2MTE4MDc2fQ.DzP0oa8zm2cbC11YliV-Hkj7WapZ5GBjz2TkLsA40NI":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLXJvbGUiOiJib3hfb3duZXIiLCJ4LWhhc3VyYS11c2VyLWlkIjoiNGM2NzEwNzUtNDE5Zi00NDgwLWE4NzktYzAzMDJjNDFjMjdkIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJib3hfb3duZXIiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoiYm94X293bmVyIiwieC1oYXN1cmEtZ3ltLWlkIjoiNjhlMDRiNmEtY2I0MC00ODgzLTk0MzctYzY4YjdmOGQzYmYyIn0sImlhdCI6MTYwMDkzNDA3NiwiZXhwIjoxNjA2MTE4MDc2fQ.DzP0oa8zm2cbC11YliV-Hkj7WapZ5GBjz2TkLsA40NI"
    },
  };
});
export const clientAuth = new ApolloClient({
  link: authLink.concat(httpLink1),
  cache: new InMemoryCache(),
});
export const hasuraClient = new ApolloClient({
  link: authLink.concat(httpLink2),
  cache: new InMemoryCache(),
});
