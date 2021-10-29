import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
    },
};

const useStyles = makeStyles(styles);

export default function Supply() {
    const classes = useStyles();
    return (
        <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Material Dashboard Heading</h4>
                <p className={classes.cardCategoryWhite}>
                    Created using Roboto Font Family
                </p>
            </CardHeader>
            <CardBody>
                SUPPLY!
            </CardBody>
        </Card>
    );
}
