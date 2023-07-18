import {
  Badge,
  Box,
  Flex,
  Image,
  Text,
  useToast,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SlHeart } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
const initialValue = 1;
export default function ProductCard({ data }) {
  const toast = useToast();

  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  const handleCart = () => {
    data.quantity = 1;
    console.log(data);
    cartData.push(data);
    localStorage.setItem("cart", JSON.stringify(cartData));
    toast({
      description: "Product added successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    console.log(data);
  };

  return (
    <Box
      h="450px"
      w="284px"
      borderRadius={"10px"}
      boxShadow={
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      }
      _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}
    >
      <Box
        borderRadius={"10px"}
        h="450px"
        w="284px"
        position={"relative"}
        cursor={"pointer"}
      >
        <Box>
          <Image
            w="70%"
            h="198px"
            m="auto"
            marginTop={"40px"}
            src={data.image}
            alt={data.name}
          />
          <Box position="absolute" top={"-15px"} right={"10px"} fontSize="30px">
            <SlHeart />
          </Box>
        </Box>
        <Box
          borderBottomRadius={"10px"}
          border={"1px solid #cfccccff"}
          padding={"10px"}
          height={"212px"}
        >
          <p style={{ fontSize: "13px", textAlign: "left" }}>
            <span
              style={{
                backgroundColor: "#1eaaeb",
                width: "auto",
                color: "white",
                padding: "2px 5px 2px 5px",
                borderRadius: "3px",
                marginRight: "10px",
              }}
            >
              {data.star_rating + "★"}
            </span>
            {data.flexing_reviews}
          </p>
          <Box>
            <h3
              style={{
                color: "#1C1C28",
                textAlign: "left",
                fontWeight: "500",
                lineHeight: "28px",
                marginTop: "5px",
                maxHeight: "56px",
                overflow: "hidden",
              }}
            >
              {data.name}
            </h3>
          </Box>
          <p
            style={{
              color: "#1C1C28",
              textAlign: "left",
              fontWeight: "500",
              lineHeight: "28px",
              marginTop: "5px",
              fontSize: "16px",
            }}
          >
            ₹ {data.price1}{" "}
            <span
              style={{
                textDecoration: "line-through",
                marginLeft: "20px",
                color: "grey",
              }}
            >
              ₹ {data.price2}
            </span>{" "}
            <span
              style={{ color: "green", marginLeft: "20px", fontSize: "13px" }}
            >
              {data.discount}% off
            </span>
          </p>
          <Button
            gap={"5px"}
            color="orange"
            border={"1px solid orange"}
            width="92%"
            padding={"10px"}
            bgColor="#faefe5"
            marginBottom={"15px"}
            marginTop="30px"
            _hover={{ bgColor: "orange", color: "white" }}
            onClick={handleCart}
          >
            <FiShoppingCart /> Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
