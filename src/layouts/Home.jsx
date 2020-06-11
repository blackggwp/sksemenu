import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Menu from './Menu';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabsWrappedLabel(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} 
        onChange={handleChange} 
        aria-label="wrapped "
          variant="fullWidth"
          >
          <Tab
            value="one"
            label="Sukishi สุข Overload (All you can eat)"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="Sukishi New Normal (A la carte)" 
          wrapped {...a11yProps('two')} />
          <Tab value="three" label="Promotion" {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} forRender={props.forRender} index="one">
        <Menu
        pic={props.forRender.pic_ovl}
        headerText={props.forRender.headerText}
        />
      </TabPanel>
      <TabPanel value={value} forRender={props.forRender} index="two">
        <Menu
        pic={props.forRender.pic_normal}
        headerText={props.forRender.headerText}
        />
      </TabPanel>
      <TabPanel value={value} forRender={props.forRender} index="three">
        <Menu
        pic={props.forRender.pic_promotion}
        headerText={props.forRender.headerText}
        />
      </TabPanel>
    </div>
  );
}
