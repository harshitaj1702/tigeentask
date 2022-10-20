import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TigeenLogo from '../Assets/tigeenlogo.png'
import MailIcon from '@mui/icons-material/Mail';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { useSelector } from 'react-redux';



export default function Footer(props) {

    const [value, setValue] = React.useState(0);
    const bottomMenu = useSelector(state => state.bottomMenu)
    const drawer = useSelector(state => state.drawer)
    const leftSideDrawer = useSelector(state => state.leftSideDrawer)
    const rightSideDrawer = useSelector(state => state.rightSideDrawer)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1 }} style={{ position: 'absolute', bottom: 0, width: "100%" }}>
            <AppBar position="static" style={{ backgroundColor: 'grey' }}>
                <Toolbar>
                    {drawer || leftSideDrawer ?
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => props.toogleDrawerLeft(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        : <></>}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{bottomMenu ?
                        <div style={{ display: 'flex', justifyContent: "center", backgroundColor: "grey" }}>
                            <div>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ color: 'white' }} TabIndicatorProps={{ style: { backgroundColor: "white", position: "absolute", top: 0 } }}>
                                    <Tab icon={<MailIcon />} style={{ color: 'white' }} iconPosition="start" label="MAILS" />
                                    <Tab icon={<AccessAlarmsIcon />} style={{ color: 'white' }} iconPosition="start" label="ALARMS" />

                                    <Tab icon={<MovieCreationIcon />} style={{ color: 'white' }} iconPosition="start" label="MOVIES" />
                                </Tabs>
                            </div>

                        </div>

                        : ''}
                    </Typography>
                    {drawer || rightSideDrawer ?
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => props.toogleDrawerRight(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        : <></>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
