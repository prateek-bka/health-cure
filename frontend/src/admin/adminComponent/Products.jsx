import { Box, Button, ButtonGroup, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import EditButton from "./EditButton";

const Products = ({ data, pageData }) => {
  console.log(data);
  return (
    <>
      {data.length > 0 &&
        data.map((el, i) => {
          if (i >= (pageData - 1) * 8 && i < pageData * 8) {
            return (
              <Box>
                <Image src={el.image} />
                <Text>{el.name}</Text>
                <ButtonGroup>
                  {/* <Button>Edit</Button>
                  <Button>Delete</Button> */}
                  <EditButton />
                </ButtonGroup>
              </Box>
            );
          }
        })}
    </>
  );
};

export default Products;
