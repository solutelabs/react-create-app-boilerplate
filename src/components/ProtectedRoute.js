import { Route, Redirect } from "react-router-dom";

// this is just a simple example of how you can redirect based on the token
// but you should probably have some more logic here
// like checking if the token is expired or not
// or checking if the user has a role
// or checking if the user is active
// or whatever you need to do to protect the route

export default function ProtectedRoute({ children, ...rest }) {
  const token = localStorage?.getItem("access_token");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token && token.length > 0 ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
