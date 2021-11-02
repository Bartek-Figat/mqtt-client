import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AlarmBanner from "./components/AlarmBanner";
import Analystic from "./components/Analystic";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Messages from "./components/Messages";
import Reporting from "./components/Reporting";
import Settings from "./components/Settings";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/analystic">
            <Analystic />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/alarm_banner">
            <AlarmBanner />
          </Route>
          <Route exact path="/reporting">
            <Reporting />
          </Route>
          <Route exact path="/messages">
            <Messages />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
