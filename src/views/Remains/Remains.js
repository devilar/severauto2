import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Ui/Card/Card.js";
import CardHeader from "components/Ui/Card/CardHeader.js";
import CardBody from "components/Ui/Card/CardBody.js";
import RemainsForm from "../../components/PageForms/RemainsForm/RemainsForm";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import tableResult from "../../store/remainsStore";
import {Alert, Grid, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import Button from "../../components/Ui/CustomButtons/Button";
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemainsModalForm from "../../components/Modal/RemainsModalForm";
import AddAlert from "@material-ui/icons/AddAlert";
import Snackbar from "components/Snackbar/Snackbar.js"
import LoadDocModal from "../../components/Modal/LoadDocModal";
import remainsStore from "../../store/remainsStore";
import loaderStore from "../../store/loaderStore";
import Loader from "../../components/Ui/Loader/Loader";


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


const RemainsPage = observer(() => {

    const showNotification = (place) => {
        switch (place) {
            case "tc":
                if (!tc) {
                    setTC(true);
                    setTimeout(function () {
                        setTC(false);
                    }, 6000);
                }
                break;
            default:
                break;
        }
    };

    const [tc, setTC] = React.useState(false);



    const [activeRow, setActiveRow] = useState(1);
    const handleDoubleClick = () => setModalShow(true);
    const handleClick = id => setActiveRow(id);
    const [modalShow, setModalShow] = React.useState(false);
    const [loadDocModal, setLoadDocModal] = React.useState(false);

    const classes = useStyles();
    return (
        <Card>


            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Остатки</h4>
            </CardHeader>
            <CardBody>

              <RemainsForm/>






                <Grid container justifyContent="flex-end">
                <Button onClick={() => showNotification("tc")} style={{marginTop:'40px'}} type='submit' color="primary"><DownloadIcon style={{marginRight:'10px'}}/>Скачать</Button>
                <Button onClick={()=>setLoadDocModal(true)} style={{marginTop:'40px'}} type='submit' color="primary"><UploadIcon style={{marginRight:'10px'}}/>Загрузить</Button>
                <Button style={{marginTop:'40px'}} type='submit' color="primary"><CheckCircleIcon style={{marginRight:'10px'}}/>Отправить</Button>
                </Grid>

                <Snackbar
                    place="tc"
                    color="success"
                    icon={AddAlert}
                    message="Началось скачивание файла"
                    open={tc}
                    closeNotification={() => setTC(false)}
                    close
                />

                <Typography align='left' component="h3" variant="p" mt={4} mb={4}>Результаты формы</Typography>



                {remainsStore.result.length?
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


                        <RemainsModalForm
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <LoadDocModal
                            show={loadDocModal}
                            onHide={() => setLoadDocModal(false)}
                        />

                    </TableBody>
                </Table>: <Alert style={{marginBottom:'20px'}} severity="info">Нет результатов!</Alert>}
            </CardBody>
            {loaderStore.isActive && <Loader/>}
        </Card>
    );
})


export default RemainsPage;