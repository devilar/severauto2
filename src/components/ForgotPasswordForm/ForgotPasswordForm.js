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
    email:yup.string().email().required("Обязательное поле"),
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

            <Alert severity="info">

                Для восстановаления аккаунта введите E-mail, по которому
                создавался аккаунт. Если E-mail недоступен или доступ
                утерян - обратитесь к Администратору.
                Если вы не создавали аккаунт по E-mail - обратитесь к
                пользователю, выдавшему данные для входа

            </Alert>

            <Form onSubmit={handleSubmit(submitHandler)}>
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


                <PrimaryButton fullWidth>Авторизироваться</PrimaryButton>
            </Form>
        </Container>
    );
};

export default Regform;