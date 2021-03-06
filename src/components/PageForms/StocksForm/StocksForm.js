import React, {useState} from 'react';
import Form from "../../Ui/Form/Form";
import * as yup from "yup";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../../Ui/CustomButtons/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {Alert} from "@mui/material";
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';


import MockAdapter from 'axios-mock-adapter';
import axios from "axios";
import {stockMock} from "../../../mock";
import loaderStore from "../../../store/loaderStore";
import AddAlert from "@material-ui/icons/AddAlert";
import Snackbar from "../../Snackbar/Snackbar";
import remainsStore from "../../../store/remainsStore";
import stocksStore from "../../../store/stocksStore";
import mainStore from "../../../store/mainStore";
export const dataAPI = axios.create();
let mock = new MockAdapter(dataAPI);
mock.onGet("/stock").reply(200, {
    stock:stockMock
});


const schema = yup.object().shape({
    itemStock:yup.string().min(6).required('Confirm Password is required'),
    stockStatus:yup.string().min(6).required('test'),
});

const StocksForm = () => {

    const [status, setStatus] = React.useState('');
    const [stock, setStock] = React.useState('');


    const[message,setMessage] = useState('');

    const submitHandler = () => {
        loaderStore.enableLoader();
        dataAPI.get(`/stock`)
            .then(res => {
                setTimeout(()=>{
                    stocksStore.loadResult(res.data.stock);
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
                    <FormControl className='customSelect' variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-label">?????????????? ??????????</InputLabel>
                        <Select
                            {...register('itemStock')}
                            labelId="itemStock"
                            id="itemStock"
                            value={stock}
                            label="?????????????? ??????????"
                            onChange={(e)=>setStock(e.target.value)}
                            error={!!errors.itemStock}
                            helperText={errors?.itemStock?.message}
                        >
                            <MenuItem value={'butovo'}>????????????</MenuItem>
                            <MenuItem value={'cherkizovo'}>??????????????????</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>

                <Grid item xs={6}>

                    <FormControl className='customSelect' variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-label">????????????</InputLabel>
                        <Select
                            {...register('stockStatus')}
                            labelId="stockStatus"
                            id="stockStatus"
                            value={status}
                            label="????????????"
                            onChange={(e)=>setStatus(e.target.value)}
                            error={!!errors.stockStatus}
                            helperText={errors?.stockStatus?.message}
                        >
                            <MenuItem value={'active'}>??????????????</MenuItem>
                            <MenuItem value={'notActive'}>??????????????????</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>


            </Grid>







            <Button style={{marginTop:'40px'}} type='submit' color="primary"><SearchIcon style={{marginRight:'10px'}}/>????????????????</Button>


        </Form>
    <div className="hrCustom"></div>
    </>
    );
};

export default StocksForm;