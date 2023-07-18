import { Box, Text, Heading, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter";
import Navbar from "../Navbar/Navbar";
import SubNav from "../Navbar/SubNav";
import Footer from "../Footer/Footer";

const Products = () => {
  return (
    <>
      <Navbar />
      <SubNav />
      <Box display={["block", "block", "flex"]} w="100%" marginTop={"40px"}>
        <Box width={["100%", "100%", "30%"]}>
          <ProductFilter />
        </Box>
        <Box width={["100%", "100%", "70%"]}>
          <ProductList />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Products;
