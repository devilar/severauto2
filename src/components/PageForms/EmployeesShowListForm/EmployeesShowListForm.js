import React, {useState} from 'react';
import Form from "../../Ui/Form/Form";
import {Input} from "../../Ui/Input/Input";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../../Ui/CustomButtons/Button";
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Alert} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import 'bootstrap/dist/css/bootstrap.css';
import CreateModalForm from "../../Modal/CreateModalForm";
import {maxString, minString} from "../../Lang/lang";
import employeesStore from "../../../store/employeesStore";
import {observer} from "mobx-react-lite";
import axios from 'axios';
export const dataAPI = axios.create();
import MockAdapter from 'axios-mock-adapter';
import {employeesMock} from "../../../mock";
import loaderStore from "../../../store/loaderStore";
import Snackbar from "../../Snackbar/Snackbar";
import AddAlert from "@material-ui/icons/AddAlert";
import mainStore from "../../../store/mainStore";
let mock = new MockAdapter(dataAPI);
mock.onGet("/users").reply(200, {
    users:employeesMock
});

const schema = yup.object().shape({
    fullName:yup.string().min(6, minString(6)).max(20,maxString(20)).required('Обязательное поле'),
    status:yup.string().required('Обязательное поле'),
    stock:yup.string().required('Обязательное поле'),
    roles:yup.string().required('Обязательное поле'),
});

const EmployeesShowListForm = observer(() => {

    const [modalShow, setModalShow] = React.useState(false);
    const [status, setStatus] = React.useState('');
    const [stock, setStock] = React.useState('');
    const [role, setRole] = React.useState('');
    const[message,setMessage] = useState('');

    const submitHandler = () => {

        loaderStore.enableLoader();
        dataAPI.get("/users").then((res) => {
            setTimeout(()=>{
                employeesStore.loadEmployees(res.data.users)
                loaderStore.disableLoader();
                mainStore.showNotification("tc");
            },1000)
        });

    }
    const {register, handleSubmit, formState:{ errors }} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    return (
        <>
        {message&& <Alert style={{marginTop:'10px'}} variant="filled" severity="error">{message}</Alert>}
        <Form className='pageForm' onSubmit={handleSubmit(submitHandler)}>
            <Grid container xs={8} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                <Grid item xs={6}>
                    <Input
                        {...register('fullName')}
                        type="text"
                        id="fullName"
                        label="Введите ФИО сотрудника"
                        name="fullName"
                        error={!!errors.fullName}
                        helperText={errors?.fullName?.message}/>
                </Grid>

                <Grid item xs={6}>
                    <FormControl className='customSelect' variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-label">Статус</InputLabel>
                        <Select
                            {...register('status')}
                            labelId="status"
                            id="status"
                            value={status}
                            label="Статус"
                            onChange={(e)=>setStatus(e.target.value)}
                            error={!!errors.status}
                            helperText={errors?.status?.message}
                        >
                            <MenuItem value={'active'}>Активен</MenuItem>
                            <MenuItem value={'notActive'}>Неактивен</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl className='customSelect' variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-label">Выбрать склад</InputLabel>
                        <Select
                            {...register('stock')}
                            labelId="stock"
                            id="stock"
                            value={stock}
                            label="Выбрать склад"
                            onChange={(e)=>setStock(e.target.value)}
                            error={!!errors.stock}
                            helperText={errors?.stock?.message}
                        >
                            <MenuItem value={'butovo'}>Бутово</MenuItem>
                            <MenuItem value={'cherkizovo'}>Черкизово</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xs={6}>
                    <FormControl className='customSelect' variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-label">Роли</InputLabel>
                        <Select
                            {...register('roles')}
                            labelId="roles"
                            id="roles"
                            value={role}
                            label="Роли"
                            onChange={(e)=>setRole(e.target.value)}
                            error={!!errors.roles}
                            helperText={errors?.roles?.message}>
                            <MenuItem value={'Admin'}>Админ</MenuItem>
                            <MenuItem value={'User'}>Пользователь</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Button style={{marginTop:'40px'}} type='submit' color="primary"><SearchIcon style={{marginRight:'10px'}}/>Показать</Button>
        </Form>
            <div className="hrCustom"></div>
            <Grid container justifyContent="flex-end">
            <Button onClick={() => setModalShow(true)} color="info"><PersonAddIcon style={{marginRight:'10px'}}/>Создать</Button>
            </Grid>
            <CreateModalForm
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Snackbar
                place="tc"
                color="success"
                icon={AddAlert}
                message="Список успешно загружен"
                open={mainStore.tc}
                closeNotification={() => mainStore.disableTC()}
                close
            />
        </>
    );
});

export default EmployeesShowListForm;