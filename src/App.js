import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import HomeNew from "layouts/HomeNew";
import HomeOld from "layouts/Home";
import Home3 from "layouts/Home3";
import Manual from "layouts/Manual";

import { pic_pk_nm, pic_pk_ovl, pic_pk_promotion } from "./Menu_Data";
import Page404 from "layouts/Page404";

const propsT2 = {
  pic_normal: pic_pk_nm,
  pic_ovl: pic_pk_ovl,
  pic_promotion: pic_pk_promotion,
  headerText: "Tier2",
};

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/t2`}
          render={(props) => <HomeOld forRender={propsT2} {...props} />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/menu/:brandid`}
          render={(props) => <HomeNew {...props} />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/catalogue/:brandid`}
          render={(props) => <Home3 {...props} />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/manual/:manualId`}
          render={(props) => <Manual {...props} />}
        />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
