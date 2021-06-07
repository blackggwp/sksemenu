import React, { useState } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./layouts/Home";
import Page404 from "./layouts/Page404";
import Manual from "./layouts/Manual";
import Pos from "./layouts/Pos";
import Auth from "./layouts/Auth";
import PrivateRoute from "./helpers/PrivateRoute";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider, useMediaQuery } from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import MyContext from "./contexts/MyContext";
import Graphql from "./layouts/Graphql";
import Feedback from "./layouts/Feedback/index";
// import Charts from "./layouts/charts/ChartsTest";
// import Themes from "./themes";
// import { ThemeProvider } from "@material-ui/styles";
import Report from "./layouts/Feedback/Report";

const hist = createBrowserHistory();
function App() {
  const cliIsDarkMode = localStorage.getItem("isDarkMode");
  const [darkMode, setDarkMode] = useState(cliIsDarkMode ? "dark" : "light");
  const [percen, setPercen] = useState(0);
  const toggleDarkMode = () => {
    //client
    if (cliIsDarkMode) {
      localStorage.removeItem("isDarkMode");
    } else {
      localStorage.setItem("isDarkMode", "true");
    }
    //component
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };

  const handlePercen = (value: number) => {
    setPercen(value);
    if (value === 100) {
      setPercen(0);
    }
  };
  const context = {
    dark: {
      darkMode,
      toggleDarkMode,
    },
    api: {
      percen: percen,
      handlePercen,
    },
  };

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(() => {
    if (darkMode === "dark" || prefersDarkMode) {
      return createMuiTheme({
        palette: {
          primary: { main: red[600] },
          type: "dark",
        },
      });
    }
    return createMuiTheme({
      palette: {
        primary: { main: red[600] },
        type: "light",
      },
    });
  }, [darkMode, prefersDarkMode]);

  return (
    <MyContext.Provider value={context}>
      <MuiThemeProvider theme={theme}>
        <Router history={hist}>
          <Switch>
            <PrivateRoute path="/pos" isAuthenticated={false} component={Pos} />
            <PrivateRoute
              path="/graphql"
              isAuthenticated={false}
              component={Graphql}
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
              path={`${process.env.PUBLIC_URL}/feedback/report`}
              component={Report}
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
      </MuiThemeProvider>
    </MyContext.Provider>
  );
}

export default App;
