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
import Footer from './components/footer'; // Import the Footer component
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// TabPanel component
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
                <Box sx={{ p: 0 }}>
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
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setDrawerOpen(false); // Close drawer when tab changes
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const menuItems = [
        { label: "Home", index: 0 },
        { label: "Services", index: 1 },
        { label: "About", index: 2 },
        { label: "Contact Us", index: 3 },
    ];

    return (
        <Box sx={{ bgcolor: 'white', width: '100vw', p: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <AppBar position="fixed" sx={{ bgcolor: 'white', color: 'black', p: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', padding: '0 16px' }}>
                    {/* Logo */}
                    <Box sx={{ flex: 1 }}>
                        <img src={''} alt="Logo" style={{ height: '50px' }} />
                    </Box>
                    {/* Hamburger Menu Icon */}
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{ display: { xs: 'flex', md: 'none' } }} // Show only on mobile
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* Tabs for larger screens */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flex: 1 }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                            sx={{ flex: 1, padding: 0 }}
                        >
                            {menuItems.map((item, index) => (
                                <Tab key={index} label={item.label} {...a11yProps(index)} />
                            ))}
                        </Tabs>
                    </Box>
                </Box>
            </AppBar>

            {/* Drawer for mobile */}
            <Drawer
                anchor='left'
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem button key={index} onClick={() => handleChange(null, item.index)}>
                                <ListItemText primary={item.label} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            <Box sx={{ mt: 10, p: 0, flex: 1 }}> {/* flex: 1 allows this Box to take up remaining space */}
                {menuItems.map((item, index) => (
                    <TabPanel key={index} value={value} index={item.index} dir={theme.direction}>
                        {index === 0 && <Home />}
                        {index === 1 && <Services />}
                        {index === 2 && <About />}
                        {index === 3 && <Contact />}
                    </TabPanel>
                ))}
            </Box>
            {/* Fixed Footer */}
            <Footer />
        </Box>
    );
}