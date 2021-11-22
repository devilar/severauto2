import Modal from "react-bootstrap/Modal";
import React from "react";

import Grid from '@mui/material/Grid';
import {Button, SvgIcon} from "@mui/material";
import Form from "../Ui/Form/Form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import UploadIcon from '@mui/icons-material/Upload';
import {Input} from "../Ui/Input/Input";
import FileInput from "../Ui/FileInput/FileInput";
import axios from "axios";
import employeesStore from "../../store/employeesStore";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const validateImageType = (value) => {
    if(value) {
        let type = value.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0]
        return SUPPORTED_FORMATS.includes(type)
    }
}



const schema = yup.object().shape({
    modalPeriod:yup.string().required("Обязательное поле"),
    modalStock:yup.string().required("Обязательное поле"),
    fileInput: yup.mixed().required().test('type',(value)=>{
        /*
        return value[0] && (
            value[0].type === "image/jpeg" ||
            value[0].type === "image/bmp" ||
            value[0].type === "image/png" ||
            value[0].type === 'application/pdf' ||
            value[0].type === "application/msword"
        );*/


        console.log('value is', value)
        return true;
    })
});

const LoadDocModel = (props) =>{




    const [stock, setStock] = React.useState('');
    const [period, setPeriod] = React.useState('');

    const submitHandler = (data) => {
        console.log('wow');
        /*
       console.log('test', data.file[0]);
       const {modalPeriod, modalStock} = data;

       const finalData = {modalPeriod,modalStock};
        finalData.file = data.file[0];

       console.log('finalData', finalData);
       */

        /*
        axios.post('https://jsonplaceholder.typicode.com/users', { id:1, title:'sar'},{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })


            .then(res => {
                console.log('res', res);

            })

         */

    }

    const {register, handleSubmit, formState:{ errors }} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })



    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   Выбор файла для загрузки
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{padding:'10px 60px 40px 40px'}}>


                <Form onSubmit={handleSubmit(submitHandler)}>

                    <Grid container xs={12} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>

                        <Grid item xs={6}>
                            <FormControl className='customSelect' variant="standard" fullWidth>
                                <InputLabel id="demo-simple-select-label">Введите отчетный период</InputLabel>
                                <Select
                                    {...register('modalPeriod')}
                                    labelId="modalPeriod"
                                    id="modalPeriod"
                                    value={period}
                                    label="Введите отчетный период"
                                    onChange={(e)=>setPeriod(e.target.value)}
                                    error={!!errors.modalPeriod}
                                    helperText={errors?.modalPeriod?.message}
                                >
                                    <MenuItem value={'butovo'}>Январь</MenuItem>
                                    <MenuItem value={'cherkizovo'}>Февраль</MenuItem>
                                </Select>
                            </FormControl>


                        </Grid>

                        <Grid item xs={6}>
                            <FormControl className='customSelect' variant="standard" fullWidth>
                                <InputLabel id="demo-simple-select-label">Выбрать склад</InputLabel>
                                <Select
                                    {...register('modalStock')}
                                    labelId="modalStock"
                                    id="modalStock"
                                    value={stock}
                                    label="Выбрать склад"
                                    onChange={(e)=>setStock(e.target.value)}
                                    error={!!errors.modalStock}
                                    helperText={errors?.modalStock?.message}
                                >
                                    <MenuItem value={'test22'}>test22</MenuItem>
                                    <MenuItem value={'test33'}>test33</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                    </Grid>

                    <Grid item xs={12} style={{marginTop:'30px'}}>






                        <FileInput

                            {...register('file')}
                        />





                    </Grid>

                    <Button style={{marginTop:'40px'}} type='submit' color="primary">Отправить</Button>




                </Form>




            </Modal.Body>
        </Modal>
    );
}

export default LoadDocModel;