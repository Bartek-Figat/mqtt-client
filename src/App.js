import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
