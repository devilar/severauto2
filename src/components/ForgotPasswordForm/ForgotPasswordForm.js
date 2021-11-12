import React, {useState} from 'react';
import Form from "../Ui/Form/Form";
import {Input} from "../Ui/Input/Input";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import Button from "components/Ui/CustomButtons/Button.js";
import {Alert, Container} from '@mui/material';
import {yupResolver} from "@hookform/resolvers/yup";
import axios from 'axios';
import CardHeader from "../Ui/Card/CardHeader";
import Card from "components/Ui/Card/Card.js";
import CardBody from "components/Ui/Card/CardBody.js";
import {makeStyles} from "@material-ui/core/styles";


const schema = yup.object().shape({
    email:yup.string().email().required("Обязательное поле"),
});


const useStyles = makeStyles({
    cardBody:{
        padding:"20px 60px 30px 60px"
    }
});

const Regform = () => {
    const classes = useStyles();

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
            <Card className={classes.formBody}>
                <CardHeader color="primary" style={{fontSize:'18px'}}>

                    <p>Форма забыли пароль</p>
                </CardHeader>

                <CardBody className={classes.cardBody}>


            {message&& <Alert style={{marginTop:'10px'}} variant="filled" severity="error">{message}</Alert>}

            <Alert severity="info" style={{marginTop:'20px'}}>

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


                <Button style={{marginTop:'40px'}} type='submit' color="primary">Зарегистрироваться</Button>
            </Form>

                </CardBody>

            </Card>
        </Container>
    );
};

export default Regform;