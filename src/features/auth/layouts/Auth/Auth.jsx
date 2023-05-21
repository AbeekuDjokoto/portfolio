import React from "react";
import { Outlet } from "react-router-dom";

// import { LayoutLeft } from "../../components";
import styles from "./Auth.module.scss";
const { root, leftPanel, rightPanel } = styles;

export const AuthLayout = () => {
  return (
    <div className={root}>
      <div className={leftPanel}>
        {/* <LayoutLeft /> */}
      </div>
      <div className={rightPanel}>
        <Outlet />
      </div>
    </div>
  );
};