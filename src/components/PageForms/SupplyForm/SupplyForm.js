import React, {useState} from 'react';
import Form from "../../Ui/Form/Form";
import {Input} from "../../Ui/Input/Input";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../../Ui/CustomButtons/Button";
import Grid from '@mui/material/Grid';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {Alert} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {supplyMock} from "../../../mock";
import loaderStore from "../../../store/loaderStore";
import AddAlert from "@material-ui/icons/AddAlert";
import Snackbar from "../../Snackbar/Snackbar";


import supplyStore from "../../../store/supplyStore";
import mainStore from "../../../store/mainStore";

export const dataAPI = axios.create();

let mock = new MockAdapter(dataAPI);
mock.onGet("/supply").reply(200, {
    supply:supplyMock
});


const schema = yup.object().shape({
    contractNumber:yup.string().min(3).max(10).required("Обязательное поле2"),
    itemName:yup.string().min(3).max(10).required("Обязательное поле"),
    itemPeriod:yup.string().min(6).max(20).required("Обязательное поле"),
    itemStock:yup.string().min(6).required('Confirm Password is required')
});

const SupplyForm = () => {

    const[message,setMessage] = useState('');
    const[stock,setStock] = useState('');

    const submitHandler = () => {
        loaderStore.enableLoader();
        dataAPI.get(`/supply`)
            .then(res => {
                setTimeout(()=>{
                    supplyStore.loadResult(res.data.supply);
                    loaderStore.disableLoader();
                    mainStore.showNotification("tc");
                },1000)
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
                        {...register('contractNumber')}
                        type="text"
                        id="contractNumber"
                        label="Введите номер договора"
                        name="contractNumber"
                        error={!!errors.contractNumber}
                        helperText={errors?.contractNumber?.message}/>
                </Grid>

                <Grid item xs={6}>
                    <Input
                        {...register('itemName')}
                        type="text"
                        id="itemName"
                        label="Введите название товара"
                        name="itemName"
                        error={!!errors.itemName}
                        helperText={errors?.itemName?.message}/>
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







            <Button style={{marginTop:'40px'}} type='submit' color="primary"><SearchIcon style={{marginRight:'10px'}}/>Показать</Button>




        </Form>

    <div className="hrCustom"></div>
        </>

    );
};

export default SupplyForm;