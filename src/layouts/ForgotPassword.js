import React from "react";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import ForgotPasswordForm from "../components/ForgotPasswordForm/ForgotPasswordForm";
import Header from "../components/Header/Header";
import { Container } from '@mui/material';

const useStyles = makeStyles(styles);

export default function ForgotPassword() {


    // styles
    const classes = useStyles();
    const mainPanel = React.createRef();
    return (
        <div className={classes.wrapper}>

            <Header/>

            <div className={classes.bigPanel} ref={mainPanel}>

                <Container style={{marginTop:'80px'}}>
                        <ForgotPasswordForm/>
                </Container>

            </div>
        </div>
    );
}
