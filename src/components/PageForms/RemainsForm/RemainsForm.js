import React, {useState} from 'react';
import Form from "../../Form/Form";
import {Input} from "../../Input/Input";
import * as yup from "yup";
import axios from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../../CustomButtons/Button";
import Grid from '@mui/material/Grid';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {Alert} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
var MockAdapter = require("axios-mock-adapter");
var mock = new MockAdapter(axios);

mock.onGet("/users").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
});


const schema = yup.object().shape({
    itemRN:yup.string().min(3).max(10).required("Обязательное поле"),
    itemPeriod:yup.string().min(6).max(20).required("Обязательное поле"),
    itemStock:yup.string().min(6).required('Confirm Password is required')
});

const RemainsForm = () => {

    const[message,setMessage] = useState('');
    const [stock, setStock] = React.useState('');

    const submitHandler = (data) => {
        console.log('data SUBMITHANDLER', data);
        axios.post(`https://jsonplaceholder.typicode.com/users`, { id:1, title:'sar'})
            .then(res => {
                setMessage('Ошибка №68', res);
            })
    }

    const srs = () => {

        axios.get("/users").then(function (response) {
            console.log('mock test', response.data);
        });

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
                        {...register('itemRN')}
                        type="text"
                        id="itemRN"
                        label="Введите RN Товара"
                        name="itemRN"
                        error={!!errors.itemRN}
                        helperText={errors?.itemRN?.message}/>
                </Grid>

                <Grid item xs={6}>

                </Grid>

                <Grid item xs={6}>

                    <Input
                        {...register('itemPeriod')}
                        type="text"
                        id="itemPeriod"
                        label="Введите отчетный период"
                        name="itemPeriod"
                        error={!!errors.itemPeriod}
                        helperText={errors?.itemPeriod?.message}/>
                </Grid>

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
            </Grid>







            <Button style={{marginTop:'40px'}} type='submit' color="primary"><SearchIcon style={{marginRight:'10px'}}/> Показать</Button>


        </Form>
        <div className="hrCustom"></div>

            <Button onClick={srs}>test mock</Button>
        </>

    );
};

export default RemainsForm;