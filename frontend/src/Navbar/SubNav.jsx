import { Box, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HiMenuAlt1, HiLocationMarker } from "react-icons/hi";
import { FaTag, FaBloggerB } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";
import { AiFillGift } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";

export default function SubNav() {
  const [categories, setCategories] = useState(false);
  const [bestSellers, setbestSellers] = useState(false);

  const handleCategories = () => {
    setCategories(!categories);
    setbestSellers(false);
  };

  const handleBestsellers = () => {
    setbestSellers(!bestSellers);
    setCategories(false);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  return (
    <Box
      display={["none", "none", "inline", "inline"]}
      responsive={responsive}
      position={"sticky"}
      zIndex={"9999"}
      top={"0"}
    >
      <Box bgColor={"#FFFFFF"} zIndex={"9999"}>
        <Box
          w={["0", "0", "100%", "80%"]}
          p="17px 0px"
          m="auto"
          mb="0px"
          display="flex"
          justifyContent="space-between"
          cursor={"pointer"}
          alignItems="center"
          bgColor={"#FFFFF"}
        >
          <Box
            onClick={() => handleCategories()}
            cursor="pointer"
            p="7px 17px"
            border="1px solid #a6a6a6"
            rounded="5px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Icon color="#2eb8b8" boxSize="22px" as={HiMenuAlt1} />
            <Text color="#949292" fontWeight={600} m="0">
              Shop By Category
            </Text>
          </Box>
          <Box
            w="80%"
            display="flex"
            gap="5px"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link
              onClick={() => handleBestsellers()}
              cursor="pointer"
              gap="5px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Icon color="#2eb8b8" as={FaTag} />
              <Text
                _hover={{ color: "#2eb8b8" }}
                fontSize="16px"
                color="#333333"
              >
                Best Sellers
              </Text>
            </Link>

            <Link
              display="flex"
              gap="5px"
              justifyContent="space-between"
              alignItems="center"
            >
              <Icon color="#666666" as={RiCoupon3Fill} />
              <Text
                _hover={{ color: "#2eb8b8" }}
                fontSize="16px"
                color="#333333"
              >
                Brands
              </Text>
            </Link>

            <Link
              display="flex"
              gap="5px"
              justifyContent="space-between"
              alignItems="center"
            >
              <Icon color="#666666" as={RiCoupon3Fill} />
              <Text
                _hover={{ color: "#2eb8b8" }}
                fontSize="16px"
                color="#333333"
              >
                Deals
              </Text>
            </Link>
            <Link
              display="flex"
              gap="5px"
              justifyContent="space-between"
              alignItems="center"
            >
              <Icon color="#666666" as={FaBloggerB} />
              <Text
                _hover={{ color: "#2eb8b8" }}
                fontSize="16px"
                color="#333333"
              >
                Blogs
              </Text>
            </Link>
            <Link
              display="flex"
              gap="5px"
              justifyContent="space-between"
              alignItems="center"
            >
              <Icon color="#666666" as={AiFillGift} />
              <Text
                _hover={{ color: "#2eb8b8" }}
                fontSize="16px"
                color="#333333"
              >
                Gift Card
              </Text>
            </Link>
            <Link
              display="flex"
              gap="5px"
              justifyContent="space-between"
              alignItems="center"
            >
              <Icon color="#666666" as={BsFillChatDotsFill} />
              <Text
                _hover={{ color: "#2eb8b8" }}
                fontSize="16px"
                color="#333333"
              >
                Customer Support
              </Text>
            </Link>
            <Link
              display="flex"
              gap="5px"
              justifyContent="space-between"
              alignItems="center"
            >
              <Icon color="#666666" as={HiLocationMarker} />
              <Text
                _hover={{ color: "#2eb8b8" }}
                fontSize="16px"
                color="#333333"
              >
                Store Locator
              </Text>
            </Link>
          </Box>
        </Box>

        <Box
          display={categories ? "block" : "none"}
          zIndex={"9999"}
          position={"absolute"}
          marginLeft={"20%"}
        >
          <Box
            width={"max"}
            m="auto"
            zIndex={"9999"}
            display="flex"
            justifyContent="space-between"
            lineHeight="30px"
            bgColor={"white"}
            textAlign="left"
          >
            <Box w="23%" bg="#e6f2ff" lineHeight="40px">
              <Box bgColor={"#ffffff"} p="10px">
                <Link>Sports Nutrition</Link>
              </Box>
              <Box _hover={{ color: "#b3ebeb", bg: "white" }} p="10px">
                <Link>Vitamins & Supplements</Link>
              </Box>
              <Box _hover={{ color: "#b3ebeb", bg: "white" }} p="10px">
                <Link>Ayurveda & Herbs</Link>
              </Box>
              <Box _hover={{ color: "#b3ebeb", bg: "white" }} p="10px">
                <Link>Health Food & Drinks</Link>
              </Box>
              <Box _hover={{ color: "#b3ebeb", bg: "white" }} p="10px">
                <Link>Fitness</Link>
              </Box>
              <Box _hover={{ color: "#b3ebeb", bg: "white" }} p="10px">
                <Link>Wellness</Link>
              </Box>
            </Box>
            <Box w="75%" fontSize="15px">
              <Box
                className="sportsnutritiondiv"
                display="flex"
                justifyContent="space-between"
              >
                <Box w="20%">
                  <Link
                    to="/product"
                    _hover={{ color: "#b3ebeb" }}
                    fontWeight="bold"
                  >
                    Proteins
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Whey Proteins
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Beginners Whey Protein
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Whey Protein Isolate
                  </Link>
                  <br />
                  <Link _hover={{ color: "#b3ebeb" }}>Raw Whey Proteins</Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Plant Proteins
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Protein for Women
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Protein Blends
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Casein Proteins
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Soy Proteins
                  </Link>
                  <br />
                </Box>
                <Box w="19%">
                  <Link
                    to="/product"
                    _hover={{ color: "#b3ebeb" }}
                    fontWeight="bold"
                  >
                    Gainers
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Weight Gainers
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Mass Gainers
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Herbal Weight Gainers
                  </Link>
                  <br />
                </Box>
                <Box w="19%">
                  <Link
                    to="/product"
                    _hover={{ color: "#b3ebeb" }}
                    fontWeight="bold"
                  >
                    Protein Foods
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Peanut Butter
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Muesli
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Protein Shakes
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Oats
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Cereals
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Granola
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Protein Bars
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Protein Water
                  </Link>
                  <br />
                </Box>
                <Box w="19%">
                  <Link to="/product" fontWeight="bold">
                    Pre/Post Workout
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Pre-Workout
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Creatine
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    BCAAs
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Carb Blends
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Electrolytes
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    EAA
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Nitric Oxide
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Other Supports
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Citrulline Malate
                  </Link>
                  <br />
                </Box>
                <Box w="20%">
                  <Link href="" _hover={{ color: "#b3ebeb" }} fontWeight="bold">
                    Workout Essentials
                  </Link>
                  <br />
                  <Link href="" _hover={{ color: "#b3ebeb" }}>
                    Fat Burners
                  </Link>
                  <br />
                  <Link href="" _hover={{ color: "#b3ebeb" }}>
                    Consult Services
                  </Link>
                  <br />
                  <Link href="" _hover={{ color: "#b3ebeb" }}>
                    L Carnitine
                  </Link>
                  <br />
                  <Link href="" _hover={{ color: "#b3ebeb" }}>
                    Multivitamins for Bodybuilding
                  </Link>
                  <br />
                  <Link href="" _hover={{ color: "#b3ebeb" }}>
                    Pre Hormone
                  </Link>
                  <br />
                  <Link href="" _hover={{ color: "#b3ebeb" }}>
                    ZMA
                  </Link>
                  <br />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          display={bestSellers ? "block" : "none"}
          zIndex={"9999"}
          position={"absolute"}
          marginLeft={"35%"}
        >
          <Box
            w="450px"
            marginLeft={"25%"}
            bgColor={"white"}
            display="flex"
            justifyContent="space-between"
            lineHeight="26px"
            textAlign="left"
          >
            <Box w="40%" bg="#e6f2ff" lineHeight="35px">
              <Box _hover={{ color: "#b3ebeb", bg: "white" }} p="10px">
                <Link>Sports Nutrition</Link>
              </Box>
              <Box _hover={{ color: "#b3ebeb", bg: "white" }} p="10px">
                <Link>Health Nutrition</Link>
              </Box>
              <Box _hover={{ color: "#b3ebeb", bg: "white" }} p="10px">
                <Link>Fitness</Link>
              </Box>
              <Box _hover={{ color: "#b3ebeb", bg: "white" }} p="10px">
                <Link>Wellness</Link>
              </Box>
            </Box>
            <Box w="58%" fontSize="15px" paddingLeft={"10px"} height={"400px"}>
              <Box
                className="sportsnutritiondiv"
                display="flex"
                justifyContent="space-between"
              >
                <Box lineHeight={"30px"}>
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Protein Powder
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Whey Protein
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Beginners Whey Protein
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Whey Protein Isolate
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Mass Gainer
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    BCAA
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Fat Burners
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Pre Workout
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Creatine
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Protein Bars
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Weight Gainer
                  </Link>
                  <br />
                  <Link to="/product" _hover={{ color: "#b3ebeb" }}>
                    Carb Blends
                  </Link>
                  <br />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
