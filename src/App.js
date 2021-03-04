import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Home from "./layouts/Home";
import Page404 from "./layouts/Page404";

// import { pic_pk_nm, pic_pk_ovl, pic_pk_promotion } from "./Menu_Data";
// import HomeT2 from "./layouts/HomeT2";

// const propsT2 = {
//   pic_normal: pic_pk_nm,
//   pic_ovl: pic_pk_ovl,
//   pic_promotion: pic_pk_promotion,
//   headerText: "Tier2",
// };

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      {/* <Router history={hist} basename={"/test"}> */}
      <Switch>
        {/* <Route
          exact
          path={`${process.env.PUBLIC_URL}/t2`}
          render={(props) => <HomeT2 forRender={propsT2} {...props} />}
        /> */}
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
