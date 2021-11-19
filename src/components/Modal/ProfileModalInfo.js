import React, {useEffect, useState} from 'react';
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
import {observer} from "mobx-react-lite";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

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

const schema = yup.object().shape({
    password:yup.string().min(6, ('test!!!')).max(20).required("Обязательное поле"),
    fullName:yup.string().min(6).max(20).required("Обязательное поле"),
    email:yup.string().email().required("Обязательное поле"),
    stockRole:yup.string().required("Обязательное поле"),
});

const ProfileModalInfo = observer(() => {

    const handleBlockUser = () => {
        alert('blocked');
        handleClose();
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const[message,setMessage] = useState('');
    const[password,setPassword] = useState('');
    const [open, setOpen] = React.useState(false);

    const submitHandler = (data) => {

        axios.get(`https://jsonplaceholder.typicode.com/comments`)
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

                <div><span>Логин: {createUserRoleStore.activePerson.fullName}</span> <span className={createUserRoleStore.activePerson.active? 'supergreen' : ''}>{createUserRoleStore.activePerson.active? 'Активен' : 'Неактивен'}</span></div>

                <Form onSubmit={handleSubmit(submitHandler)}>

                    <Grid container>
                        <Grid item xs={6}>
                            <PasswordInput
                                {...register('password')}
                                id="password"
                                value={createUserRoleStore.activePerson.password}
                                type="password"
                                label="Пароль"
                                name="password"
                                showPasswordBtn="true"
                                onChange={(e)=>createUserRoleStore.changeValue('password', e.target.value)}
                                error={!!errors.password}
                                helperText={errors?.password?.message}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Button style={{marginLeft:'80px', marginTop:'20px'}} color="primary" onClick={()=>console.log('tar', password)}>
                                <EditIcon style={{marginRight:'10px'}}/>Сменить пароль</Button>
                        </Grid>
                    </Grid>
                    <Input
                        {...register('fullName')}
                        id="fullName"
                        onChange={(e)=>createUserRoleStore.changeValue('fullName', e.target.value)}
                        type="text"
                        value={createUserRoleStore.activePerson.fullName}
                        label="ФИО"
                        name="fullName"
                        error={!!errors.fullName}
                        helperText={errors?.fullName?.message}
                        tooltip='test test!'
                    />

                    <Input
                        {...register('email')}
                        type="text"
                        id="email"
                        value={createUserRoleStore.activePerson.email}
                       onChange={(e)=>createUserRoleStore.changeValue('email', e.target.value)}
                        label="Введите почту"
                        name="email"
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                        tooltip='Email должен содержать имя
пользовтеля и адрес домена.
Межуд ними должен располагаться знак @
'
                    />


                    <Grid container xs={12}>
                        <Grid item xs={6}>
                            <FormControl className='customSelect' variant="standard" fullWidth>
                                <InputLabel id="demo-simple-select-label">Роль</InputLabel>
                                <Select
                                    {...register('stockRole')}
                                    labelId="stockRole"
                                    id="stockRole"
                                    label="Роль"
                                    error={!!errors.stockRole}
                                    value={createUserRoleStore.activePerson.role}
                                    onChange={(e)=>createUserRoleStore.changeValue('role', e.target.value)}
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



                    {createUserRoleStore.activePerson.role === 'sklad_manager' &&

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
                    <Button onClick={handleOpen} style={{marginTop:'40px'}} color="danger"><PersonAddIcon style={{marginRight:'10px'}}/>Удалить</Button>
                    <Button style={{marginTop:'40px'}} type='submit' color="primary">Сохранить</Button>

                </Form>
            </Grid>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='modalHead'>Вы действительно хотите заблокировать сотрудника?</div>
                    <div className='modalContent'>
                        <Button color='primary' onClick={handleClose}>Нет</Button>
                        <Button color='danger' onClick={handleBlockUser}>Да</Button>
                    </div>


                </Box>
            </Modal>

        </div>
    );
});

export default ProfileModalInfo;