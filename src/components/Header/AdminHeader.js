import React from 'react';
import Grid from '@mui/material/Grid';
import './header.scss';
import {Typography } from '@mui/material';
import HeaderProfile from '../HeaderProfile/HeaderProfile.js';




const Header = ({...props}) => {

    return (
        <Grid className='header' container height='100px' alignItems='center' {...props} style={{padding:'10px'}}>
            <Grid spacing={0} item xs={10}><Typography color='#ffffff' align='left' component="h3" variant="p">The Life of Material Dashboard</Typography></Grid>
            <Grid align='center' spacing={0} item xs={2}><HeaderProfile/></Grid>

        </Grid>
    );
};

export default Header;





