import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Admins = () => {
  return (
    <>
      <Box
        w="100%"
        h="max-content"
        paddingTop="10px"
        paddingLeft="10px"
        display="grid"
        gridTemplateColumns={{
          lg: "repeat(4,1fr)",
          md: "repeat(3,1fr)",
          sm: "repeat(2,1fr)",
          base: "repeat(1,1fr)",
        }}
        gap="10px"
      >
        <Box
          boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
          w="90%"
          h="300px"
          borderRadius="10px"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/107989752?v=4"
            w="100%"
            h="70%"
          ></Image>
          <Text>Name : Anish Jha</Text>
          <Text>Mobile : 8986730767</Text>
          <Flex gap="10px">
            <BsLinkedin />
            <BsGithub />
            <BsInstagram />
            <BsTwitter />
          </Flex>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
          w="90%"
          h="300px"
          borderRadius="10px"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/107460534?v=4"
            w="100%"
            h="70%"
          ></Image>
          <Text>Name : Raj</Text>
          <Text>Mobile : 8986730767</Text>
          <Flex gap="10px">
            <BsLinkedin />
            <BsGithub />
            <BsInstagram />
            <BsTwitter />
          </Flex>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
          w="90%"
          h="300px"
          borderRadius="10px"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/96651559?v=4"
            w="100%"
            h="70%"
          ></Image>
          <Text>Name : Prateek Agrawal</Text>
          <Text>Mobile : 8986730767</Text>
          <Flex gap="10px">
            <BsLinkedin />
            <BsGithub />
            <BsInstagram />
            <BsTwitter />
          </Flex>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
          w="90%"
          h="300px"
          borderRadius="10px"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/98299363?v=4"
            w="100%"
            h="70%"
          ></Image>
          <Text>Name : Mustaq Hasan</Text>
          <Text>Mobile : 8986730767</Text>
          <Flex gap="10px">
            <BsLinkedin />
            <BsGithub />
            <BsInstagram />
            <BsTwitter />
          </Flex>
        </Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
          w="90%"
          h="300px"
          borderRadius="10px"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/107990539?v=4"
            w="100%"
            h="70%"
          ></Image>
          <Text>Name : Sai Kiran</Text>
          <Text>Mobile : 8986730767</Text>
          <Flex gap="10px">
            <BsLinkedin />
            <BsGithub />
            <BsInstagram />
            <BsTwitter />
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Admins;
