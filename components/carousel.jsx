import React, { Component } from "react";
import { config } from "react-spring";
import dynamic from "next/dynamic";
import { urlFor } from "../sanity";
import { useEffect } from "react";
import { useState } from "react";
import MCarousel from "./mcarousel";

const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

const CarouselComponent = (images) => {
  const [goToSlide, setGoToSlide] = useState(0);

  const len = Object.values(images)[0].length;
  const handleScroll = (y) => {
    const len = Object.keys(images)[0].length;
    if (y > 100) {
      setGoToSlide((prev) => (prev + 1) % len);
    } else if (y < -100) {
      setGoToSlide((prev) => (prev - 1 + len) % len);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", (e) => handleScroll(e.wheelDelta));
    return () =>
      window.removeEventListener("wheel", (e) => handleScroll(e.wheelDelta));
  }, []);

  const slides = Object.values(images)[0]
    .map(({ _key, asset }, index) => {
      return {
        key: index,
        content: <img src={urlFor(asset).auto("format")} alt={_key} />,
      };
    })
    .map((slide, index) => {
      return { ...slide, onClick: () => setGoToSlide(index) };
    });

  return (
    <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={10}
        showNavigation={false}
        animationConfig={config.gentle}
      />
      {/* <MCarousel
        slides={Object.values(images)[0].map(({ _key, asset }) =>
          urlFor(asset).auto("format")
        )}
        currentSlide={goToSlide}
      /> */}
    </div>
  );
};

export default CarouselComponent;
