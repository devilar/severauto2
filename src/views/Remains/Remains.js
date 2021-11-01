import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import RemainsForm from "../../components/PageForms/RemainsForm/RemainsForm";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import tableResult from "../../store/remainsStore";
import {Typography} from "@mui/material";
import {observer} from "mobx-react-lite";


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

const RemainsPage = observer(() => {
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

              <RemainsForm/>

                <Typography color='#000000' align='left' component="h3" variant="p" mt={4} mb={4}>Form result</Typography>




                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Договора</TableCell>
                            <TableCell>RN Товара</TableCell>
                            <TableCell>Товар</TableCell>
                            <TableCell>Количество на начало периода</TableCell>
                            <TableCell>Количество на конец периода</TableCell>
                            <TableCell>Склад</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>


                            {tableResult.result.map(elem=>(
                                <TableRow key={elem.id}>

                                    <TableCell>{elem.number}</TableCell>
                                    <TableCell>{elem.rn}</TableCell>
                                    <TableCell>{elem.itemTitle}</TableCell>
                                    <TableCell>{elem.quantityMonthStart}</TableCell>
                                    <TableCell>{elem.quantityMonthEnd}</TableCell>
                                    <TableCell>{elem.stock}</TableCell>

                                </TableRow>
                                )
                            )}


                    </TableBody>
                </Table>

                <button onClick={()=>tableResult.buttonClick()}>click me</button>

            </CardBody>
        </Card>
    );
})


export default RemainsPage;