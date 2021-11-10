import React, {useEffect, useState} from 'react';
import Form from "../Form/Form";
import Button from "../CustomButtons/Button";
import * as yup from "yup";
import axios from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Alert, Checkbox} from "@mui/material";
import Grid from '@mui/material/Grid';
import {Input} from "../Input/Input";
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
import createUserRoleStore from "../../store/createUserRoleStore";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import VpnKeyIcon from '@mui/icons-material/VpnKey';




const EmployerCreateForm = observer(() => {

const [includeRules,setInludeRules] = useState({})


    let test = createUserRoleStore.rolesQuantity.length;
    console.log('test is', test);
    useEffect(()=>{
        let baseObj = {}


        for (let i = 0; i < test; i++) { // выведет 0, затем 1, затем 2
            baseObj[`roleItem${i}`] = yup.string().required("Обязательное поле");
        }

        setInludeRules(baseObj);

    },[test])

    const baseScheme = {
        password:yup.string().min(6, ('test!!!')).max(20).required("Обязательное поле"),
        repeatPassword:yup.string().required('Confirm Password is required')
            .oneOf([yup.ref('password')], 'Пароли должны совпадать'),
        fullName:yup.string().min(6).max(20).required("Обязательное поле"),
        email:yup.string().email().required("Обязательное поле"),

    }




    const schema = yup.object().shape(
        {...baseScheme, ...includeRules}
    );




    const [stock, setStock] = useState('');
    const[message,setMessage] = useState('');
    //const [schemeUpdater, setSchemeUpdater] = useState([])


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
                <Grid container xs={12}>

                    <Grid item xs={12}>
                        <Input
                            {...register('login')}
                            type="text"
                            id="login"
                            label="Введите логин сотрудника"
                            name="login"
                            error={!!errors.login}
                            helperText={errors?.login?.message}/>
                    </Grid>

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
                    <Grid item xs={6}>
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

                    <Grid item xs={12}>

                        <Input
                            {...register('fullName')}
                            type="text"
                            id="fullName"
                            label="Введите ФИО сотрудника"
                            name="fullName"
                            error={!!errors.fullName}
                            helperText={errors?.fullName?.message}/>
                    </Grid>

                    <Grid item xs={12}>
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



                    <Grid container xs={12} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>

                        <Grid item xs={6}>

                            <Button style={{marginTop:'40px'}} color="primary"><ControlPointIcon style={{marginRight:'10px'}}/>Добавить доступ к складу</Button>


                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Склад</TableCell>
                                        <TableCell>Просмотр</TableCell>
                                        <TableCell>Редактирование</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>



                                    <TableRow>
                                        <TableCell>

                                            <FormControl className='customSelect' variant="standard" fullWidth>
                                                <InputLabel id="demo-simple-select-label">Выбрать склад</InputLabel>
                                                <Select
                                                    {...register('itemStock')}
                                                    labelId="itemStock"
                                                    id="itemStock"
                                                    value={stock}
                                                    label="Выбрать склад"
                                                    onChange={(e)=>setStock(e.target.value)}
                                                    error={!!errors.itemStock}
                                                    helperText={errors?.itemStock?.message}
                                                >
                                                    <MenuItem value={'butovo'}>Бутово</MenuItem>
                                                    <MenuItem value={'cherkizovo'}>Черкизово</MenuItem>
                                                </Select>
                                            </FormControl>


                                        </TableCell>
                                        <TableCell><Checkbox/></TableCell>
                                        <TableCell><Checkbox/></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>

                                            <FormControl className='customSelect' variant="standard" fullWidth>
                                                <InputLabel id="demo-simple-select-label">Выбрать склад</InputLabel>
                                                <Select
                                                    {...register('itemStock2')}
                                                    labelId="itemStock2"
                                                    id="itemStock2"
                                                    value={stock}
                                                    label="Выбрать склад2"
                                                    onChange={(e)=>setStock(e.target.value)}
                                                    error={!!errors.itemStock2}
                                                    helperText={errors?.itemStock2?.message}
                                                >
                                                    <MenuItem value={'butovo'}>Бутово</MenuItem>
                                                    <MenuItem value={'cherkizovo'}>Черкизово</MenuItem>
                                                </Select>
                                            </FormControl>

                                        </TableCell>

                                        <TableCell><Checkbox/></TableCell>
                                        <TableCell><Checkbox/></TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>



                        </Grid>



                        <Grid item xs={6}>

                            <Button style={{marginTop:'40px'}} color="primary" onClick={()=>createUserRoleStore.addRole()}><VpnKeyIcon style={{marginRight:'10px'}}/>Назначить роль</Button>


                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Роли</TableCell>
                                    </TableRow>

                                </TableHead>
                                <TableBody>


                                    {createUserRoleStore.rolesQuantity.map((elem, index)=>{
                                        return(



                                            <TableRow key={elem.id}>
                                                <TableCell>

                                                    <FormControl className='customSelect' variant="standard" fullWidth>

                                                        <InputLabel id="demo-simple-select-label">Выбрать роль</InputLabel>
                                                        <Select
                                                            {...register(`roleItem${index}`)}
                                                            labelId='roleItem'
                                                            id="roleItem"
                                                            value={createUserRoleStore.rolesQuantity[index].roleTitle}
                                                            label="roleItem"
                                                            onChange={(e)=>createUserRoleStore.handleChange(index, e.target.value)}
                                                            error={!!errors[`roleItem${index}`]}
                                                            helperText={errors?.roleItem?.message}
                                                        >
                                                            {createUserRoleStore.rolesList.map(elem=><MenuItem key={elem.id} value={elem.title}>{elem.title}</MenuItem>)}

                                                        </Select>
                                                    </FormControl>

                                                </TableCell>
                                            </TableRow>

                                        )
                                    })}

                                </TableBody>
                            </Table>

                        </Grid>
                    </Grid>


                    <Button style={{marginTop:'40px'}} type='submit' color="primary"><PersonAddIcon style={{marginRight:'10px'}}/>Создать</Button>


                </Grid>
            </Form>


        </div>
    );
});

export default EmployerCreateForm;