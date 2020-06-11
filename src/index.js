import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import 'antd-mobile/dist/antd-mobile.css';
// import AdminLayout from "layouts/Admin.jsx";
import Home from "layouts/Home";
import Menu from "layouts/Menu";
// import HomeOld from "layouts/HomeOld";
import PrivateRoute from "helpers/PrivateRoute";
import Test from './helpers/Test'

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

ReactDOM.render(
  
  <Router history={hist}>
    <Switch>
      <Route exact path="/" render={props => <Home forRender={propsHome} {...props} />} />
      <PrivateRoute path="/menu" render={props => <Menu {...props} />} />
      <Route path="/t2" render={props => <Home forRender={propsT2} {...props} />} />
      <Redirect to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
