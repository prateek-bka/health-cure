import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import logo from "./hklogo.png";
import footer from "./footer.png";
export default function Footer() {
  return (
    <Box bgColor={"#0D2122"} width={"100%"} padding={"40px"}>
      <Box w={["90%"]} m="auto">
        <Image src={logo} />
      </Box>

      <Box
        display={["block", "flex", "flex"]}
        justifyContent={"space-evenly"}
        cursor={"pointer"}
        width={["90%", "100%", "90%"]}
        margin={"auto"}
        marginTop={"30px"}
        marginBottom={"20px"}
        fontSize={"13px"}
      >
        <Box
          color={"white"}
          width={["100%", "25%", "15%"]}
          textAlign={"left"}
          border={"1px solid #0D2122"}
          lineHeight={"30px"}
        >
          <Text fontSize={"16px"} fontWeight={"600"} lineHeight={"50px"}>
            HealthKart
          </Text>
          <Text color={"#b8b7b7"}>About Us</Text>
          <Text color={"#b8b7b7"}>Contact Us</Text>
          <Text color={"#b8b7b7"}>Refer & Earn</Text>
          <Text color={"#b8b7b7"}>Loyalty</Text>
          <Text color={"#b8b7b7"}>Program</Text>
          <Text color={"#b8b7b7"}>Blogs</Text>
          <Text color={"#b8b7b7"}>Brand</Text>
          <Text color={"#b8b7b7"}>Carrers</Text>
        </Box>
        <Box
          color={"white"}
          width={["100%", "25%", "15%"]}
          textAlign={"left"}
          border={"1px solid #0D2122"}
          lineHeight={"30px"}
        >
          <Text fontSize={"16px"} fontWeight={"600"} lineHeight={"50px"}>
            Brands
          </Text>
          <Text color={"#b8b7b7"}>MuscleBlaze</Text>
          <Text color={"#b8b7b7"}>Fit Foods</Text>
          <Text color={"#b8b7b7"}>HK Vitals</Text>
          <Text color={"#b8b7b7"}>True Basics</Text>
          <Text color={"#b8b7b7"}>bGREEN</Text>
        </Box>
        <Box
          color={"white"}
          width={["100%", "25%", "15%"]}
          textAlign={"left"}
          border={"1px solid #0D2122"}
          lineHeight={"30px"}
        >
          <Text fontSize={"16px"} fontWeight={"600"} lineHeight={"50px"}>
            Health & Fitness
          </Text>
          <Text color={"#b8b7b7"}>Hair & Skin Care</Text>
          <Text color={"#b8b7b7"}>Sports Nutrition</Text>
          <Text color={"#b8b7b7"}>Vitamins & Supplements</Text>
          <Text color={"#b8b7b7"}>Ayurveda & Herbs</Text>
          <Text color={"#b8b7b7"}>Fitness</Text>
          <Text color={"#b8b7b7"}>Health Food</Text>
          <Text color={"#b8b7b7"}>Wellness</Text>
        </Box>

        <Box
          color={"white"}
          width={["100%", "25%", "15%"]}
          textAlign={"left"}
          border={"1px solid #0D2122"}
          lineHeight={"30px"}
        >
          <Text fontSize={"16px"} fontWeight={"600"} lineHeight={"50px"}>
            Quick Links
          </Text>
          <Text color={"#b8b7b7"}>My Account</Text>
          <Text color={"#b8b7b7"}>Track you order</Text>
          <Text color={"#b8b7b7"}>Store Locator</Text>
          <Text color={"#b8b7b7"}>HK Cash</Text>
          <Text color={"#b8b7b7"}>HK Coupons</Text>
          <Text color={"#b8b7b7"}>FAQs</Text>
          <Text color={"#b8b7b7"}>Sell On HealthKart</Text>
        </Box>

        <Box
          color={"white"}
          width={["100%", "25%", "15%"]}
          textAlign={"left"}
          lineHeight={"30px"}
          border={"1px solid #0D2122"}
        >
          <Text fontSize={"16px"} fontWeight={"600"} lineHeight={"50px"}>
            Contact Us
          </Text>
          <Text color={"#b8b7b7"}>care@healthkart.com</Text>
          <Text color={"#b8b7b7"}>0124-4616444</Text>
          <Text color={"#b8b7b7"}>
            The Presidency Tower, Tower-B, 2nd Floor, 46/4, Mehrauli Rd opp.
            government girls college, Anamika Enclave, Sector 14, Gurugram,
            Haryana
          </Text>
        </Box>

        <Box display={["none", "none", "block"]}>
          <Image src={footer} />
        </Box>
      </Box>
      <hr />

      <Box
        display={["none", "flex", "flex"]}
        width={"100%"}
        m="auto"
        justifyContent={"space-between"}
        color={"#b8b7b7"}
        marginTop="10px"
      >
        <Text textAlign={"left"}>
          Copyright © 2023, HealthKart.com, or its affiliates
        </Text>
        <Text textAlign={"right"}>
          Terms & Conditions | Delivery Policy | Privacy Policy | Disclaimer |
          Returns Policy
        </Text>
      </Box>
    </Box>
  );
}
