import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "../App.css"; 

const Layout = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Unione Footer Component, Please scroll down to see the footer in
          action!
        </p>
      </header>
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
