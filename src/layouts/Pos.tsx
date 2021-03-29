import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Brand from '../components/Brand';
import "../assets/css/index.css";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { GLOBAL } from '../config'

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
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Sriracha',
      'cursive',
    ].join(','),
  },
});

export default function Pos() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root} >
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
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

        {GLOBAL.BRANDS.map((brand, idx) =>
        (
          <TabPanel key={idx} index={idx} value={value}>
            <Brand brandID={brand} />
          </TabPanel>
        )
        )
        }
      </div>
    </ThemeProvider>
  );
}
