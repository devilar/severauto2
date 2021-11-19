/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// core components
import Admin from "layouts/Admin.js";
import Registration from "layouts/Registration.js";
import RTL from "layouts/RTL.js";
import './index.scss';
import "assets/css/material-dashboard-react.css?v=1.10.0";
import Login from "./layouts/Login";
import Profile from "./layouts/Profile";
import ForgotPassword from "./layouts/ForgotPassword";
import EmployerCreate from "./layouts/EmployerCreate";
import loaderStore from "./store/loaderStore";
import Loader from "./components/Ui/Loader/Loader";


ReactDOM.render(
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
    ,
  document.getElementById("root")
);
