import React from "react";
// creates a beautiful scrollbar
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import CardBody from "../components/Card/CardBody";
import Regform from "../components/RegForm/Regform";
import Header from "../components/Header/Header";

const useStyles = makeStyles(styles);

export default function Registration() {


    // styles
    const classes = useStyles();
    // ref to help us initialize PerfectScrollbar on windows devices
    const mainPanel = React.createRef();
    // states and functions
    // initialize and destroy the PerfectScrollbar plugin

    return (
        <div className={classes.wrapper}>

            <Header/>

            <div className={classes.bigPanel} ref={mainPanel}>



                    <Card>


                        <CardBody>

                        <Regform/>


                        </CardBody>


                    </Card>

            </div>
        </div>
    );
}
