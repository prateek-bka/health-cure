import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

function EditButton() {
  const [selectedImage, setSelectedImage] = useState("");

  const upload = (event) => {
    console.log(event.target.files[0]);
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex>
        <Button w={"60px"} h={"30px"} onClick={onOpen}>
          Edit
        </Button>
        <Popover>
          <PopoverTrigger>
            <Button w={"60px"} h={"30px"}>
              Delete
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>
              Are you sure you want to delete this product?
            </PopoverBody>
            <PopoverFooter>
              <Flex w={"100%"} justifyContent={"space-evenly"}>
                <Button>No</Button>
                <Button>Yes</Button>
              </Flex>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {" "}
            <Stack spacing={4} mb={5}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input />
              </FormControl>
              <Flex
                textAlign={"center"}
                alignItems={"center"}
                w={"100%"}
                justifyContent={"space-around"}
              >
                <Image
                  objectFit={"contain"}
                  borderRadius={"10px"}
                  alt="not found"
                  width={"100px"}
                  h={"100px"}
                  src={selectedImage}
                />
                <Stack>
                  <input type="file" name="myImage" onChange={upload} />
                </Stack>
              </Flex>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Update Product</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditButton;
