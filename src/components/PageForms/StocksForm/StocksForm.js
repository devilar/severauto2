import React, {useState} from 'react';
import Form from "../../Form/Form";
import * as yup from "yup";
import axios from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../../CustomButtons/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {Alert} from "@mui/material";
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';


const schema = yup.object().shape({
    itemStock:yup.string().min(6).required('Confirm Password is required'),
    stockStatus:yup.string().min(6).required('test'),
});

const StocksForm = () => {

    const [status, setStatus] = React.useState('');
    const [stock, setStock] = React.useState('');


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

                </Grid>

                <Grid item xs={6}>

                    <FormControl className='customSelect' variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-label">Статус</InputLabel>
                        <Select
                            {...register('stockStatus')}
                            labelId="stockStatus"
                            id="stockStatus"
                            value={status}
                            label="Статус"
                            onChange={(e)=>setStatus(e.target.value)}
                            error={!!errors.stockStatus}
                            helperText={errors?.stockStatus?.message}
                        >
                            <MenuItem value={'active'}>Активен</MenuItem>
                            <MenuItem value={'notActive'}>Неактивен</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>


            </Grid>







            <Button style={{marginTop:'40px'}} type='submit' color="primary"><SearchIcon style={{marginRight:'10px'}}/>Показать</Button>


        </Form>
    <div className="hrCustom"></div>
    </>
    );
};

export default StocksForm;