import React from 'react';
import Grid from '@mui/material/Grid';
import './header.scss';
import {Typography } from '@mui/material';
import HeaderProfile from '../HeaderProfile/HeaderProfile.js';
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";




const Header = ({...props}) => {

    return (
        <Grid className='header' container height='80px' alignItems='center' {...props} style={{padding:'0 0 0 30px'}}>
            <Hidden mdUp>
                <Grid spacing={0} item xs={1}><span>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerToggle}
                    >
                    <Menu />
                    </IconButton>

                </span></Grid>
            </Hidden>
            <Grid spacing={0} item xs={9} md={9} lg={10}><Typography color='#ffffff' align='left' component="h4" variant="p">Север-авто</Typography></Grid>
            <Grid align='center' spacing={0} item xs={2}><HeaderProfile/></Grid>

        </Grid>
    );
};

export default Header;





