import React, {useEffect, useState} from 'react';
import Form from "../../Ui/Form/Form";
import {Input} from "../../Ui/Input/Input";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {Alert, Container} from '@mui/material';
import {yupResolver} from "@hookform/resolvers/yup";
import axios from 'axios';
import CardHeader from "../../Ui/Card/CardHeader";
import Card from "components/Ui/Card/Card.js";
import CardBody from "components/Ui/Card/CardBody.js";
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/Ui/CustomButtons/Button.js";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti'
import {Link} from "react-router-dom";
import {maxString, minString} from "../../Lang/lang";


const schema = yup.object().shape({
    login:yup.string().min(5, minString(5)).max(10, maxString(30)).required("Обязательное поле"),
    password:yup.string().min(6, minString(6)).max(20,maxString(20)).required("Обязательное поле"),
    repeatPassword:yup.string().required('Пароли должны совпадать')
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
    const repeatPasswordToolTip = 'Повторите введенный пароль';
    const { width, height } = useWindowSize();
    const classes = useStyles();

    const[message,setMessage] = useState('');
    const[canOpen, setCanOpen] = useState(true);
    const[regSuccess, setRegSuccess] = useState(false);


    const submitHandler = (data) => {
        axios.post(`https://jsonplaceholder.typicode.com/users`, data)
            .then(res => {
                //setMessage('Ошибка заполнения формы', res);
                setRegSuccess(true);

            })
    }

    const {register, handleSubmit, formState:{ errors }} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (response) {
                console.log(response);
            })
    },[])


    return (
       <>
           <Container maxWidth="sm">

                   <Card className={classes.formBody}>
                   <CardHeader color="primary" style={{fontSize:'18px'}}>
                       <p style={{marginBottom:'0'}}>Форма регистрации</p>
                   </CardHeader>
                   <CardBody className={classes.cardBody}>
                       {message&& <Alert style={{marginTop:'10px'}} variant="filled" severity="error">{message}</Alert>}

                       {!regSuccess ?
                       <>
                       {canOpen ? <Form onSubmit={handleSubmit(submitHandler)}>
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
                               tooltip={repeatPasswordToolTip}

                           />
                           <Button style={{marginTop:'40px'}} type='submit' color="primary">Зарегистрироваться</Button>
                       </Form> : <Alert variant="filled" severity="error">Ошибка! Доступ запрещен! Обратитесь к администрации</Alert>}
                       </>
                       :

                           <>


                               <span style={{textAlign:'center',display:'block',marginTop:'20px'}}>Регистрация успешно завершена. Перейти на страницу авторизации?</span>
                               <div style={{textAlign:'center',marginTop:'20px'}}><Link to='admin/remains'><Button color='success'>Перейти</Button></Link></div>
                           </>

                       }


                   </CardBody>

               </Card>
           </Container>
       </>
    );
};

export default Regform;