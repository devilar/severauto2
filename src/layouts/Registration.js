import React, {useState} from "react";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "components/Sidebar/Sidebar.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import routes from "routes.js";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import Form from './../components/Form/Form';
import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";
import CardBody from "../components/Card/CardBody";
import {Input} from "../components/Input/Input";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from 'axios';

let ps;

const schema = yup.object().shape({
    login:yup.string().min(3).max(10).required("Обязательное поле"),
    password:yup.string().min(6).max(20).required("Обязательное поле"),
    repeatPassword:yup.string().min(6).required('Confirm Password is required')
        .oneOf([yup.ref('password')], 'Passwords must match')
});


const useStyles = makeStyles(styles);

export default function Registration({ ...rest }) {

    const[message,setMessage] = useState('');

    const submitHandler = (data) => {
        console.log('data', data);
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

    // styles
    const classes = useStyles();
    // ref to help us initialize PerfectScrollbar on windows devices
    const mainPanel = React.createRef();
    // states and functions
    const image = bgImage;
    const color = "blue";
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const resizeFunction = () => {
        if (window.innerWidth >= 960) {
            setMobileOpen(false);
        }
    };
    // initialize and destroy the PerfectScrollbar plugin
    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(mainPanel.current, {
                suppressScrollX: true,
                suppressScrollY: false,
            });
            document.body.style.overflow = "hidden";
        }
        window.addEventListener("resize", resizeFunction);
        // Specify how to clean up after this effect:
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                ps.destroy();
            }
            window.removeEventListener("resize", resizeFunction);
        };
    }, [mainPanel]);


    return (
        <div className={classes.wrapper}>
            <Sidebar
                routes={routes}
                logoText={"Creative Tim"}
                logo={logo}
                image={image}
                handleDrawerToggle={handleDrawerToggle}
                open={mobileOpen}
                color={color}
                {...rest}
            />
            <div className={classes.mainPanel} ref={mainPanel}>



                    <Card>
                        <CardHeader color="primary"> <h4 className={classes.cardTitleWhite}>Material Dashboard Heading</h4>
                         </CardHeader>

                        <CardBody>



                            <Form onSubmit={handleSubmit(submitHandler)}>

                                <Input
                                    {...register('login')}
                                    type="text"
                                    id="login"
                                    label="Введите логин"
                                    name="login"
                                    error={!!errors.login}
                                    helperText={errors?.login?.message}
                                    tooltip='test test!'
                                />

                            </Form>



                        </CardBody>


                    </Card>

            </div>
        </div>
    );
}
