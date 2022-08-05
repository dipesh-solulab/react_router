import React from "react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
const HeaderComan = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HeaderComan;
