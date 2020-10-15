import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import {Home, Browse, Signin, Signup} from "./pages";
import {IsUserRedirect, ProtectedRoute} from "./helpers/routes";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import {useAuthListener} from "./hooks";

export default function App() {
  const {user} = useAuthListener()

  return (
    <Router>

      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGH_IN} exact>
        <SignIn />
      </IsUserRedirect>

      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGH_UP} exact>
        <SignUp />
      </IsUserRedirect>

      <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
        <Browse />
      </ProtectedRoute>

      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
        <Home />
      </IsUserRedirect>

    </Router>
   );
}

