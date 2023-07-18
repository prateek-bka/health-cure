import { Box, Center, Flex, Heading, Hide, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import Products from "./adminComponent/Products";
import Pagination from "./adminComponent/Pagination";
import Dashboard from "./adminComponent/Dashboard";
import Admins from "./adminComponent/Admins";
import Settings from "./adminComponent/Settings";

const Admin = () => {
  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState(1);
  const [productComState, setProductComState] = useState(false);
  const [dashboardComState, setDashboardComState] = useState(true);
  const [adminsComState, setAdminsComState] = useState(false);
  const [settingsComState, setSettingsComState] = useState(false);

  const handleProductsCom = () => {
    setProductComState(true);
    setDashboardComState(false);
    setAdminsComState(false);
    setSettingsComState(false);
  };

  const handleDashboardCom = () => {
    setDashboardComState(true);
    setProductComState(false);
    setAdminsComState(false);
    setSettingsComState(false);
  };

  const handleAdminsCom = () => {
    setAdminsComState(true);
    setDashboardComState(false);
    setProductComState(false);
    setSettingsComState(false);
  };

  const handleSettingsCom = () => {
    setSettingsComState(true);
    setAdminsComState(false);
    setDashboardComState(false);
    setProductComState(false);
  };

  const getData = () => {
    fetch("https://long-ruby-crab-hose.cyclic.app/products", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };
  const handlePagination = (page) => {
    setPageData(page);
    console.log(page);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box
        w="100%"
        m="auto"
        h="100vh"
        paddingTop="50px"
        bg="#CBD5E0"
        display="flex"
        justifyContent="space-around"
      >
        {/* sidebar */}
        <Box
          w="20%"
          h="70vh"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          bg="#EDF2F7"
          borderRadius="10px"
        >
          <Center>
            <Text as="b" fontSize="25px">
              Menu
            </Text>
          </Center>

          <Flex w="80%" h="80%" m="auto" justifyContent="space-between">
            <Box
              h="100%"
              w={{ lg: "25%", md: "25%", sm: "100%", base: "100%" }}
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              alignItems={{ sm: "center", base: "center" }}
            >
              <AiFillHome onClick={handleDashboardCom} size="25px" />
              <BsClipboardData onClick={handleProductsCom} size="25px" />
              <BiUser onClick={handleAdminsCom} size="25px" />
              <FiSettings onClick={handleSettingsCom} size="25px" />
            </Box>

            <Box
              h="100%"
              w="68%"
              display={{ lg: "block", md: "block", base: "none" }}
            >
              <Box
                h="100%"
                w="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
              >
                <Text
                  _hover={{ cursor: "pointer" }}
                  fontWeight="medium"
                  display={{ lg: "block", md: "block", sm: "none" }}
                  fontSize={{ lg: "18px", md: "15px" }}
                  onClick={handleDashboardCom}
                >
                  Dashboard
                </Text>
                <Text
                  _hover={{ cursor: "pointer" }}
                  fontWeight="medium"
                  fontSize={{ lg: "18px", md: "15px" }}
                  onClick={handleProductsCom}
                >
                  Products
                </Text>
                <Text
                  _hover={{ cursor: "pointer" }}
                  fontWeight="medium"
                  fontSize={{ lg: "18px", md: "15px" }}
                  onClick={handleAdminsCom}
                >
                  Admins
                </Text>
                <Text
                  _hover={{ cursor: "pointer" }}
                  fontWeight="medium"
                  fontSize={{ lg: "18px", md: "15px" }}
                  onClick={handleSettingsCom}
                >
                  Settings
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>

        {/* components */}
        <Box
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          bg="#EDF2F7"
          w="75%"
          h="90%"
          overflowY="scroll"
          borderRadius="10px"
        >
          {dashboardComState ? (
            <>
              <Dashboard />
            </>
          ) : adminsComState ? (
            <>
              <Admins />
            </>
          ) : settingsComState ? (
            <>
              <Settings />
            </>
          ) : (
            <>
              <Box
                w="100%"
                h="90%"
                display="grid"
                gridTemplateColumns={{
                  lg: "repeat(4,1fr)",
                  md: "repeat(3,1fr)",
                  sm: "repeat(2,1fr)",
                  base: "repeat(1,1fr)",
                }}
                overflowY="scroll"
              >
                <Products data={data} pageData={pageData} />
              </Box>

              <Box
                m="auto"
                h="10%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Pagination handlePagination={handlePagination} />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Admin;
