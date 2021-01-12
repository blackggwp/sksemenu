import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MenuNew from './MenuNew';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

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
          {/* <Typography>{children}</Typography> */}
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
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

export default function Home3() {
  const classes = useStyles();
  let { brandid } = useParams()
  const [value, setValue] = React.useState('one');
  const [isS81, setIsS81] = React.useState(false);
  
  
  useEffect(() => {
    if(brandid === 's81') {
      setIsS81(true)
    }
  }, [brandid])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} 
        variant="fullWidth"
        onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="Overload"
            wrapped
            {...a11yProps('one')}
          />
          {!isS81 && <Tab value="two" label="A lacarte" {...a11yProps('two')} /> }
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        <MenuNew brandid={`${brandid}-alc`} />
      </TabPanel>
      {!isS81 &&
      <TabPanel value={value} index="two">
      <MenuNew brandid={`${brandid}-ovl`} />
      </TabPanel>
      }
    </div>
  );
}
