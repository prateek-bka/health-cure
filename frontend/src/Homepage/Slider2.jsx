import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import "./css/Slider1.css";
import { TbSquareDot } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { SlHeart } from "react-icons/sl";

function Slider2() {
  const items = [
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl:
        "https://img4.hkrtcdn.com/11855/prd_1185493-MuscleBlaze-Mass-Gainer-XXL-2.2-lb-Chocolate_c_s.jpg",
      price: "₹ 1699",
    },
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl:
        "https://img1.hkrtcdn.com/19806/prd_1980590-Labrada-Muscle-Mass-Gainer-11-lb-Chocolate_c_s.jpg",
      price: "₹ 1699",
    },
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl:
        "https://img4.hkrtcdn.com/12083/prd_1208273-MuscleBlaze-Mass-Gainer-XXL-4.4-lb-Chocolate_c_s.jpg",
      price: "₹ 1699",
    },
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl:
        "https://img9.hkrtcdn.com/19806/prd_1980598-Labrada-Muscle-Mass-Gainer-2.2-lb-Chocolate_c_s.jpg",
      price: "₹ 1699",
    },
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl:
        "https://img1.hkrtcdn.com/19806/prd_1980590-Labrada-Muscle-Mass-Gainer-11-lb-Chocolate_c_s.jpg",
      price: "₹ 1699",
    },
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl:
        "https://img9.hkrtcdn.com/19806/prd_1980598-Labrada-Muscle-Mass-Gainer-2.2-lb-Chocolate_c_s.jpg",
      price: "₹ 1699",
    },
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl:
        "https://img4.hkrtcdn.com/11855/prd_1185493-MuscleBlaze-Mass-Gainer-XXL-2.2-lb-Chocolate_c_s.jpg",
      price: "₹ 1699",
    },
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl:
        "https://img9.hkrtcdn.com/19806/prd_1980598-Labrada-Muscle-Mass-Gainer-2.2-lb-Chocolate_c_s.jpg",
      price: "₹ 1699",
    },
  ];

  return (
    <Box>
      <Box className="scroll-wrap">
        {items.map((item, index) => (
          <Box
            key={index}
            border="1px solid rgba(136, 133, 133, 0.781)"
            borderRadius={"10px"}
            className="item"
          >
            <img src={item.imageUrl} alt={item.title} />
            <p style={{ fontSize: "13px" }}>
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
                5.0 ★
              </span>{" "}
              2 reviews
            </p>
            <Box
              position="absolute"
              top={"10px"}
              right={"10px"}
              fontSize="30px"
            >
              <SlHeart />
            </Box>
            <h3>{item.title}</h3>
            <h3>{item.description}</h3>
            <p>
              {item.price}{" "}
              <span
                style={{
                  textDecoration: "line-through",
                  marginLeft: "20px",
                  color: "grey",
                }}
              >
                ₹ 799
              </span>{" "}
              <span
                style={{ color: "green", marginLeft: "20px", fontSize: "13px" }}
              >
                15% off
              </span>
            </p>
            <Button
              gap={"5px"}
              color="orange"
              border={"1px solid orange"}
              width="88%"
              padding={"8px"}
              bgColor="#faefe5"
              marginBottom={"15px"}
              marginTop="20px"
              _hover={{ bgColor: "orange", color: "white" }}
            >
              <FiShoppingCart /> Add to Cart
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Slider2;
