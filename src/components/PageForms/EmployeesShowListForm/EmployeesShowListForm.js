import React, {useState} from 'react';
import Form from "../../Ui/Form/Form";
import {Input} from "../../Ui/Input/Input";
import * as yup from "yup";
import axios from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../../Ui/CustomButtons/Button";
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Alert} from "@mui/material";
import Modal from 'react-bootstrap/Modal';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import 'bootstrap/dist/css/bootstrap.css';
import CreateModalForm from "../../Modal/CreateModalForm";

const schema = yup.object().shape({
    fullName:yup.string().min(6).required('Confirm Password is required'),
    status:yup.string().required('Confirm Password is required'),
    stock:yup.string().required('Confirm Password is required'),
    roles:yup.string().required('Confirm Password is required'),
});



const EmployeesShowListForm = () => {


    const [modalShow, setModalShow] = React.useState(false);


    const [status, setStatus] = React.useState('');
    const [stock, setStock] = React.useState('');
    const [role, setRole] = React.useState('');



    const[message,setMessage] = useState('');

    const submitHandler = (data) => {
        console.log('data SUBMITHANDLER', data);
        axios.post(`https://jsonplaceholder.typicode.com/users`, { id:1, title:'sar'})
            .then(res => {
                setMessage('Ошибка №68', res);

            })
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



        </>
    );
};

export default EmployeesShowListForm;