import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
export const total = [];
function CartCard({ data, handleDicrement, handleIncrement, i, deleteCart }) {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  const [count, setCount] = useState(1);
  const handleCount = (val) => {
    setCount(count + val);
  };
  // total.push(count*data.price);
  // console.log(data.image)
  return (
    <Box
      display={["", "flex", "flex", "flex", "flex", "flex"]}
      padding={"10px"}
      w="95%"
      justifyContent="space-between"
      border="1px solid gray"
      borderRadius={"10px"}
      fontFamily="sans-serif"
      alignContent="center"
      alignItems="center"
      m="20px"
    >
      <Box w={["50%", "30%", "30%", "35%", "80%", "80%"]}>
        <Box display="flex" gap={"20px"}>
          <Box w={["90%", "60%", "50%", "25%", "20%", "40%"]}>
            <Image src={data.image} />
          </Box>
          <Box>
            <Text fontWeight={"600"} fontSize={"14px"}>
              {data.name}
            </Text>
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
                  marginLeft: "5px",
                  color: "grey",
                }}
              >
                ₹ {data.price2}
              </span>{" "}
              <span
                style={{ color: "green", marginLeft: "5px", fontSize: "13px" }}
              >
                {data.discount}% off
              </span>
            </p>
            <Box display="flex" width={"100px"}>
              <Button onClick={() => handleIncrement(data.id)}>+</Button>
              <Text m="auto">{data.quantity}</Text>
              <Button
                isDisabled={data.quantity == 1 ? true : false}
                onClick={() => handleDicrement(data.id)}
              >
                -
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box w="100px" m="auto">
        <Button variant={"unstyled"} onClick={() => deleteCart(i)}>
          <RiDeleteBin6Line />
        </Button>
        <Button variant={"unstyled"}>
          <AiOutlineHeart />
        </Button>
      </Box>
    </Box>
  );
}
export default CartCard;
