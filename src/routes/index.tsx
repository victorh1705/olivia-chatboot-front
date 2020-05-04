import React from "react";
import { Route, Switch } from "react-router-dom";
import DashBoard from "../pages/Dashboard";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={DashBoard} />
  </Switch>
);
export default Routes;
