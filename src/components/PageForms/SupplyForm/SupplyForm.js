import React, {useState} from 'react';
import Form from "../../Form/Form";
import {Input} from "../../Input/Input";
import * as yup from "yup";
import axios from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../../CustomButtons/Button";
import Grid from '@mui/material/Grid';


const schema = yup.object().shape({
    contractNumber:yup.string().min(3).max(10).required("Обязательное поле2"),
    itemRN:yup.string().min(3).max(10).required("Обязательное поле"),
    itemPeriod:yup.string().min(6).max(20).required("Обязательное поле"),
    itemStock:yup.string().min(6).required('Confirm Password is required')
});

const SupplyForm = () => {

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


        <Form onSubmit={handleSubmit(submitHandler)}>

            <Grid container xs={8} rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>

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
                        {...register('itemPeriod')}
                        type="text"
                        id="itemPeriod"
                        label="Введите отчетный период"
                        name="itemPeriod"
                        error={!!errors.itemPeriod}
                        helperText={errors?.itemPeriod?.message}/>
                </Grid>

                <Grid item xs={6}>
                    <Input
                        {...register('itemStock')}
                        type="text"
                        id="itemStock"
                        label="Введите склад"
                        name="itemStock"
                        error={!!errors.itemStock}
                        helperText={errors?.itemStock?.message}/>
                </Grid>

            </Grid>







            <Button style={{marginTop:'40px'}} type='submit' color="primary">Показать</Button>

            <div className="hrCustom"></div>


        </Form>
    );
};

export default SupplyForm;