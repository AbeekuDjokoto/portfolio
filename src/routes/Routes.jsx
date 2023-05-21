import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../features/auth";



import { AuthRoutes } from "./AuthRoutes";

const AppRouteList = [
  {
    path: "/",
    element: <AuthLayout />,
    children: AuthRoutes,
  },
];

const AppRouter = createBrowserRouter(AppRouteList);

export { AppRouteList, AppRouter };