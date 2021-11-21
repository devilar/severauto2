import React, {useState} from 'react';
import Form from "../../Ui/Form/Form";
import {Input} from "../../Ui/Input/Input";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {Alert, Container} from '@mui/material';
import {yupResolver} from "@hookform/resolvers/yup";
import axios from 'axios';
import {maxString, minString} from "../../Lang/lang";
import CardHeader from "../../Ui/Card/CardHeader";
import Card from "components/Ui/Card/Card.js";
import CardBody from "components/Ui/Card/CardBody.js";
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/Ui/CustomButtons/Button.js";
import loginStore from "../../../store/loginStore";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import MockAdapter from "axios-mock-adapter";
import {loginMock} from "../../../mock";
import loaderStore from "../../../store/loaderStore";

export const dataAPI = axios.create();
let mock = new MockAdapter(dataAPI);
mock.onGet("/login").reply(200, {
    loginData:loginMock
});



const schema = yup.object().shape({
    login:yup.string().min(5, minString(5)).max(10, maxString(30)).required("Обязательное поле"),
    password:yup.string().min(6, minString(6)).max(20,maxString(20)).required("Обязательное поле")
});


const useStyles = makeStyles({
    cardBody:{
        padding:"20px 60px 30px 60px"
    }
});

const Regform = observer(() => {
    const classes = useStyles();

    const[message,setMessage] = useState('');
    const[loginSuccess, setLoginSuccess] = useState(false);

    const submitHandler = (data) => {
        loaderStore.enableLoader();
        dataAPI.get(`/login`)
            .then(res => {
               setTimeout(()=>{
                   loginStore.isLogged = true;
                   loginStore.currentUser = res.data.loginData;
                   localStorage.setItem('token', res.data.token);
                   loaderStore.disableLoader();
                   setLoginSuccess(true);
               },1000)
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
                    <p style={{marginBottom:'0'}}>Форма входа</p>
                </CardHeader>

                <CardBody className={classes.cardBody}>


            {message&& <Alert style={{marginTop:'10px'}} variant="filled" severity="error">{message}</Alert>}

            {!loginSuccess ?
            <Form onSubmit={handleSubmit(submitHandler)}>
                <Input
                    {...register('login')}
                    type="text"
                    id="login"
                    label="Введите логин"
                    name="login"
                    error={!!errors.login}
                    helperText={errors?.login?.message}
                    tooltip='Длинна логина должна быть от 5 до 30 символов. Логин должен содержать только буквы Латинского алфавита и не должен состоять только из цифр. Может содержать элементы пунктуации (-_.).Логин не может содержать пробел или заканчиваться точкой'
                />
                <Input
                    {...register('password')}
                    id="password"
                    type="password"
                    label="Пароль"
                    name="password"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                    tooltip='Длинна пароля не должна быть менее 8
символов. В пароле должны обязательно
быть буквы верхнего регистра, быквы
нижнего регистра, цифры или спец символы
(!,@,#,$,&,*,% и т.п.)
'
                />

                <Button style={{marginTop:'40px'}} type='submit' color="primary">Войти</Button>
            </Form>
                :

                <>


                    <span style={{textAlign:'center',display:'block',marginTop:'20px'}}>Вы успешно зашли в свою учетную запись. Перейти на основную панель сайта?</span>
                    <div style={{textAlign:'center',marginTop:'20px'}}><Link to='admin/remains'><Button color='success'>Перейти</Button></Link></div>
                </>

            }
                </CardBody>

            </Card>

        </Container>
    );
});

export default Regform;