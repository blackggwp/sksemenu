import React, { useState } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./layouts/Home";
import Page404 from "./layouts/Page404";
import Manual from "./layouts/Manual";
import Pos from "./layouts/Pos";
import PosAuth from "./layouts/PosAuth";
import PrivateRoute from "./helpers/PrivateRoute";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider, useMediaQuery } from "@material-ui/core";
import deepOrange from "@material-ui/core/colors/deepOrange";
import MyContext from "./contexts/MyContext";

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
          primary: deepOrange,
          type: "dark",
        },
      });
    }
    return createMuiTheme({
      palette: {
        primary: deepOrange,
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
            <Route
              path={`${process.env.PUBLIC_URL}/auth`}
              component={PosAuth}
            />
            {/* <Route
          path={`${process.env.PUBLIC_URL}/pos`}
          component={Pos}
        /> */}
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
      </MuiThemeProvider>
    </MyContext.Provider>
  );
}

export default App;
