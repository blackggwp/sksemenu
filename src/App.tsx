import React, { useState } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./layouts/Home";
import Page404 from "./layouts/Page404";
import Manual from "./layouts/Manual";
import Pos from "./layouts/Pos";
import Auth from "./layouts/Auth";
import PrivateRoute from "./helpers/PrivateRoute";
import MyContext from "./contexts/MyContext";
import Graphql from "./layouts/Graphql";
import Feedback from "./layouts/Feedback/index";
import Report from "./layouts/Feedback/Report";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import Themes from "./themes";

const hist = createBrowserHistory();
function App() {
  const [percen, setPercen] = useState(0);

  const handlePercen = (value: number) => {
    setPercen(value);
    if (value === 100) {
      setPercen(0);
    }
  };
  const context = {
    api: {
      percen: percen,
      handlePercen,
    },
  };

  return (
    <MuiThemeProvider theme={Themes.default}>
      <CssBaseline />
      <MyContext.Provider value={context}>
        <Router history={hist}>
          <Switch>
            <PrivateRoute path="/pos" isAuthenticated={false} component={Pos} />
            <PrivateRoute
              path="/graphql"
              isAuthenticated={false}
              component={Graphql}
            />
            <PrivateRoute
              path="/feedback/report"
              isAuthenticated={false}
              component={Report}
            />
            <Route path={`${process.env.PUBLIC_URL}/auth`} component={Auth} />
            {/* <Route
          path={`${process.env.PUBLIC_URL}/pos`}
          component={Pos}
        /> */}
            <Route
              path={`${process.env.PUBLIC_URL}/manual/:manualid`}
              component={Manual}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/feedback`}
              component={Feedback}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/:brandtype/:brandid`}
              component={Home}
            />
            {/* <Route path={`${process.env.PUBLIC_URL}/test`} component={Test} /> */}
            <Route component={Page404} />
          </Switch>
        </Router>
      </MyContext.Provider>
    </MuiThemeProvider>
  );
}

export default App;
