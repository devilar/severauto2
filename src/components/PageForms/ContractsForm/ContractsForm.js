import React, {useState} from 'react';
import Form from "../../Form/Form";
import {Input} from "../../Input/Input";
import * as yup from "yup";
import axios from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../../CustomButtons/Button";
import Grid from '@mui/material/Grid';
import {Alert} from "@mui/material";


const schema = yup.object().shape({
    itemRN:yup.string().min(3).max(10).required("Обязательное поле"),
    itemPeriod:yup.string().min(6).max(20).required("Обязательное поле"),
    offerOrConctractRn:yup.string().min(6).required('Обязательное поле')
});

const ContractsForm = () => {

    const[message,setMessage] = useState('');

    const submitHandler = (data) => {
        console.log('data SUBMITHANDLER', data);
        axios.post(`https://jsonplaceholder.typicode.com/users`, { id:1, title:'sar'})
            .then(res => {
                setMessage('Ошибка №68', res);
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
                        {...register('itemRN')}
                        type="text"
                        id="itemRN"
                        label="Введите RN Товара"
                        name="itemRN"
                        error={!!errors.itemRN}
                        helperText={errors?.itemRN?.message}/>
                </Grid>
                <Grid item xs={6}>

                    <Input
                        {...register('offerOrConctractRn')}
                        type="text"
                        id="offerOrConctractRn"
                        label="Введите RN Счета или номер договора"
                        name="offerOrConctractRn"
                        error={!!errors.offerOrConctractRn}
                        helperText={errors?.offerOrConctractRn?.message}/>

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
            </Grid>







            <Button style={{marginTop:'40px'}} type='submit' color="primary">Показать</Button>


        </Form>
    <div className="hrCustom"></div>
        </>
    );
};

export default ContractsForm;