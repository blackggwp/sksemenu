import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Home from "./layouts/Home";
import Page404 from "./layouts/Page404";
import Manual from "./layouts/Manual";
import Pos from "./layouts/Pos";

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route
          path={`${process.env.PUBLIC_URL}/pos`}
          component={Pos}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/manual/:manualid`}
          component={Manual}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/:brandtype/:brandid`}
          component={Home}
        />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
