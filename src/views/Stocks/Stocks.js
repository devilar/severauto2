import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Ui/Card/Card.js";
import CardHeader from "components/Ui/Card/CardHeader.js";
import CardBody from "components/Ui/Card/CardBody.js";
import {Typography} from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import StocksForm from "../../components/PageForms/StocksForm/StocksForm";
import stocksStore from "../../store/stocksStore";
import StockModalForm from "../../components/Modal/StockModalForm";

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
        marginBottom: "0",
        textDecoration: "none",
    },
};

const useStyles = makeStyles(styles);

export default function Stocks() {

    const [activeRow, setActiveRow] = useState(1);
    const handleDoubleClick = () => setModalShow(true);
    const handleClick = id => setActiveRow(id);
    const [modalShow, setModalShow] = React.useState(false);

    const classes = useStyles();
    return (
        <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Склады</h4>
            </CardHeader>
            <CardBody>
                <StocksForm/>
                <Typography align='left' component="h3" variant="p" mt={4} mb={4}>Результаты формы</Typography>




                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Склад</TableCell>
                            <TableCell>Адрес</TableCell>
                            <TableCell>Статус</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>


                        {stocksStore.result.map(elem=>(
                                <TableRow key={elem.id} className={elem.id === activeRow ? 'active cursor' : 'cursor'} onClick={()=>handleClick(elem.id)} onDoubleClick={handleDoubleClick}>

                                    <TableCell>{elem.stockName}</TableCell>
                                    <TableCell>{elem.adress}</TableCell>
                                    <TableCell>{elem.status}</TableCell>


                                </TableRow>
                            )
                        )}


                    </TableBody>
                </Table>
                <StockModalForm
                    id={activeRow}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </CardBody>
        </Card>
    );
}
