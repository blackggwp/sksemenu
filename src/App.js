import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Home from "./layouts/Home";
import Page404 from "./layouts/Page404";
import Manual from "./layouts/Manual";

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        {/* <Route
          exact
          path={`${process.env.PUBLIC_URL}/t2`}
          render={(props) => <HomeT2 forRender={propsT2} {...props} />}
        /> */}
        <Route
          path={`${process.env.PUBLIC_URL}/manual/:manualid`}
          render={(props) => <Manual {...props} />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/:brandtype/:brandid`}
          render={(props) => <Home {...props} />}
        />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
