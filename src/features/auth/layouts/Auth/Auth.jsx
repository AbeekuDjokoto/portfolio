import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./Auth.module.scss";
import { LeftLayout } from "../../components";

export const AuthLayout = () => {
  return (
    <div className={classes.container}>
      <div className={classes.fixedContent}>
        <LeftLayout />
      </div>
      <div className={classes.scrollableContent}>
        <Outlet />
      </div>
    </div>
  );
};
