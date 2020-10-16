import React from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <navBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/discover">Discover</NavLink>
        <NavLink to="/about">About</NavLink>
      </navBar>
      <Switch>
        <Route path="/discover" />
        <Route path="/about" />
        <Route path="/" />
      </Switch>
    </div>
  );
}

export default App;
