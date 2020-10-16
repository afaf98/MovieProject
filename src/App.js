import React from "react";
import "./App.css";
import { Switch, Route, NavLink, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <navBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/discover">Discover</NavLink>
        <NavLink to="/about">About</NavLink>
      </navBar>
      <Switch>
        {/* <Route path="/discover" component={DiscoverMoviePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} /> */}
      </Switch>
    </div>
  );
}

export default App;
