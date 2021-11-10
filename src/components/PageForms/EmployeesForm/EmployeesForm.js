import React, {useState} from 'react';
import Form from "../../Form/Form";
import {Input} from "../../Input/Input";
import * as yup from "yup";
import axios from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../../CustomButtons/Button";
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Alert} from "@mui/material";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const schema = yup.object().shape({
    fullName:yup.string().min(6).required('Confirm Password is required'),
    status:yup.string().required('Confirm Password is required'),
    stock:yup.string().required('Confirm Password is required'),
    roles:yup.string().required('Confirm Password is required'),
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EmployeesForm = () => {
    const [open, setOpen] = React.useState(false);
    //const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [status, setStatus] = React.useState('');
    const [stock, setStock] = React.useState('');
    const [role, setRole] = React.useState('');



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
        <>
        {message&& <Alert style={{marginTop:'10px'}} variant="filled" severity="error">{message}</Alert>}
        <Form className='pageForm' onSubmit={handleSubmit(submitHandler)}>

            <Grid container xs={8} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
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

                <Grid item xs={6}>
                    <FormControl className='customSelect' variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-label">Статус</InputLabel>
                        <Select
                            {...register('status')}
                            labelId="status"
                            id="status"
                            value={status}
                            label="Статус"
                            onChange={(e)=>setStatus(e.target.value)}
                            error={!!errors.status}
                            helperText={errors?.status?.message}
                        >
                            <MenuItem value={'active'}>Активен</MenuItem>
                            <MenuItem value={'notActive'}>Неактивен</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>

                    <FormControl className='customSelect' variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-label">Выбрать склад</InputLabel>
                        <Select
                            {...register('stock')}
                            labelId="stock"
                            id="stock"
                            value={stock}
                            label="Выбрать склад"
                            onChange={(e)=>setStock(e.target.value)}
                            error={!!errors.stock}
                            helperText={errors?.stock?.message}
                        >
                            <MenuItem value={'butovo'}>Бутово</MenuItem>
                            <MenuItem value={'cherkizovo'}>Черкизово</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>

                <Grid item xs={6}>

                    <FormControl className='customSelect' variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-label">Роли</InputLabel>
                        <Select
                            {...register('roles')}
                            labelId="roles"
                            id="roles"
                            value={role}
                            label="Роли"
                            onChange={(e)=>setRole(e.target.value)}
                            error={!!errors.roles}
                            helperText={errors?.roles?.message}>
                            <MenuItem value={'Admin'}>Админ</MenuItem>
                            <MenuItem value={'User'}>Пользователь</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>


            </Grid>







            <Button style={{marginTop:'40px'}} type='submit' color="primary"><SearchIcon style={{marginRight:'10px'}}/>Показать</Button>


        </Form>
            <div className="hrCustom"></div>


            <Grid container justifyContent="flex-end">
            <Link to="/create"><Button /*onClick={handleOpen}*/ color="info"><PersonAddIcon style={{marginRight:'10px'}}/>Создать</Button></Link>
            </Grid>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>


        </>
    );
};

export default EmployeesForm;