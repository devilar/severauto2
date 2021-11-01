import React, {useState} from 'react';
import Form from "../../Form/Form";
import {Input} from "../../Input/Input";
import * as yup from "yup";
import axios from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../../CustomButtons/Button";
import GridContainer from "../../Grid/GridContainer";
import GridItem from "../../Grid/GridItem";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const schema = yup.object().shape({
    fullName:yup.string().min(6).required('Confirm Password is required'),
    status:yup.string().min(6).required('Confirm Password is required'),
    stock:yup.string().min(6).required('Confirm Password is required'),
    roles:yup.string().min(6).required('Confirm Password is required'),
});

const EmployeesForm = () => {

    const [status, setStatus] = React.useState('');
    const [stock, setStock] = React.useState('');
    const [role, setRole] = React.useState('');



    const[message,setMessage] = useState('');

    const submitHandler = (data) => {
        console.log('data SUBMITHANDLER', data);
        axios.post(`https://jsonplaceholder.typicode.com/users`, { id:1, title:'sar'})
            .then(res => {
                setMessage('Ошибка №68', res);
                console.log('message', message);
            })
    }

    const {register, handleSubmit, formState:{ errors }} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    return (
        <Form onSubmit={handleSubmit(submitHandler)}>

            <GridContainer>
                <GridItem xs="6">
                    <Input
                        {...register('fullName')}
                        type="text"
                        id="fullName"
                        label="Введите ФИО сотрудника"
                        name="fullName"
                        error={!!errors.fullName}
                        helperText={errors?.fullName?.message}/>
                </GridItem>

                <GridItem xs="6">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Статус</InputLabel>
                        <Select
                            {...register('status')}
                            labelId="status"
                            id="status"
                            value={status}
                            label="status"
                            onChange={(e)=>setStatus(e.target.value)}
                            error={!!errors.status}
                            helperText={errors?.status?.message}
                        >
                            <MenuItem value={'active'}>Активен</MenuItem>
                            <MenuItem value={'notActive'}>Неактивен</MenuItem>
                        </Select>
                    </FormControl>
                </GridItem>

                <GridItem xs="6">


                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Выбрать склад</InputLabel>
                        <Select
                            {...register('stock')}
                            labelId="stock"
                            id="stock"
                            value={stock}
                            label="stock"
                            onChange={(e)=>setStock(e.target.value)}
                            error={!!errors.stock}
                            helperText={errors?.stock?.message}
                        >
                            <MenuItem value={'butovo'}>Бутово</MenuItem>
                            <MenuItem value={'cherkizovo'}>Черкизово</MenuItem>
                        </Select>
                    </FormControl>

                </GridItem>

                <GridItem xs="6">

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Роли</InputLabel>
                        <Select
                            {...register('roles')}
                            labelId="roles"
                            id="roles"
                            value={role}
                            label="roles"
                            onChange={(e)=>setRole(e.target.value)}
                            error={!!errors.roles}
                            helperText={errors?.roles?.message}>
                            <MenuItem value={'Admin'}>Админ</MenuItem>
                            <MenuItem value={'User'}>Пользователь</MenuItem>
                        </Select>
                    </FormControl>
                </GridItem>


            </GridContainer>







            <Button style={{marginTop:'40px'}} type='submit' color="primary">Показать</Button>


        </Form>
    );
};

export default EmployeesForm;