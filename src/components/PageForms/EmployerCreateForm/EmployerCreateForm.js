import React, {useEffect, useState} from 'react';
import Form from "../../Ui/Form/Form";
import Button from "../../Ui/CustomButtons/Button";
import * as yup from "yup";
import axios from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Alert, Checkbox} from "@mui/material";
import Grid from '@mui/material/Grid';
import {Input} from "../../Ui/Input/Input";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {observer} from "mobx-react-lite";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import createUserRoleStore from "../../../store/createUserRoleStore";
import employeesStore from "../../../store/employeesStore";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '1px solid #F55A4E',
    boxShadow: 24,
    padding:2
};


const EmployerCreateForm = observer(({onhide}) => {








    const [role,setRole] = useState('');
const [includeRules,setInludeRules] = useState({})



    const baseScheme = {
        login:yup.string().min(6, ('RARA')).max(20).required("Обязательное поле"),
        password:yup.string().min(6, ('test!!!')).max(20).required("Обязательное поле"),
        repeatPassword:yup.string().required('Confirm Password is required')
        .oneOf([yup.ref('password')], 'Пароли должны совпадать'),
        fullName:yup.string().min(6).max(20).required("Обязательное поле"),
        email:yup.string().email().required("Обязательное поле"),
        stockRole:yup.string().required("Обязательное поле"),

    }




    const schema = yup.object().shape(
        {...baseScheme, ...includeRules}
    );


    const[message,setMessage] = useState('');



    const submitHandler = (data) => {
        console.log('data SUBMITHANDLER3', data);
        axios.post(`https://jsonplaceholder.typicode.com/users`, { id:1, title:'sar'})
            .then(res => {
                setMessage('Ошибка №69', res);
                console.log('message', message);
                employeesStore.buttonClick({id:4, fullName: 'Барсуков Иван Иванович', login:'IvanIvanovich', stocks:'butovo', roles: 'Ответственный за склад', status: 'активен'});
                onhide();

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

                    <Grid container xs={12}>
                        <Grid item xs={6}>
                            <Input
                                {...register('login')}
                                type="text"
                                id="login"
                                label="Введите логин сотрудника"
                                name="login"
                                error={!!errors.login}
                                helperText={errors?.login?.message}
                            />
                        </Grid>
                    </Grid>

                    <Grid container xs={12} columnSpacing={0}>
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
                        <Grid item xs={6} style={{paddingLeft:'20px',boxSizing:'border-box'}}>
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
                    </Grid>
                    <Grid container xs={12}>
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
                    </Grid>

                    <Grid container xs={12}>
                        <Grid item xs={6}>
                            <Input
                                {...register('email')}
                                type="text"
                                id="email"
                                label="Введите email сотрудника"
                                name="email"
                                error={!!errors.email}
                                helperText={errors?.email?.message}
                                tooltip='Email должен содержать имя пользовтеля и адрес домена. Межуд ними должен располагаться знак @ '
                            />
                        </Grid>
                    </Grid>

                        <Grid container xs={12}>
                        <Grid item xs={6}>
                            <FormControl className='customSelect' variant="standard" fullWidth>
                                <InputLabel id="demo-simple-select-label">Роль</InputLabel>
                                <Select
                                    {...register('stockRole')}
                                    labelId="stockRole"
                                    id="stockRole"
                                    value={role}
                                    label="Роль"
                                    onChange={(e)=>setRole(e.target.value)}
                                    error={!!errors.stockRole}
                                    helperText={errors?.stockRole?.message}
                                >
                                    {createUserRoleStore.rolesList.map((elem, index) =>{
                                        return(
                                            <MenuItem key={elem.id} value={elem.value}>{elem.title}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    </Grid>


                {role === 'sklad_manager' &&
                    <Grid container xs={12} rowSpacing={2} style={{marginTop:'30px'}}>

                        <Grid item xs={12}>



                             <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Склад</TableCell>
                                        <TableCell>Адрес</TableCell>
                                        <TableCell>Просмотр</TableCell>
                                        <TableCell>Редактирование</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {createUserRoleStore.stockInfo.map((elem, index) =>{
                                        return(
                                            <TableRow>
                                                <TableCell>{elem.stockName}</TableCell>
                                                <TableCell>{elem.adress}</TableCell>
                                                <TableCell><Checkbox onChange={()=>createUserRoleStore.readStatusChange(index)} checked={elem.read}/></TableCell>
                                                <TableCell><Checkbox onChange={()=>createUserRoleStore.editStatusChange(index)} checked={elem.edit}/></TableCell>
                                            </TableRow>
                                        )
                                    })}


                                </TableBody>
                            </Table>



                        </Grid>

                    </Grid>
                }



                    <Button style={{marginTop:'40px'}} type='submit' color="primary"><PersonAddIcon style={{marginRight:'10px'}}/>Создать</Button>


            </Form>




        </div>
    );
});

export default EmployerCreateForm;