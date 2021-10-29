import React, {useState} from 'react';
import Form from "../Form/Form";
import {Input} from "../Input/Input";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {PrimaryButton} from "../CustomButtons/PrimaryButton";
import {Alert, Container} from '@mui/material';
import {yupResolver} from "@hookform/resolvers/yup";
import axios from 'axios';


const schema = yup.object().shape({
    login:yup.string().min(3).max(10).required("Обязательное поле"),
    password:yup.string().min(6).max(20).required("Обязательное поле"),
    repeatPassword:yup.string().min(6).required('Confirm Password is required')
        .oneOf([yup.ref('password')], 'Passwords must match')
});


const Regform = () => {

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
        <Container maxWidth="sm">
            {message&& <Alert style={{marginTop:'10px'}} variant="filled" severity="error">{message}</Alert>}

            <Form onSubmit={handleSubmit(submitHandler)}>

            <Input
                {...register('login')}
                type="text"
                id="login"
                label="Введите логин"
                name="login"
                error={!!errors.login}
                helperText={errors?.login?.message}/>

                <Input
                    {...register('password')}
                    id="password"
                    type="password"
                    label="Введите пароль"
                    name="password"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                />

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

            <PrimaryButton color="primary" fullWidth>Зарегистрироваться</PrimaryButton>

        </Form>
        </Container>
    );
};

export default Regform;