import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, Divider, drawerClasses, FormControlLabel, Paper } from '@mui/material';

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Switch, { switchClasses } from '@mui/joy/Switch';
import { useDispatch, useSelector } from 'react-redux';
import SettingsIcon from '@mui/icons-material/Settings';
import CreateIcon from '@mui/icons-material/Create';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';



const steps = ['', '', ''];


function ColorlibStepIcon(props) {
    const { active, completed, className } = props;
    const color = useSelector(state => state.color)
    const icons = {
        1: <CreateIcon />,
        2: <SettingsIcon />,
        3: <PlayCircleIcon />,
    };

    return (
        <div style={{
            backgroundColor: '#ccc',
            zIndex: 1,
            color: '#fff',
            width: 40,
            height: 40,
            display: 'flex',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            ...(active && {
                backgroundColor: color
            })
        }} className={className} >
            {icons[String(props.icon)]}
        </div>
    );
}

export default function Main() {
    const [skipped, setSkipped] = React.useState(new Set());
    const [checked, setChecked] = React.useState(false);
    const [refresh, setRefresh] = useState(true)
    var dispatch = useDispatch()
    const companylogo = useSelector(state => state.companyLogo)
    const color = useSelector(state => state.color)
    const header = useSelector(state => state.header)
    const footer = useSelector(state => state.footer)
    const navigationTabs = useSelector(state => state.navigationTabs)
    const drawer = useSelector(state => state.drawer)
    const bottomMenu = useSelector(state => state.bottomMenu)
    const leftSideDrawer = useSelector(state => state.leftSideDrawer)
    const rightSideDrawer = useSelector(state => state.rightSideDrawer)




    return (
        <Box style={{ width: "50%" }}>
            <Paper>
                <Stepper activeStep={0}>
                    {steps.map((label, index) => {
                        return (
                            <Step key={label} >
                                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <Divider style={{ marginTop: 10 }} />

                <div style={{ marginTop: 20, marginBottom: 10, marginLeft: 20 }}>
                    <div>
                        I want a Company Logo
                    </div>
                    <div>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<RadioButtonUncheckedIcon />}
                                    checkedIcon={<CheckCircleOutlineIcon />}
                                    checked={companylogo == "left" ? true : false}
                                    style={{ color: companylogo == "left" ? color : "grey" }}
                                />
                            }
                            label="Left"
                            onChange={() => {
                                dispatch({ type: 'ADD_COMPANY', payload: "left" })
                                setRefresh(!refresh)
                            }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<RadioButtonUncheckedIcon />}
                                    checkedIcon={<CheckCircleOutlineIcon />}
                                    checked={companylogo == "right" ? true : false}
                                    style={{ color: companylogo == "right" ? color : "grey" }}
                                />
                            }
                            onChange={() => {
                                dispatch({ type: 'ADD_COMPANY', payload: "right" })
                                setRefresh(!refresh)
                            }}
                            label="Right"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<RadioButtonUncheckedIcon />}
                                    checkedIcon={<CheckCircleOutlineIcon />}
                                    checked={companylogo == "center" ? true : false}
                                    style={{ color: companylogo == "center" ? color : "grey" }}
                                />
                            }
                            label="Center"
                            onChange={() => {
                                dispatch({ type: 'ADD_COMPANY', payload: "center" })
                                setRefresh(!refresh)
                            }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<RadioButtonUncheckedIcon />}
                                    checkedIcon={<CheckCircleOutlineIcon />}
                                    checked={companylogo == "disable" ? true : false}
                                    style={{ color: companylogo == "disable" ? color : "grey" }}
                                />
                            }
                            label="Disable"
                            onChange={() => {
                                dispatch({ type: 'ADD_COMPANY', payload: "disable" })
                                setRefresh(!refresh)
                            }}
                        />
                    </div>
                    <div>
                        Preset Color
                    </div>
                    <div>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<RadioButtonUncheckedIcon />}
                                    checkedIcon={<CheckCircleOutlineIcon />}
                                    style={{ color: '#1976d2' }}
                                    checked={color == "#1976d2" ? true : false}
                                />
                            }
                            label="Blue(#1976d2)"
                            onChange={() => {
                                dispatch({ type: 'ADD_COLOR', payload: "#1976d2" })
                                setRefresh(!refresh)
                            }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<RadioButtonUncheckedIcon />}
                                    checkedIcon={<CheckCircleOutlineIcon />}
                                    style={{ color: '#ff0000' }}
                                    checked={color == "#ff0000" ? true : false}
                                />
                            }
                            label="Red(#ff0000)"
                            onChange={() => {
                                dispatch({ type: 'ADD_COLOR', payload: "#ff0000" })
                                setRefresh(!refresh)
                            }}
                        />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Switch
                            variant={checked ? 'soft' : 'solid'}
                            checked={header}
                            onChange={() => {
                                dispatch({ type: 'SHOW_HEADER', })
                                setRefresh(!refresh)
                            }}
                            sx={(theme) => ({
                                '--Switch-thumb-size': '20px',
                                '--Switch-track-width': '34px',
                                '--Switch-track-height': '14px',
                                '&:hover': {
                                    '--Switch-track-background': 'rgb(0, 0, 0, 0.38)',
                                },
                                [`&.${switchClasses.checked}`]: {
                                    '--Switch-thumb-background': color,
                                    '--Switch-track-background': `${color}cc`,
                                    '&:hover': {
                                        '--Switch-track-background': `${color}cc`,
                                    },
                                },
                                [theme.getColorSchemeSelector('dark')]: {
                                    '--Switch-thumb-background': '#fff',
                                    '--Switch-track-background': 'rgba(0, 0, 0, 0.5)',
                                },
                            })}
                            endDecorator={<Typography>I want a Header</Typography>}

                        />
                    </div>
                    <div>
                        <Switch
                            variant={checked ? 'soft' : 'solid'}
                            checked={footer}
                            onChange={() => {
                                dispatch({ type: 'SHOW_FOOTER', })
                                setRefresh(!refresh)
                            }}
                            sx={(theme) => ({
                                '--Switch-thumb-size': '20px',
                                '--Switch-track-width': '34px',
                                '--Switch-track-height': '14px',
                                '&:hover': {
                                    '--Switch-track-background': 'rgb(0, 0, 0, 0.38)',
                                },
                                [`&.${switchClasses.checked}`]: {
                                    '--Switch-thumb-background': color,
                                    '--Switch-track-background': `${color}cc`,
                                    '&:hover': {
                                        '--Switch-track-background': `${color}cc`,
                                    },
                                },
                                [theme.getColorSchemeSelector('dark')]: {
                                    '--Switch-thumb-background': '#fff',
                                    '--Switch-track-background': 'rgba(0, 0, 0, 0.5)',
                                },
                            })}
                            endDecorator={<Typography>I want a Footer</Typography>}

                        />
                    </div>

                    <div>
                        <Switch
                            variant={checked ? 'soft' : 'solid'}
                            checked={drawer}
                            onChange={() => {
                                dispatch({ type: 'SHOW_DRAWER' })
                                setRefresh(!refresh)
                            }}
                            sx={(theme) => ({
                                '--Switch-thumb-size': '20px',
                                '--Switch-track-width': '34px',
                                '--Switch-track-height': '14px',
                                '&:hover': {
                                    '--Switch-track-background': 'rgb(0, 0, 0, 0.38)',
                                },
                                [`&.${switchClasses.checked}`]: {
                                    '--Switch-thumb-background': color,
                                    '--Switch-track-background': `${color}cc`,
                                    '&:hover': {
                                        '--Switch-track-background': `${color}cc`,
                                    },
                                },
                                [theme.getColorSchemeSelector('dark')]: {
                                    '--Switch-thumb-background': '#fff',
                                    '--Switch-track-background': 'rgba(0, 0, 0, 0.5)',
                                },
                            })}
                            endDecorator={<Typography>I want a Drawer Overlay Mode (requires Header or Footer)</Typography>}

                        />
                    </div>
                    <div>
                        <Switch
                            variant={checked ? 'soft' : 'solid'}
                            checked={leftSideDrawer}
                            onChange={() => {
                                dispatch({ type: 'SHOW_LEFT_DRAWER' })
                                setRefresh(!refresh)
                            }}
                            sx={(theme) => ({
                                '--Switch-thumb-size': '20px',
                                '--Switch-track-width': '34px',
                                '--Switch-track-height': '14px',
                                '&:hover': {
                                    '--Switch-track-background': 'rgb(0, 0, 0, 0.38)',
                                },
                                [`&.${switchClasses.checked}`]: {
                                    '--Switch-thumb-background': color,
                                    '--Switch-track-background': `${color}cc`,
                                    '&:hover': {
                                        '--Switch-track-background': `${color}cc`,
                                    },
                                },
                                [theme.getColorSchemeSelector('dark')]: {
                                    '--Switch-thumb-background': '#fff',
                                    '--Switch-track-background': 'rgba(0, 0, 0, 0.5)',
                                },
                            })}
                            endDecorator={<Typography>I want a left-side Drawer</Typography>}

                        />
                    </div>
                    <div>
                        <Switch
                            variant={checked ? 'soft' : 'solid'}
                            checked={rightSideDrawer}
                            onChange={() => {
                                dispatch({ type: 'SHOW_RIGHT_DRAWER' })
                                setRefresh(!refresh)
                            }}
                            sx={(theme) => ({
                                '--Switch-thumb-size': '20px',
                                '--Switch-track-width': '34px',
                                '--Switch-track-height': '14px',
                                '&:hover': {
                                    '--Switch-track-background': 'rgb(0, 0, 0, 0.38)',
                                },
                                [`&.${switchClasses.checked}`]: {
                                    '--Switch-thumb-background': color,
                                    '--Switch-track-background': `${color}cc`,
                                    '&:hover': {
                                        '--Switch-track-background': `${color}cc`,
                                    },
                                },
                                [theme.getColorSchemeSelector('dark')]: {
                                    '--Switch-thumb-background': '#fff',
                                    '--Switch-track-background': 'rgba(0, 0, 0, 0.5)',
                                },
                            })}
                            endDecorator={<Typography>I want a right-side Drawer</Typography>}

                        />
                    </div>

                    <div>
                        <Switch
                            variant={checked ? 'soft' : 'solid'}
                            checked={navigationTabs}
                            onChange={() => {
                                dispatch({ type: 'SHOW_NAVIGATION' })
                                setRefresh(!refresh)
                            }}
                            sx={(theme) => ({
                                '--Switch-thumb-size': '20px',
                                '--Switch-track-width': '34px',
                                '--Switch-track-height': '14px',
                                '&:hover': {
                                    '--Switch-track-background': 'rgb(0, 0, 0, 0.38)',
                                },
                                [`&.${switchClasses.checked}`]: {
                                    '--Switch-thumb-background': color,
                                    '--Switch-track-background': `${color}cc`,
                                    '&:hover': {
                                        '--Switch-track-background': `${color}cc`,
                                    },
                                },
                                [theme.getColorSchemeSelector('dark')]: {
                                    '--Switch-thumb-background': '#fff',
                                    '--Switch-track-background': 'rgba(0, 0, 0, 0.5)',
                                },
                            })}
                            endDecorator={<Typography>I want navigation tabs (requires Header)</Typography>}

                        />
                    </div>
                    <div>
                        <Switch
                            variant={checked ? 'soft' : 'solid'}
                            checked={bottomMenu}
                            onChange={() => {
                                dispatch({ type: 'SHOW_BOTTOMMENU' })
                                setRefresh(!refresh)
                            }}
                            sx={(theme) => ({
                                '--Switch-thumb-size': '20px',
                                '--Switch-track-width': '34px',
                                '--Switch-track-height': '14px',
                                '&:hover': {
                                    '--Switch-track-background': 'rgb(0, 0, 0, 0.38)',
                                },
                                [`&.${switchClasses.checked}`]: {
                                    '--Switch-thumb-background': color,
                                    '--Switch-track-background': `${color}cc`,
                                    '&:hover': {
                                        '--Switch-track-background': `${color}cc`,
                                    },
                                },
                                [theme.getColorSchemeSelector('dark')]: {
                                    '--Switch-thumb-background': '#fff',
                                    '--Switch-track-background': 'rgba(0, 0, 0, 0.5)',
                                },
                            })}
                            endDecorator={<Typography>I want a Bottom Menu (requires Footer)</Typography>}

                        />
                    </div>
                    <div style={{ paddingBottom: 20, paddingTop: 20, }}>
                        <Button size="md" variant="contained" style={{ backgroundColor: color }}>Continue</Button>
                    </div>
                </div>
            </Paper>
        </Box >

    );
}
