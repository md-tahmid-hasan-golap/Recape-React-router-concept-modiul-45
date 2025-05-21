import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import "./Root.css";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="main-container">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
