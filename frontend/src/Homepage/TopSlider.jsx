import React, { useEffect, useState } from "react";
import SlideContent from "./SlideContent";
import Dots from "./Dots";
import Arrow from "./Arrow";
import sliderImage from "./TopSlideImage";
import "./css/TopSlider.css";
import SliderImages from "./TopSlideImage";
import { Box } from "@chakra-ui/react";

const len = sliderImage.length - 1;

export default function TopSlider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <Box className="slider-container">
      <SlideContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrow
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />

      <Box position={"relative"} marginTop={["-40", "-30", "-20"]}>
        <Dots
          activeIndex={activeIndex}
          sliderImage={SliderImages}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </Box>
    </Box>
  );
}
