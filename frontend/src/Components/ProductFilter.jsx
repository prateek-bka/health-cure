import {
  Button,
  Heading,
  FormLabel,
  Checkbox,
  Select,
  Text,
  Box,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProductFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("category");
  const [category, setCategory] = useState(initialState || []);
  const initialorder = searchParams.getAll("order");
  const [order, setOrder] = useState(initialorder || "");
  const btnRef = React.useRef();

  const handleChange = (e) => {
    let newCategory = [...category];
    let value = e.target.value;

    if (newCategory.includes(value)) {
      newCategory.splice(newCategory.indexOf(value), 1);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
    console.log(category);
  };

  const handleSort = (e) => {
    console.log(e.target.value);
    setOrder(e.target.value);
  };

  useEffect(() => {
    let params = {
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [category, order]);

  return (
    <Box
      w="100%"
      position={"sticky"}
      display={"block"}
      zIndex={"99"}
      top={"100px"}
    >
      <Box
        padding={"20px"}
        width={"80%"}
        m="auto"
        borderRadius="10px"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      >
        <Heading fontSize="24px" color={"#424141"} textAlign={"left"}>
          Filter Options
        </Heading>

        <Box mt="20px" style={{ display: "flex", gap: "10px" }}>
          <Checkbox
            value="gainers"
            onChange={handleChange}
            checked={category.includes("geiners")}
          />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Gainers
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox
            value="prepostworkout"
            onChange={handleChange}
            checked={category.includes("prepostworkout")}
          />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Postworkout
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox
            value="proteinfoods"
            onChange={handleChange}
            checked={category.includes("proteinfoods")}
          />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Proteinfoods
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox
            value="weightmanagement"
            onChange={handleChange}
            checked={category.includes("weightmanagement")}
          />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Weight management
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox
            value="WheyProteinIsolate"
            onChange={handleChange}
            checked={category.includes("WheyProteinIsolate")}
          />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            WheyProtein Isolate
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox
            value=""
            onChange={handleChange}
            checked={category.includes("")}
          />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            HealthKart
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox
            value=""
            onChange={handleChange}
            checked={category.includes("")}
          />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            MuscleBlaze
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox
            value=""
            onChange={handleChange}
            checked={category.includes()}
          />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            ON
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox
            value=""
            onChange={handleChange}
            checked={category.includes("")}
          />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            My Protien
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            MuscleTech
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Shorts
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Slides
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Boost Energy
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Bulking Up
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Ehances WorkOut
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Lean
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Muscle Mass
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Lean Body
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Fat gain
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Carbs
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Protiens
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Veg
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Bulking Up
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Energy
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Increase Stamina
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Weight Loss
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Meal Replacement
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Cardio
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Repair
          </FormLabel>
        </Box>

        <Box style={{ display: "flex", gap: "10px" }}>
          <Checkbox />
          <FormLabel color={"#000000"} fontWeight="400" paddingTop="8px">
            Supplement
          </FormLabel>
        </Box>
      </Box>

      <Box
        style={{
          padding: "8px",
          outline: "none",
          marginLeft: "7px",
          cursor: "pointer",
          border: "none",
        }}
      >
        <Select
          onChange={handleSort}
          variant="unstyled"
          fontSize="14px"
          fontWeight={600}
          outline="none"
          border={"none"}
          cursor={"pointer"}
        >
          <option
            style={{ cursor: "pointer", fontWeight: "600" }}
            name="order"
            value={""}
            order={order === ""}
            outline="none"
          >
            Best Selling
          </option>
          <option
            style={{ cursor: "pointer", fontWeight: "600" }}
            name="order"
            value={"asc"}
            order={order === "asc"}
            outline="none"
          >
            Price, Low to High
          </option>
          <option
            style={{ cursor: "pointer", fontWeight: "600" }}
            name="order"
            value={"desc"}
            order={order === "desc"}
            outline="none"
          >
            Price, High to Low
          </option>
          <option style={{ cursor: "pointer", fontWeight: "600" }} value="">
            Alphabetically, A-Z
          </option>
          <option style={{ cursor: "pointer", fontWeight: "600" }} value="">
            Alphabetically, Z-A
          </option>
          <option style={{ cursor: "pointer", fontWeight: "600" }} value="">
            Date,Old to New
          </option>
          <option style={{ cursor: "pointer", fontWeight: "600" }} value="">
            Date,New to Old
          </option>
        </Select>
      </Box>
    </Box>
  );
};

export default ProductFilter;
