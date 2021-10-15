import React from "react";

import ChevronRight from "../../assets/icons/chevron-right.svg";
import ChevronLeft from "../../assets/icons/chevron-left.svg";
import { CarouselButtonStyles } from "../../styles/Ui";
const CarouselButton = ({ onClick, chevronRight }) => {
  return (
    <CarouselButtonStyles
      className={
        chevronRight ? "carousel__button-right" : "carousel__button-left"
      }
      type="button"
      onClick={onClick}
      aria-label="Next Slide"
      bgColor="var(--darkGreen)"
    >
      {chevronRight ? <ChevronRight /> : <ChevronLeft />}
    </CarouselButtonStyles>
  );
};

export default CarouselButton;
