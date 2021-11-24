import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AlarmBanner from "./components/AlarmBanner";
import Build from "./components/Build";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Messages from "./components/Messages";
import Reporting from "./components/Reporting";
import Settings from "./components/Settings";
import Users from "./components/Users";
import {linkNavigation} from "./routers/index";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={`${linkNavigation[0].target}`}>
            <Dashboard />
          </Route>
          <Route exact path={`${linkNavigation[1].target}`}>
            <Build />
          </Route>
          <Route exact path={`${linkNavigation[2].target}`}>
            <Users />
          </Route>
          <Route exact path={`${linkNavigation[3].target}`}>
            <AlarmBanner />
          </Route>
          <Route exact path={`${linkNavigation[4].target}`}>
            <Reporting />
          </Route>
          <Route exact path={`${linkNavigation[5].target}`}>
            <Messages />
          </Route>
          <Route exact path={`${linkNavigation[6].target}`}>
            <Settings />
          </Route>
          <Route exact path={`${linkNavigation[7].target}`}>
            <Login />
          </Route>
          <Route exact path={`${linkNavigation[8].target}`}>
            <Logout />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
