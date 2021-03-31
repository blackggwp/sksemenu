import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Brand from '../components/Brand';
import "../assets/css/index.css";
import { GLOBAL } from '../config'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Pos() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  let history = useHistory();

  const handleLogout = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    localStorage.removeItem('isLogin')
    return (
      history.push('/auth')
    )
  }

  return (
    <div className={classes.root} >
      <AppBar position="static">
        <Tabs
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          {GLOBAL.BRANDS.map((brand, idx) =>
          (
            <LinkTab key={idx} label={brand} {...a11yProps(idx)} />
          ))}
        </Tabs>
      </AppBar>
      <Button
        variant="contained"
        style={{
          maxWidth: '100px',
          position: 'absolute',
          top: 40,
          right: 10,
          margin: '20px 0px 20px 0px'
        }}
        color="secondary"
        className={classes.submit}
        onClick={(e) => handleLogout(e)}
      >
        Logout
      </Button>
      {GLOBAL.BRANDS.map((brand, idx) =>
      (
        <TabPanel key={idx} index={idx} value={value}>
          <Brand brandID={brand} />
        </TabPanel>
      ))}
    </div>
  );
}
