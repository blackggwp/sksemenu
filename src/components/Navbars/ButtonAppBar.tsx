import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory, useLocation } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

interface Props {
  label?: string;
  loadProgress?: number;
}
const ButtonAppBar: React.FC<Props> = ({ label, loadProgress = 0 }) => {
  const classes = useStyles();
  let history = useHistory();
  let location = useLocation();

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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {label}
          </Typography>
          <Button color="inherit" onClick={(e) => handleLogout(e)}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <LinearProgress
        variant="determinate"
        value={loadProgress}
        color="secondary"
      />
    </div>
  );
};

export default ButtonAppBar;
