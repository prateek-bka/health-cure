import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login_Signup/Pages/Login";
import Signup from "../Login_Signup/Pages/Signup";
import Home from "../Homepage/Home";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Page/Checkout";
import Products from "../Components/Products";
import Admin from "../admin/Admin";

const Mainroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default Mainroutes;
