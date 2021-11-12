import React from "react";
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
import {Grid, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import Button from "../../components/Ui/CustomButtons/Button";
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


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
    const classes = useStyles();
    return (
        <Card>


            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Остатки</h4>
            </CardHeader>
            <CardBody>

              <RemainsForm/>

                <Grid container justifyContent="flex-end">
                <Button style={{marginTop:'40px'}} type='submit' color="primary"><DownloadIcon style={{marginRight:'10px'}}/>Скачать</Button>
                <Button style={{marginTop:'40px'}} type='submit' color="primary"><UploadIcon style={{marginRight:'10px'}}/>Загрузить</Button>
                <Button style={{marginTop:'40px'}} type='submit' color="primary"><CheckCircleIcon style={{marginRight:'10px'}}/>Отправить</Button>
                </Grid>

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