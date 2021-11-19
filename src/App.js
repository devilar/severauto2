import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Admin from "./layouts/Admin";
import Registration from "./layouts/Registration";
import EmployerCreate from "./layouts/EmployerCreate";
import Profile from "./layouts/Profile";
import Login from "./layouts/Login";
import ForgotPassword from "./layouts/ForgotPassword";
import loaderStore from "./store/loaderStore";
import Loader from "./components/Ui/Loader/Loader";
import {observer} from "mobx-react-lite";
import Snackbar from "./components/Snackbar/Snackbar";
import AddAlert from "@material-ui/icons/AddAlert";
import mainStore from "./store/mainStore";

const App = observer(() => {





    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/admin" component={Admin} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/create" component={EmployerCreate} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/login" component={Login} />
                    <Route path="/forgotPassword" component={ForgotPassword} />
                    <Redirect from="/" to="/admin/remains" />
                </Switch>
            </BrowserRouter>
            {loaderStore.isActive && <Loader/>}


            <Snackbar
                place="tc"
                color="success"
                icon={AddAlert}
                message="Список успешно загружен"
                open={mainStore.tc}
                closeNotification={() => setTC(false)}
                close
            />


        </>
    );
});

export default App;