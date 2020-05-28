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
import PdfView from "layouts/PdfView";

const hist = createBrowserHistory();

ReactDOM.render(
  
  <Router history={hist}>
    <Switch>
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route path="/menu" render={props => <Menu {...props} />} />
      <Route path="/pdf" render={props => <PdfView {...props} />} />
      <Redirect to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
