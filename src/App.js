import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import { Role } from "./utils/session";
import Home from "./pages/Home";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      {adminRoutes.map((route, index) => {
        return (
          <PrivateRoute
            key={index}
            path={route.path}
            exact={route.exact}
            roles={[Role.admin]}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}

      {userRoutes.map((route, index) => {
        return (
          <PrivateRoute
            key={index}
            path={route.path}
            exact={route.exact}
            roles={[Role.mahasiswa]}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);
