import React from "react";
// creates a beautiful scrollbar
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import Regform from "../components/RegForm/Regform";
import Header from "../components/Header/Header";
import { Container } from '@mui/material';

const useStyles = makeStyles(styles);

export default function Registration() {


    // styles
    const classes = useStyles();
    // ref to help us initialize PerfectScrollbar on windows devices
    const mainPanel = React.createRef();
    // states and functions
    // initialize and destroy the PerfectScrollbar plugin

    return (
        <div className={classes.regWrapper}>

            <Header/>

            <div className={classes.bigPanel} ref={mainPanel}>

                <Container style={{marginTop:'80px'}}>
                    <Regform/>
                </Container>

            </div>
        </div>
    );
}
