import React, {useState} from 'react';
import Form from "../Form/Form";
import {Input} from "../Input/Input";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {Alert, Container} from '@mui/material';
import {yupResolver} from "@hookform/resolvers/yup";
import axios from 'axios';
import CardHeader from "../Card/CardHeader";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";



const schema = yup.object().shape({
    login:yup.string().min(3).max(10).required("Обязательное поле"),
    password:yup.string().min(6).max(20).required("Обязательное поле"),
    repeatPassword:yup.string().required('Confirm Password is required')
        .oneOf([yup.ref('password')], 'Пароли должны совпадать')
});

const useStyles = makeStyles({
    cardBody:{
        padding:"20px 60px 30px 60px"
    }
});





const Regform = () => {

    const loginToolTip = 'Длинна логина должна быть от 5 до 30 символов. Логин должен содержать только буквы Латинского алфавита и не должен состоять только из цифр. Может содержать элементы пунктуации (-_.).Логин не может содержать пробел или заканчиваться точкой';
    const passwordToolTip = 'Длинна пароля не должна быть менее 8 символов. В пароле должны обязательно быть буквы верхнего регистра, быквы нижнего регистра, цифры или спец символы (!,@,#,$,&,*,% и т.п.)';

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
                    <p>Форма регистрации</p>
                </CardHeader>

                <CardBody className={classes.cardBody}>


                    {message&& <Alert style={{marginTop:'10px'}} variant="filled" severity="error">{message}</Alert>}

                    <Form onSubmit={handleSubmit(submitHandler)}>


                        <Input
                            {...register('login')}
                            type="text"
                            id="login"
                            label="Введите логин"
                            name="login"
                            error={!!errors.login}
                            helperText={errors?.login?.message}
                            tooltip={loginToolTip}
                        />

                        <Input
                            {...register('password')}
                            id="password"
                            type="password"
                            label="Введите пароль"
                            name="password"
                            error={!!errors.password}
                            helperText={errors?.password?.message}
                            tooltip={passwordToolTip}
                        />

                        <Input
                            {...register('repeatPassword')}
                            id="repeatPassword"
                            type="password"
                            label="Повторите пароль"
                            name="repeatPassword"
                            error={!!errors.repeatPassword}
                            helperText={errors?.repeatPassword?.message}

                        />

                        <Button style={{marginTop:'40px'}} type='submit' color="primary">Зарегистрироваться</Button>

                    </Form>

                </CardBody>

            </Card>

        </Container>
    );
};

export default Regform;