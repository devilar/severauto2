import React from 'react';
import Grid from '@mui/material/Grid';
import './header.scss';
import {Typography } from '@mui/material';
import imageLogo from '../../logo.png';
import HeaderProfile from '../HeaderProfile/HeaderProfile.js';
import {Link} from 'react-router-dom';
import Img from "../Ui/Image/Image";



const Header = ({...props}) => {



    return (
        <Grid className='header' container height='90px' alignItems='center' {...props}>
            <Grid item spacing={0} xs={2}> <div className='logo'><Link to='/'><Img src={imageLogo}/></Link></div></Grid>
            <Grid item spacing={0} xs={9}><Typography color='#ffffff' align='center' component="h3" variant="p">Север-авто</Typography></Grid>
            <Grid item spacing={0} xs={1}><HeaderProfile/></Grid>

        </Grid>
    );
};

export default Header;





