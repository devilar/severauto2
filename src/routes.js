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
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GroupIcon from '@mui/icons-material/Group';
import Remains from "views/Remains/Remains.js";
import Supply from "./views/Supply/Supply";
import Stocks from "./views/Stocks/Stocks";
import Employees from "./views/Employees/Employees";
import Contracts from "./views/Contracts/Contracts";
import MenuBookIcon from '@mui/icons-material/MenuBook';

const dashboardRoutes = [

  {
    path: "/remains",
    name: "Остатки",
    rtlName: "طباعة",
    icon: ContentPasteIcon,
    component: Remains,
    layout: "/admin",
  },
  {
    path: "/supply",
    name: "Поставки",
    rtlName: "طباعة",
    icon: LocalShippingIcon,
    component: Supply,
    layout: "/admin",
  },

  {
    path: "/stocks",
    name: "Склады",
    rtlName: "طباعة",
    icon: ApartmentIcon,
    component: Stocks,
    layout: "/admin",
  },

  {
    path: "/employees",
    name: "Сотрудники",
    rtlName: "طباعة",
    icon: GroupIcon,
    component: Employees,
    layout: "/admin",
  },

  {
    path: "/contracts",
    name: "Договоры",
    rtlName: "طباعة",
    icon: MenuBookIcon,
    component: Contracts,
    layout: "/admin",
  },


];

export default dashboardRoutes;
