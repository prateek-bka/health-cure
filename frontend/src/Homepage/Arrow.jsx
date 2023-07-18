import { Box } from "@chakra-ui/react";
import React from "react";

export default function Arrow({ prevSlide, nextSlide }) {
  return (
    <Box className="arrows">
      <span className="prev" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="next" onClick={nextSlide}>
        &#10095;
      </span>
    </Box>
  );
}
