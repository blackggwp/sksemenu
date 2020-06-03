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
//import Home from "layouts/Home";
import Menu from "layouts/Menu";
import HomeOld from "layouts/HomeOld";

import pic_normal from './assets/img/normal/normal_merge_opt.jpg'
import pic_ovl from './assets/img/normal/ovl_normal_merge_opt.jpg'
import pic_promotion from './assets/img/normal/normal_promotion_opt.jpg'

import pic_pk_new from './assets/img/pk/pk_new_merge_opt.jpg'
import pic_pk_ovl from './assets/img/pk/ovl_pk_merge.jpg'
import pic_pk_promotion from './assets/img/pk/pk_promotion_opt.jpg'
import PrivateRoute from "helpers/PrivateRoute";

const propsHome = {
  "pic_normal": pic_normal,
  "pic_ovl": pic_ovl,
  "pic_promotion": pic_promotion,
  "headerText": "Tier1"
}

const propsT2 = {
  "pic_normal": pic_pk_new,
  "pic_ovl": pic_pk_ovl,
  "pic_promotion": pic_pk_promotion,
  "headerText": "Tier2"
}

const hist = createBrowserHistory();

ReactDOM.render(
  
  <Router history={hist}>
    <Switch>
      <Route exact path="/" render={props => <HomeOld forRender={propsHome} {...props} />} />
      <PrivateRoute path="/menu" render={props => <Menu {...props} />} />
      <Route path="/t2" render={props => <HomeOld forRender={propsT2} {...props} />} />
      <Redirect to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
