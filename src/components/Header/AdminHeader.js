import React from 'react';
import Grid from '@mui/material/Grid';
import './header.scss';
import {Typography } from '@mui/material';
import HeaderProfile from '../HeaderProfile/HeaderProfile.js';
import Hidden from "@material-ui/core/Hidden";




const Header = ({...props}) => {

    return (
        <Grid className='header' container height='80px' alignItems='center' {...props} style={{padding:'0 0 0 30px'}}>
            <Hidden mdUp>
                <Grid spacing={0} item xs={1}>yup</Grid>
            </Hidden>
            <Grid spacing={0} item xs={9} md={9} lg={10}><Typography color='#ffffff' align='left' component="h4" variant="p">Север-авто</Typography></Grid>
            <Grid align='center' spacing={0} item xs={2}><HeaderProfile/></Grid>

        </Grid>
    );
};

export default Header;





