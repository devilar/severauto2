import React, {useState} from 'react';
import Form from "../../Ui/Form/Form";
import {Input} from "../../Ui/Input/Input";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../../Ui/CustomButtons/Button";
import Grid from '@mui/material/Grid';
import {Alert} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
export const dataAPI = axios.create();
import MockAdapter from 'axios-mock-adapter';
import loaderStore from "../../../store/loaderStore";
import {contractsInnerMock} from "../../../mock";
import Snackbar from "../../Snackbar/Snackbar";
import AddAlert from "@material-ui/icons/AddAlert";
import contractsStore from "../../../store/contractsStore";
import mainStore from "../../../store/mainStore";
let mock = new MockAdapter(dataAPI);
mock.onGet("/getContracts").reply(200, {
    contracts:contractsInnerMock
});
const schema = yup.object().shape({
    itemRN:yup.string().min(3).max(10).required("Обязательное поле"),
    itemPeriod:yup.string().min(6).max(20).required("Обязательное поле"),
    offerOrConctractRn:yup.string().min(6).required('Обязательное поле')
});

const ContractsForm = () => {

    const[message,setMessage] = useState('');

    const submitHandler = () => {
        loaderStore.enableLoader();
        dataAPI.get("/getContracts").then((res) => {
            setTimeout(()=>{
                contractsStore.loadResult(res.data.contracts)
                loaderStore.disableLoader();
                mainStore.showNotification("tc");
            },1000)
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
            <Button style={{marginTop:'40px'}} type='submit' color="primary"><SearchIcon style={{marginRight:'10px'}}/>Показать</Button>
        </Form>
    <div className="hrCustom"></div>
            <Snackbar
                place="tc"
                color="success"
                icon={AddAlert}
                message="Список успешно загружен"
                open={mainStore.tc}
                closeNotification={() => mainStore.disableTC()}
                close
            />
        </>
    );
};

export default ContractsForm;