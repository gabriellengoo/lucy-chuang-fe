import { useRef } from "react";
import { createRef } from "react";

const MCarousel = (props) => {
  const { slides, currentSlide } = props;

  return (
    <div>
      {slides.map((slide, index) => (
        <img
          src={slide}
          key={`slide_img_${index}`}
          alt="slide"
          style={{
            width: "30%",
            position: "absolute",
            left: `${
              50 +
              35 *
                Math.sin(
                  (Math.PI *
                    ((currentSlide - index + slides.length) % slides.length)) /
                    slides.length
                )
            }%`,
            top: `${
              50 +
              10 *
                Math.cos(
                  (Math.PI *
                    ((currentSlide - index + slides.length) % slides.length)) /
                    slides.length
                )
            }%`,
            transform: "translate(-50%, -50%)",
            zIndex: `${
              slides.length - Math.abs(index - currentSlide) <
              Math.abs(currentSlide - index)
                ? Math.abs(index - currentSlide)
                : Math.abs(currentSlide - index) + 1
            }`,
          }}
        />
      ))}
    </div>
  );
};

export default MCarousel;
