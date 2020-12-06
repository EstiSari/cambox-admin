import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import { DefaultLogin } from "./layouts";

// Route Views
import Dashboard from "./views/Dashboard";
import Customers from "./views/Customers";
import Products from "./views/Products";
import Errors from "./views/Errors";
import Transaction from "./views/Transaction";
import Login from "./views/Login";
import { App } from "./App";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLogin,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/login",
    layout: DefaultLogin,
    component: App
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/customers",
    layout: DefaultLayout,
    component: Customers
  },
  {
    path: "/products",
    layout: DefaultLayout,
    component: Products
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/transaction",
    layout: DefaultLayout,
    component: Transaction
  },
 
];
