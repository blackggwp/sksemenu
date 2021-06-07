import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles, useTheme, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { GLOBAL } from "../../config";
import Brand from "../Brand";
import { Route, Switch, Link, useRouteMatch, Redirect } from "react-router-dom";
import { Button, createStyles } from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
import MyContext from "../../contexts/MyContext";
import LinearProgress from "@material-ui/core/LinearProgress";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      // display: "flex",
      // alignItems: "center",
      // padding: theme.spacing(0, 1),
      // // necessary for content to be below app bar
      // ...theme.mixins.toolbar,
      // justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      // marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      // marginLeft: 0,
      marginLeft: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function DrawerDemo() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  let history = useHistory();
  let location = useLocation();
  const pathName = location.pathname;
  const { api } = useContext(MyContext);

  // catch pos route
  if (pathName === "/pos" || pathName === "/pos/") {
    return <Redirect to="/pos/posdb" />;
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    localStorage.removeItem("isLogin");
    return history.push({
      pathname: "/auth",
      state: location,
    });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sukishi POS Menu
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => handleLogout(e)}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <LinearProgress
        variant="determinate"
        value={api.percen}
        color="secondary"
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {GLOBAL.BRANDS.map((brand, index) => (
            <Link to={`${url}/${brand}`} key={brand}>
              <ListItem button>
                <ListItemText primary={brand} onClick={() => setOpen(false)} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Switch>
          {GLOBAL.BRANDS.map((brand, idx) => (
            <Route path={`${path}/${brand}`} key={brand}>
              <Brand brandID={brand} />
            </Route>
          ))}
        </Switch>
      </main>
    </div>
  );
}
