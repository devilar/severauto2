import React, {useState} from 'react';
import Form from "../../Form/Form";
import * as yup from "yup";
import axios from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../../CustomButtons/Button";
import GridContainer from "../../Grid/GridContainer";
import GridItem from "../../Grid/GridItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


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
        <Form onSubmit={handleSubmit(submitHandler)}>

            <GridContainer>
                <GridItem xs="6">

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Выбрать склад</InputLabel>
                        <Select
                            {...register('itemStock')}
                            labelId="itemStock"
                            id="itemStock"
                            value={stock}
                            label="itemStock"
                            onChange={(e)=>setStock(e.target.value)}
                            error={!!errors.itemStock}
                            helperText={errors?.itemStock?.message}
                        >
                            <MenuItem value={'butovo'}>Бутово</MenuItem>
                            <MenuItem value={'cherkizovo'}>Черкизово</MenuItem>
                        </Select>
                    </FormControl>

                </GridItem>

                <GridItem xs="6">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Статус</InputLabel>
                        <Select
                            {...register('stockStatus')}
                            labelId="stockStatus"
                            id="stockStatus"
                            value={status}
                            label="stockStatus"
                            onChange={(e)=>setStatus(e.target.value)}
                            error={!!errors.stockStatus}
                            helperText={errors?.stockStatus?.message}
                        >
                            <MenuItem value={'active'}>Активен</MenuItem>
                            <MenuItem value={'notActive'}>Неактивен</MenuItem>
                        </Select>
                    </FormControl>
                </GridItem>


            </GridContainer>







            <Button style={{marginTop:'40px'}} type='submit' color="primary">Показать</Button>


        </Form>
    );
};

export default StocksForm;