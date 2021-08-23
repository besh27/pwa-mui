import React from "react";
import Page from "./containers/Page";
import pageContent from "./metadata/pageContent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/nav">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <Page content={pageContent.about} />
        </Route>
        <Route path="/">
          <Page content={pageContent.homePage} />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
