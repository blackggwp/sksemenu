import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Menu from './Menu';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { global } from '../config';
import Page404 from './Page404';

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
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  let { brandid, brandtype } = useParams<RouteParamTypes>();
  const [value, setValue] = useState('ovl');
  const [isS81, setIsS81] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  let initialUrl = ''
  if (brandtype === 'catalogue') {
    initialUrl = `${global.apiServer}readfiles?brandid=${brandid}-${value}&type=${brandtype}`
  } else {
    initialUrl = `${global.apiServer}readfiles?brandid=${brandid}&type=${brandtype}`
  }
  const [fetchUrl, setFetchUrl] = useState(initialUrl);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await Axios(fetchUrl)
        setData(data)
      } catch (error) {
        console.error('fetchData ' + error)
        setError(error)
      }
    }
    fetchData()
  }, [fetchUrl, value])

  useEffect(() => {
    if (brandid === 'bq-huahin') {
      setIsS81(true)
      setValue("alc")
      setFetchUrl(`${global.apiServer}readfiles?brandid=${brandid}-alc&type=${brandtype}`)
    }
  }, [brandid, brandtype])

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    setFetchUrl(`${global.apiServer}readfiles?brandid=${brandid}-${newValue}&type=${brandtype}`)
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={brandtype === 'catalogue' ? undefined : { display: "none" }} >
        <Tabs value={value}
          variant="fullWidth"
          onChange={handleChange}
          aria-label="wrapped label tabs example">
          {!isS81 &&
            <Tab
              value="ovl"
              label="Overload"
              wrapped
              {...a11yProps('ovl')}
            />
          }
          <Tab value="alc" label="A lacarte" {...a11yProps('alc')} />
        </Tabs>
      </AppBar>
      {!isS81 &&
        <TabPanel value={value} index="ovl">
          <Menu
            imgUrl={data}
          />
        </TabPanel>
      }
      <TabPanel value={value} index="alc">
        <Menu
          imgUrl={data}

        />
      </TabPanel>
      {error && <Page404 />}
    </div>
  );
}

export default Home
