import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Ui/Card/Card.js";
import CardHeader from "components/Ui/Card/CardHeader.js";
import CardBody from "components/Ui/Card/CardBody.js";
import {observer} from "mobx-react-lite";
import SupplyForm from "../../components/PageForms/SupplyForm/SupplyForm";
import {Alert, Typography} from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import supplyStore from "../../store/supplyStore";
import SupplyModalForm from "../../components/Modal/SupplyModalForm";
import loaderStore from "../../store/loaderStore";
import Loader from "../../components/Ui/Loader/Loader";


export const dataAPI = axios.create();
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {supplyInnerMock} from "../../mock";
import createUserRoleStore from "../../store/createUserRoleStore";
let mock = new MockAdapter(dataAPI);
mock.onGet("/supplyInner").reply(200, {
    supplyInner:supplyInnerMock
});


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

const SupplyPage = observer(() => {



    const [activeRow, setActiveRow] = useState(1);

    const handleDoubleClick = () => {
        loaderStore.enableLoader();
        setTimeout(() => {

            dataAPI.get(`/supplyInner`)
                .then(res => {
                    supplyStore.addInnerResult(res.data.supplyInner)
                })

            loaderStore.disableLoader();

        }, 1000);




    }

    const handleClick = id => setActiveRow(id);


    const [modalShow, setModalShow] = React.useState(false);





    const classes = useStyles();
    const isEmpty = supplyStore.innerResult.length
    console.log('IZ EMPLTY', isEmpty);
    return (
        <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Поставки</h4>
            </CardHeader>
            <CardBody>
                <SupplyForm/>

                <Typography align='left' component="h3" variant="p" mt={4} mb={4}>Результаты формы</Typography>



                {supplyStore.result.length ? <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Номер- Дата договора</TableCell>
                            <TableCell>Товар</TableCell>
                            <TableCell>Количество</TableCell>
                            <TableCell>Дата поставки</TableCell>
                            <TableCell>Склад</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>


                        {supplyStore.result.map(elem=>(
                                <TableRow key={elem.id} className={elem.id === activeRow ? 'active cursor' : 'cursor'} onClick={()=>handleClick(elem.id)} onDoubleClick={handleDoubleClick}>
                                    <TableCell>{elem.numberAndDate}</TableCell>
                                    <TableCell>{elem.itemTitle}</TableCell>
                                    <TableCell>{elem.quantity}</TableCell>
                                    <TableCell>{elem.supplyDate}</TableCell>
                                    <TableCell>{elem.stock}</TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table> : <Alert style={{marginBottom:'20px'}} severity="info">Нет результатов!</Alert>}


                <SupplyModalForm
                    id={activeRow}
                    show={isEmpty}
                    onHide={()=>supplyStore.removeInnerResult()}
                />

            </CardBody>
        </Card>
    );
})


export default SupplyPage