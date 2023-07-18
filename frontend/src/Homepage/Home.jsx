import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import SubNav from "../Navbar/SubNav";
import Slider1 from "./Slider1";
import TopSlider from "./TopSlider";
import image1 from "./Poster/image1.jpg";
import image2 from "./Poster/image2.jpg";
import image3 from "./Poster/image3.jpg";
import image4 from "./Poster/image4.jpg";
import image5 from "./Poster/image5.jpg";
import image6 from "./Poster/image6.jpg";
import image7 from "./Poster/image7.jpg";
import image8 from "./Poster/image8.jpg";
import image9 from "./Poster/image9.jpg";
import image10 from "./Poster/image10.jpg";
import image11 from "./Poster/image11.jpg";
import image12 from "./Poster/image12.jpg";
import first from "./Brand/first.jpg";
import second from "./Brand/second.jpg";
import third from "./Brand/third.jpg";
import fourth from "./Brand/fourth.jpg";
import fifth from "./Brand/first.jpg";
import sixth from "./Brand/sixth.jpg";
import seventh from "./Brand/seventh.jpg";
import eigth from "./Brand/eigth.jpg";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import MiddleSlider from "./MiddleSlider";
import Slider4 from "./Slider4";
import BottomSlider from "./BottomSlider";
import Slider5 from "./Slider5";
import Footer from "../Footer/Footer";

