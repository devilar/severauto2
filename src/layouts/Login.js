import React from "react";
// creates a beautiful scrollbar
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import LoginForm from "../components/LoginForm/LoginForm";
import Header from "../components/Header/Header";
import {Container} from "@mui/material";

const useStyles = makeStyles(styles);

export default function Login() {

    const classes = useStyles();
    const mainPanel = React.createRef();


    return (
        <div>

            <Header/>

            <div className={classes.bigPanel} ref={mainPanel}>

                <Container style={{marginTop:'80px'}}>
                    <LoginForm/>
                </Container>

            </div>
        </div>
    );
}
