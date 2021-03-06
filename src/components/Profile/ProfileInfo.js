import React, {useState} from 'react';
import Form from "../Ui/Form/Form";
import {Input} from "../Ui/Input/Input";
import Button from "../Ui/CustomButtons/Button";
import * as yup from "yup";
import axios from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Alert, Checkbox} from "@mui/material";
import {PasswordInput} from "../Ui/Input/passwordInput";
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import createUserRoleStore from "../../store/createUserRoleStore";
import MenuItem from "@mui/material/MenuItem";


const schema = yup.object().shape({
    password:yup.string().min(6, ('test!!!')).max(20).required("Обязательное поле"),
    fullName:yup.string().min(6).max(20).required("Обязательное поле"),
    email:yup.string().email().required("Обязательное поле"),
    stockRole:yup.string().required("Обязательное поле"),
});

const ProfileInfo = () => {


    const[message,setMessage] = useState('');
    const[password,setPassword] = useState('');
    const [role,setRole] = useState('');


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

            <Grid container xs={12}>

            <div style={{marginTop:'30px'}}><span>Логин: Виктор</span> <span className="supergreen">Активен</span></div>

            <Form onSubmit={handleSubmit(submitHandler)}>
                <Grid container xs={12}>
                    <Grid item xs={6}>
                    <PasswordInput
                        {...register('password')}
                        id="password"
                        type="password"
                        label="Пароль"
                        value={password}
                        name="password"
                        showPasswordBtn="true"
                        onChange={(e)=>setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                    />
                    </Grid>
                     <Grid item xs={6}>
                        <Button style={{marginLeft:'80px', marginTop:'20px'}} color="primary" onClick={()=>console.log('tar', password)}>
                            <EditIcon style={{marginRight:'10px'}}/>Сменить пароль</Button>
                     </Grid>
                </Grid>
                <Grid container xs={12}>
                    <Grid item xs={6}>
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
                    </Grid>
                </Grid>
                <Grid container xs={12}>
                    <Grid item xs={6}>
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
                                        <MenuItem value={elem.value}>{elem.title}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container xs={12} rowSpacing={2} style={{marginTop:'50px'}}>
                    <Grid item xs={12}>



                        {role === 'sklad_manager' && <Table>
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
                        </Table>}



                    </Grid>
                </Grid>


                <Button style={{marginTop:'40px'}} type='submit' color="primary">Сохранить</Button>

            </Form>
            </Grid>

        </div>
    );
};

export default ProfileInfo;