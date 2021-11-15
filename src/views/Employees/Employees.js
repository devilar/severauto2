import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Ui/Card/Card.js";
import CardHeader from "components/Ui/Card/CardHeader.js";
import CardBody from "components/Ui/Card/CardBody.js";
import EmployeesForm from "../../components/PageForms/EmployeesForm/EmployeesForm";
import {Typography} from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import employeesStore from "../../store/employeesStore";
import {observer} from "mobx-react-lite";
import PersonModalForm from "../../components/Modal/PersonModalForm";

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



const Employees = observer(() => {

    const [activeRow, setActiveRow] = useState(1);
    const [modalShow, setModalShow] = React.useState(false);
    const handleClick = (id) => {
        setActiveRow(id)
    }

    const handleDoubleClick = () => {
        setModalShow(true)
        console.log('OMG DOUBLE');
    }

    const classes = useStyles();
    return (
        <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Сотрудники</h4>

            </CardHeader>
            <CardBody>
                <EmployeesForm/>

                <Typography align='left' component="h3" variant="p" mt={4} mb={4}>Результаты формы</Typography>




                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ФИО</TableCell>
                            <TableCell>Логин</TableCell>
                            <TableCell>Склады</TableCell>
                            <TableCell>Роли</TableCell>
                            <TableCell>Статус</TableCell>

                        </TableRow>

                    </TableHead>
                    <TableBody>


                        {employeesStore.result.map(elem=>{
                            return(
                                <TableRow  className={elem.id === activeRow ? 'active cursor' : 'cursor'} onClick={()=>handleClick(elem.id)} onDoubleClick={handleDoubleClick}>
                                    <TableCell>{elem.fullName}</TableCell>
                                    <TableCell>{elem.login}</TableCell>
                                    <TableCell>{elem.stocks}</TableCell>
                                    <TableCell>{elem.roles}</TableCell>
                                    <TableCell>{elem.status}</TableCell>
                                </TableRow>
                            )
                        })}


                    </TableBody>
                </Table>

                <PersonModalForm
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

                <button onClick={()=>employeesStore.buttonClick({id:4, fullName: 'Иванов Иван Иванович', login:'IvanIvanovich', stocks:'butovo', roles: 'Ответственный за склад', status: 'активен'})}>click me</button>
            </CardBody>
        </Card>
    );
})

export default Employees;
