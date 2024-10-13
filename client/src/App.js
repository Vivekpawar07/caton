import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from './page/home';
import About from './page/about';
import Services from './page/services';
import Contact from './page/contact';
// import Logo from './path/to/logo.png'; // Adjust the import path to your logo image

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}> {/* Set padding to 0 */}
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function App() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'white', width: '100vw', p: 0 }}> {/* Set padding to 0 */}
      <AppBar position="fixed" sx={{ bgcolor: 'white', color: 'black', p: 0 }}> {/* Set padding to 0 */}
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '0 16px' }}>
          {/* Logo */}
          <Box sx={{ flex: 1 }}>
            <img src={''} alt="Logo" style={{ height: '50px' }} />
          </Box>
          {/* Tabs */}
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            sx={{ flex: 1, padding: 0 }} // Set padding to 0
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Services" {...a11yProps(1)} />
            <Tab label="About" {...a11yProps(2)} />
            <Tab label="Contact Us" {...a11yProps(3)} />
          </Tabs>
        </Box>
      </AppBar>
      <Box sx={{ mt: 10, p: 0 }}> {/* Set padding to 0 */}
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Home />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Services/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <About/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Contact/>
        </TabPanel>
      </Box>
    </Box>
  );
}