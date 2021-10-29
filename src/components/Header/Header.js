import React from 'react';
import Grid from '@mui/material/Grid';
import './header.scss';
import {Typography } from '@mui/material';
import imageLogo from '../../logo.png';
import HeaderProfile from '../HeaderProfile/HeaderProfile.js';
import {Link} from 'react-router-dom';
import Img from "../Image/Image";



const Header = ({...props}) => {

    return (
        <Grid className='header' container height='100px' alignItems='center' {...props}>
            <Grid spacing={0} item xs={2}> <div className='logo'><Link to='/'><Img src={imageLogo}/></Link></div></Grid>
            <Grid spacing={0} item xs={8}><Typography color='#ffffff' align='center' component="h2" variant="p">The Life of Material Dashboard</Typography></Grid>
            <Grid spacing={0} item xs={2}><HeaderProfile/></Grid>

        </Grid>
    );
};

export default Header;




