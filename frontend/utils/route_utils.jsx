//automate process of allowing users to see certain components at certain privileges
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom' ;

//for auth route and protected routes
const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

//based on <AuthRoute path="" component={} />
//if user presses log in even though they are logged in
//route - if logged in, redirect to root/home, else, show the component
const Auth = ({ loggedIn, path, component: Component }) => (
  <Route 
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route 
    path={path}
    render={
      props => (
        loggedIn ? <Component {...props} /> : <Redirect to="/signup"/>
      )}
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));



