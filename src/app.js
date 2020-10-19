import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import {Home, Browse, SignIn, SignUp} from "./pages";
import {IsUserRedirect, ProtectedRoute} from "./helpers/routes";
import {useAuthListener} from "./hooks";
import {NotFoundContainer} from "./containers/not-found";

export default function App() {
  const {user} = useAuthListener()

  return (
    <Router>
      <Switch>

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

      <Route component={NotFoundContainer}/>
      </Switch>
    </Router>
   );
}

