import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import SessionManager from '../utils/session';

export default ({ component: Component, roles, ...rest }) => (
    <Route {...rest} render={props => {
        if (!SessionManager.isLoggedIn() && SessionManager.getUser() == null) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // check if route is restricted by role
        if (roles && roles.indexOf(SessionManager.getUserRole()) === -1) {
            // role not authorised so redirect to home page
            return <Redirect to={{ pathname: '/'}} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)