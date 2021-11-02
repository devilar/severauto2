import React, {useState} from 'react';
import Form from "../Form/Form";
import {Input} from "../Input/Input";
import Button from "../CustomButtons/Button";
import * as yup from "yup";
import axios from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Alert} from "@mui/material";


const schema = yup.object().shape({
    password:yup.string().min(6, ('test!!!')).max(20).required("Обязательное поле"),
    fullName:yup.string().min(6).max(20).required("Обязательное поле"),
    email:yup.string().email().required("Обязательное поле"),
});

const ProfileInfo = () => {


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


                <Input
                    {...register('password')}
                    id="password"
                    type="password"
                    label="Введите пароль"
                    name="password"
                    showPasswordBtn="true"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                />

                <Input
                    {...register('fullName')}
                    id="fullName"
                    type="text"
                    label="ФИО"
                    name="repeatPassword"
                    error={!!errors.fullName}
                    helperText={errors?.fullName?.message}
                    tooltip='test test!'
                />

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

                <Button style={{marginTop:'40px'}} type='submit' color="primary">Зарегистрироваться</Button>

            </Form>


        </div>
    );
};

export default ProfileInfo;