import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const color = useSelector(state => state.color)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: color, }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ color: 'white' }} TabIndicatorProps={{ style: { backgroundColor: "white" } }}>
                    <Tab label="Tab One" style={{ color: 'white' }} {...a11yProps(0)} />
                    <Tab label="Tab Two" style={{ color: 'white' }} {...a11yProps(1)} />
                    <Tab label="Tab Three" style={{ color: 'white' }} {...a11yProps(2)} />
                </Tabs>
            </Box>
        </Box>
    );
}
