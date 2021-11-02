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
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
import Language from "@material-ui/icons/Language";
import DashboardPage from "views/Dashboard/Dashboard.js";
import GroupIcon from '@mui/icons-material/Group';
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Remains from "views/Remains/Remains.js";
import Icons from "views/Icons/Icons.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import RTLPage from "views/RTLPage/RTLPage.js";
import Supply from "./views/Supply/Supply";
import Stocks from "./views/Stocks/Stocks";
import Employees from "./views/Employees/Employees";
import Contracts from "./views/Contracts/Contracts";
import MenuBookIcon from '@mui/icons-material/MenuBook';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
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

  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl",
  }
];

export default dashboardRoutes;
