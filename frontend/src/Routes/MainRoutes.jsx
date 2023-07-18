import React from "react";
import { Routes, Route } from "react-router-dom";
import Proteins from "../Product-Pages/Proteins/Proteins";

import SingleProduct from "../ProductDetails/SingleProduct";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<Proteins />}></Route>

        <Route path="/products/:id" element={<SingleProduct />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
