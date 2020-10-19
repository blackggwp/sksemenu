import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import HomeNew from "layouts/HomeNew";
import HomeOld from "layouts/Home";

import { pic_normal_nm, pic_normal_ovl, pic_normal_promotion, pic_pk_nm, pic_pk_ovl, pic_pk_promotion } from './Menu_Data'

const propsHome = {
  "pic_normal": pic_normal_nm,
  "pic_ovl": pic_normal_ovl,
  "pic_promotion": pic_normal_promotion,
  "headerText": "Tier1"
}

const propsT2 = {
  "pic_normal": pic_pk_nm,
  "pic_ovl": pic_pk_ovl,
  "pic_promotion": pic_pk_promotion,
  "headerText": "Tier2"
}

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        {/* <Route exact path="/" render={props => <Home forRender={propsHome} {...props} />} /> */}
        <Route exact path="/t2" render={props => <HomeOld forRender={propsT2} {...props} />} />
        <Route path="/menu/:brandid" render={props => <HomeNew forRender={propsHome} {...props} />} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </Router>
  );
}

export default App;
