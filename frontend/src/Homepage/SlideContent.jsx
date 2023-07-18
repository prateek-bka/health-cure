import { Image } from "@chakra-ui/react";
import React from "react";
export default function SlideContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <Image
            width={"100%"}
            objectFit={"cover"}
            className="slide-image"
            src={slide.urls}
            alt=""
          />
        </div>
      ))}
    </section>
  );
}
