import React, {useState} from 'react';
import Form from "../Form/Form";
import Button from "../CustomButtons/Button";
import * as yup from "yup";
import axios from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Alert} from "@mui/material";
import Grid from "@material-ui/core/Grid";
import {Input} from "../Input/Input";
import EmployerStockCreateForm from "./stockForm/EmployerStockCreateForm";


const schema = yup.object().shape({
    password:yup.string().min(6, ('test!!!')).max(20).required("Обязательное поле"),
    fullName:yup.string().min(6).max(20).required("Обязательное поле"),
    email:yup.string().email().required("Обязательное поле"),
});

const EmployerCreateForm = () => {


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
        <div>
            {message&& <Alert style={{marginTop:'10px'}} variant="filled" severity="error">{message}</Alert>}



                <Form onSubmit={handleSubmit(submitHandler)}>
                    <Grid container xs={12}>

                    <Grid item xs={12}>
                        <Input
                            {...register('login')}
                            type="text"
                            id="login"
                            label="Введите логин сотрудника"
                            name="login"
                            error={!!errors.login}
                            helperText={errors?.login?.message}/>
                    </Grid>

                        <Grid item xs={6}>
                    <Input
                        {...register('password')}
                        id="password"
                        type="password"
                        label="Введите пароль"
                        name="password"
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                    />
                        </Grid>
                        <Grid item xs={6}>
                    <Input
                        {...register('repeatPassword')}
                        id="repeatPassword"
                        type="password"
                        label="Повторите пароль"
                        name="repeatPassword"
                        error={!!errors.repeatPassword}
                        helperText={errors?.repeatPassword?.message}
                        tooltip='test test!'
                    />
                        </Grid>

                        <Grid item xs={12}>

                    <Input
                        {...register('fullName')}
                        type="text"
                        id="fullName"
                        label="Введите ФИО сотрудника"
                        name="fullName"
                        error={!!errors.fullName}
                        helperText={errors?.fullName?.message}/>
                        </Grid>

                        <Grid item xs={12}>
                    <Input
                        {...register('email')}
                        type="text"
                        id="email"
                        label="Введите почту"
                        name="email"
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                        tooltip='Email должен содержать имя
пользовтеля и адрес домена.
Межуд ними должен располагаться знак @
'
                    />
                        </Grid>

                        <Grid item xs={12}> <Button style={{marginTop:'40px'}} color="primary">Добавить доступ к складу</Button></Grid>

                   <Grid container xs={12}>
                       <Grid container xs={6}><EmployerStockCreateForm/></Grid>
                       <Grid container xs={6}><Grid item xs={12}>Role Form</Grid></Grid>
                   </Grid>


                    </Grid>
                </Form>


        </div>
    );
};

export default EmployerCreateForm;