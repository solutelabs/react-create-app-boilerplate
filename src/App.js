import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProtectedPage from "./pages/ProtectedPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      {/* 
          This is just a simple example for navigation,
          but you should create a common Header or a Layout component
      */}

      <nav className="p-5 w-full flex justify-center space-x-10">
        <NavLink to="/" exact activeClassName="text-blue-700 font-medium">
          Home
        </NavLink>

        <NavLink to="/login" exact activeClassName="text-blue-700 font-medium">
          Login
        </NavLink>

        <NavLink
          to="/protected"
          exact
          activeClassName="text-blue-700 font-medium"
        >
          Protected
        </NavLink>
      </nav>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <ProtectedRoute exact path="/protected">
          <ProtectedPage />
        </ProtectedRoute>

        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
