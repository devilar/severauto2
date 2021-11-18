import React, {useState} from "react";
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
import tableResult from "../../store/contractsStore";
import ContractsForm from "../../components/PageForms/ContractsForm/ContractsForm";
import {observer} from "mobx-react-lite";
import StockModalForm from "../../components/Modal/StockModalForm";
import contractsStore from "../../store/contractsStore";
import ContractsModalForm from "../../components/Modal/ContractsModalForm";

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

const ContractsPage = observer(() => {

    const [activeRow, setActiveRow] = useState(1);
    const handleDoubleClick = () => setModalShow(true);
    const handleClick = id => setActiveRow(id);
    const [modalShow, setModalShow] = React.useState(false);
    const classes = useStyles();
    return (
        <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Договоры</h4>

            </CardHeader>
            <CardBody>

                <ContractsForm/>

                <Typography align='left' component="h3" variant="p" mt={4} mb={4}>Результаты формы</Typography>




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


                        {contractsStore.result.map(elem=>(
                                <TableRow key={elem.id} className={elem.id === activeRow ? 'active cursor' : 'cursor'} onClick={()=>handleClick(elem.id)} onDoubleClick={handleDoubleClick}>

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

                <ContractsModalForm
                    id={activeRow}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

            </CardBody>
        </Card>
    );
})

export default ContractsPage