export default function Home() {
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
    <>
      <Navbar />
      <SubNav />
      <Box
        bgColor={"#e4f7ff"}
        width={"100%"}
        display={"block"}
        textAlign="center"
        p="10px"
      >
        India's Largest D2C Nutrition Platform
      </Box>
      <Box responsive={responsive}>
        <TopSlider responsive={responsive} />
      </Box>

      <Box width={"85%"} cursor="pointer" margin="auto" responsive={responsive}>
        <Heading fontSize={"26px"} textAlign={"left"} marginBottom="10px">
          Price Slash Alert
        </Heading>
        <Box>
          <Slider1 responsive={responsive} />
        </Box>
      </Box>

      <Box
        width="100%"
        h="10px"
        bgColor={"#e0dfdf"}
        marginTop="40px"
        marginBottom={"40px"}
      ></Box>

      <Flex
        width={["90%", "85%", "85%"]}
        overflow={["scroll", "scroll", "hidden"]}
        justifyContent={["left", "left", "center"]}
        responsive={responsive}
        cursor="pointer"
        margin={"auto"}
        gap="10px"
      >
        <Image
          className="posters"
          borderRadius={"10px"}
          width="280px"
          src={image1}
        />
        <Image
          className="posters"
          borderRadius={"10px"}
          width="280px"
          src={image2}
        />
        <Image
          className="posters"
          borderRadius={"10px"}
          width="280px"
          src={image3}
        />
        <Image
          className="posters"
          borderRadius={"10px"}
          width="280px"
          src={image4}
        />
      </Flex>

      <Box
        width="100%"
        h="10px"
        bgColor={"#e0dfdf"}
        marginTop="40px"
        marginBottom={"40px"}
      ></Box>

      <Box width={"85%"} cursor="pointer" margin="auto" responsive={responsive}>
        <Heading fontSize={"26px"} textAlign={"left"} marginBottom="10px">
          Best Price Zone
        </Heading>
        <Box>
          <Slider2 />
        </Box>
      </Box>

      <Box
        width="100%"
        h="10px"
        bgColor={"#e0dfdf"}
        marginTop="40px"
        marginBottom={"40px"}
      ></Box>

      <Box
        width={"85%"}
        cursor="pointer"
        margin={"auto"}
        responsive={responsive}
      >
        <Heading fontSize={"26px"} textAlign={"left"} marginBottom="20px">
          Bodybuilding Goals
        </Heading>
        <Flex
          width={["100%", "100%%", "100%"]}
          overflow={["scroll", "scroll", "hidden"]}
          justifyContent={["left", "left", "center"]}
          responsive={responsive}
          cursor="pointer"
          margin={"auto"}
          gap="10px"
        >
          <Image
            className="posters"
            borderRadius={"10px"}
            width="280px"
            src={image5}
          />
          <Image
            className="posters"
            borderRadius={"10px"}
            width="280px"
            src={image6}
          />
          <Image
            className="posters"
            borderRadius={"10px"}
            width="280px"
            src={image7}
          />
          <Image
            className="posters"
            borderRadius={"10px"}
            width="280px"
            src={image8}
          />
        </Flex>
      </Box>

      <Box
        width="100%"
        h="10px"
        bgColor={"#e0dfdf"}
        marginTop="40px"
        marginBottom={"40px"}
      ></Box>

      <Box width={"85%"} cursor="pointer" margin="auto" responsive={responsive}>
        <Heading fontSize={"26px"} textAlign={"left"} marginBottom="10px">
          Wellness Range
        </Heading>
        <Box>
          <Slider3 />
        </Box>
      </Box>

      <Box
        width="100%"
        h="10px"
        bgColor={"#e0dfdf"}
        marginTop="40px"
        marginBottom={"40px"}
      ></Box>

      <Box width={"85%"} margin={"auto"} borderRadius={"10px"}>
        <MiddleSlider />
      </Box>

      <Box
        width="100%"
        h="10px"
        bgColor={"#e0dfdf"}
        marginTop="40px"
        marginBottom={"40px"}
      ></Box>

      <Box
        width={"85%"}
        cursor="pointer"
        margin={"auto"}
        responsive={responsive}
      >
        <Heading fontSize={"26px"} textAlign={"left"} marginBottom="20px">
          Picks You Can't Miss
        </Heading>
        <Flex
          width={["100%", "100%%", "100%"]}
          overflow={["scroll", "scroll", "hidden"]}
          justifyContent={["left", "left", "center"]}
          responsive={responsive}
          cursor="pointer"
          margin={"auto"}
          gap="10px"
        >
          <Image
            className="posters"
            borderRadius={"10px"}
            width="280px"
            src={image9}
          />
          <Image
            className="posters"
            borderRadius={"10px"}
            width="280px"
            src={image10}
          />
          <Image
            className="posters"
            borderRadius={"10px"}
            width="280px"
            src={image11}
          />
          <Image
            className="posters"
            borderRadius={"10px"}
            width="280px"
            src={image12}
          />
        </Flex>
      </Box>

      <Box
        width="100%"
        h="10px"
        bgColor={"#e0dfdf"}
        marginTop="40px"
        marginBottom={"40px"}
      ></Box>

      <Box width={"85%"} cursor="pointer" margin="auto" responsive={responsive}>
        <Heading fontSize={"26px"} textAlign={"left"} marginBottom="10px">
          Pick Of The Day
        </Heading>
        <Box>
          <Slider4 />
        </Box>
      </Box>

      <Box
        width="100%"
        h="10px"
        bgColor={"#e0dfdf"}
        marginTop="40px"
        marginBottom={"40px"}
      ></Box>

      <Box width={"85%"} margin={"auto"} borderRadius={"10px"}>
        <BottomSlider />
      </Box>

      <Box
        width="100%"
        h="10px"
        bgColor={"#e0dfdf"}
        marginTop="40px"
        marginBottom={"40px"}
      ></Box>

      <Box width={"85%"} cursor="pointer" margin="auto" responsive={responsive}>
        <Heading fontSize={"26px"} textAlign={"left"} marginBottom="10px">
          Workout Essentials
        </Heading>
        <Box>
          <Slider5 />
        </Box>
      </Box>

      <Box
        width="100%"
        h="10px"
        bgColor={"#e0dfdf"}
        marginTop="40px"
        marginBottom={"40px"}
      ></Box>

      <Box
        width={"85%"}
        cursor="pointer"
        margin={"auto"}
        responsive={responsive}
      >
        <Heading fontSize={"26px"} textAlign={"left"} marginBottom="20px">
          Brand Range
        </Heading>
        <Flex
          width={["100%", "100%%", "100%"]}
          overflow={["scroll", "scroll", "hidden"]}
          justifyContent={["left", "left", "center"]}
          responsive={responsive}
          cursor="pointer"
          margin={"auto"}
          gap="10px"
        >
          <Image
            className="posters"
            borderRadius={"10px"}
            width="280px"
            src={first}
          />
          <Image
            className="posters"
            borderRadius={"10px"}
            width="280px"
            src={second}
          />
          <Image
            className="posters"
            borderRadius={"10px"}
            width="280px"
            src={third}
          />
          <Image
            className="posters"
            borderRadius={"10px"}
            width="280px"
            src={fourth}
          />
          {/* <Image className='posters' borderRadius={'10px'} width='280px' src={fifth}/> */}
          <Image
            className="posters"
            borderRadius={"10px"}
            width="280px"
            src={sixth}
          />
          <Image
            className="posters"
            borderRadius={"10px"}
            width="280px"
            src={seventh}
          />
          <Image
            className="posters"
            borderRadius={"10px"}
            width="280px"
            src={eigth}
          />
        </Flex>
      </Box>

      <Box
        width="100%"
        h="10px"
        bgColor={"#e0dfdf"}
        marginTop="40px"
        marginBottom={"40px"}
      ></Box>

      <Box width={"85%"} margin={"auto"}>
        <Heading
          fontSize={"26px"}
          textAlign={"left"}
          marginBottom="20px"
          fontFamily={"montserrat,sans-serrif"}
        >
          Why HealthKart ?
        </Heading>
        <Box
          className="why_healthkart"
          width={"100%"}
          display={["block", "flex", "flex"]}
          justifyContent={["space-between"]}
        >
          <Box>
            <img
              style={{ width: "68px", height: "70px" }}
              src="https://img9.hkrtcdn.com/20791/normal_2079088_o.png"
              alt=""
            />
            <p
              style={{ fontSize: "18px", color: "#1c1c28", fontWeight: "600" }}
            >
              Wide range of Nutritional products
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#77777e",
                fontWeight: "normal",
              }}
            >
              One-stop fitness and health destination
            </p>
          </Box>

          <Box>
            <img
              style={{ width: "68px", height: "70px" }}
              src="https://img3.hkrtcdn.com/20791/normal_2079092_o.png"
              alt=""
            />
            <p
              style={{ fontSize: "18px", color: "#1c1c28", fontWeight: "600" }}
            >
              100% Original & Authentic
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#77777e",
                fontWeight: "normal",
              }}
            >
              Tight control on sourcing and distribution
            </p>
          </Box>

          <Box>
            <img
              style={{ width: "68px", height: "70px" }}
              src="https://img1.hkrtcdn.com/20791/normal_2079090_o.png"
              alt=""
            />
            <p
              style={{ fontSize: "18px", color: "#1c1c28", fontWeight: "600" }}
            >
              Guide to Fit and Healthy Lifestyle
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#77777e",
                fontWeight: "normal",
              }}
            >
              our true partner in health & wellness journey
            </p>
          </Box>
        </Box>
      </Box>

      <Box
        width="100%"
        h="10px"
        bgColor={"#e0dfdf"}
        marginTop="40px"
        marginBottom={"40px"}
      ></Box>

      <Box width={"90%"} margin={"auto"}>
        <Box display={["none", "none", "flex"]} gap={"20px"}>
          <Box>
            <Box style={{ width: "576px", heiht: "230px" }}>
              <img
                style={{ width: "576px", heiht: "230px" }}
                src="https://i.postimg.cc/mhWLdksM/Annotation-2023-01-26-1717415.jpg"
                alt=""
              />
            </Box>
            <Box marginTop={"15px"}>
              <img
                style={{ width: "576px", heiht: "230px" }}
                src="https://i.postimg.cc/x1yv3b2v/Annotation-2023-01-26-1717416.jpg"
                alt=""
              />
            </Box>
          </Box>

          <Box>
            <img
              style={{ width: "576px", heiht: "542px" }}
              src="https://i.postimg.cc/g2TYQVL9/Annotation-2023-01-26-1717417.jpg"
              alt=""
            />
          </Box>
        </Box>
      </Box>

      <Box
        display={["none", "none", "block"]}
        width="100%"
        h="10px"
        bgColor={"#e0dfdf"}
        marginTop="40px"
        marginBottom={"40px"}
      ></Box>

      <Box width={"90%"} margin={"auto"}>
        <Box display={["block", "block", "flex"]} gap={"20px"}>
          <Box padding={"20px"}>
            <img
              src="https://i.postimg.cc/T20rg079/download-helthkart.jpg"
              alt=""
            />
          </Box>
          <Box>
            <Box textAlign={"left"}>
              <Heading>Download the</Heading>
              <Heading>Helathkart Mobile app</Heading>
            </Box>

            <Box margin={"10px"}>
              <img
                style={{ borderRadius: "20px" }}
                src="https://i.postimg.cc/yxzCK93Q/Annotation-2023-01-26-171741.jpg"
                alt=""
              />
            </Box>

            <Box>
              <img
                style={{ borderRadius: "200px" }}
                src="https://i.postimg.cc/pTJq9n11/Annotation-2023-01-26-1717412.jpg"
                alt=""
              />
            </Box>

            <Box>
              <img
                style={{ borderRadius: "50%" }}
                src="https://i.postimg.cc/BvgKHc4D/Annotation-2023-01-26-1717413.jpg"
                alt=""
              />
            </Box>
            <Box>
              <img
                className="play_store_apple"
                src="https://i.postimg.cc/0Q4r0V36/Annotation-2023-01-26-1717414.jpg"
                alt=""
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
