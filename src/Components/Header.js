import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TigeenLogo from '../Assets/tigeenlogo.png'
import { useSelector } from 'react-redux';
export default function Header(props) {
    const companylogo = useSelector(state => state.companyLogo)
    const color = useSelector(state => state.color)
    const drawer = useSelector(state => state.drawer)
    const leftSideDrawer = useSelector(state => state.leftSideDrawer)
    const rightSideDrawer = useSelector(state => state.rightSideDrawer)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: color }}>
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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ display: "flex", justifyContent: companylogo }}>
                        <img src={TigeenLogo} style={{ display: companylogo == "disable" ? "none" : "block" }} />
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
