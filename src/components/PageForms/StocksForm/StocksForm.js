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

    const showNotification = (place) => {
        switch (place) {
            case "tc":
                if (!tc) {
                    setTC(true);
                    setTimeout( () => {
                        setTC(false);
                    }, 6000);
                }
                break;

            default:
                break;
        }
    };
    const [tc, setTC] = React.useState(false);

    const [status, setStatus] = React.useState('');
    const [stock, setStock] = React.useState('');


    const[message,setMessage] = useState('');

    const submitHandler = () => {
        loaderStore.enableLoader();
        dataAPI.get(`/stock`)
            .then(res => {
                setTimeout(()=>{
                    console.log("RESU is", res.data.stock);
                    stocksStore.loadResult(res.data.stock);
                    loaderStore.disableLoader();
                    showNotification("tc");
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
            <Snackbar
                place="tc"
                color="success"
                icon={AddAlert}
                message="Список успешно загружен"
                open={tc}
                closeNotification={() => setTC(false)}
                close
            />
    </>
    );
};

export default StocksForm;