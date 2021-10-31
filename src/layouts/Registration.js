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

    const classes = useStyles();
    const mainPanel = React.createRef();
    return (
        <div>

            <Header/>

            <div className={classes.bigPanel} ref={mainPanel}>

                <Container style={{marginTop:'80px'}}>
                    <Regform/>
                </Container>

            </div>
        </div>
    );
}
