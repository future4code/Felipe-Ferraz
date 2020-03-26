import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage"
import AdmPage from "../AdmPage"
import CreateTripsPage from '../CreateTripsPage'
import AproveTripsPage from '../AproveTripsPage'
import listTripsAdmPage from '../ListTripsAdmPage'
import listUserTripsPage from '../ListTripsUserPage'


export const routes = {
  homeScreen: "/",
  root: "/login",
  admPage: "/adm",
  createTrips: "/create ",
  listAdmTrips: "/list ",
  aproveTrips: "/aprove ",
  listUserTrips: "/listUserTrips",
 

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.homeScreen} component={HomePage} />
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.admPage} component={AdmPage} />
        <Route exact path={routes.createTrips} component={CreateTripsPage} />
        <Route exact path={routes.aproveTrips} component={AproveTripsPage} />
        <Route exact path={routes.listAdmTrips} component={listTripsAdmPage} />
        <Route exact path={routes.listUserTrips} component={listUserTripsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
