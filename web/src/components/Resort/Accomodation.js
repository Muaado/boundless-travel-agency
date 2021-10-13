import React, { useEffect, useState } from "react";
import Image from "gatsby-plugin-sanity-image";
import Carousel from "nuka-carousel";
import ChevronRight from "../../assets/icons/chevron-right.svg";
import ChevronLeft from "../../assets/icons/chevron-left.svg";
import { CarouselButton } from "../../styles/Ui";
import styled from "styled-components";
import { device } from "../../styles/deviceSizes";
import useWindowSize from "../../lib/useWindowSize";

const AccomodationStyles = styled.div`
  padding: 0 10%;
  @media ${device.laptopL} {
    padding: 0;
  }
  h2 {
    text-align: center;
    /* padding: 5rem; */
    margin-bottom: 7rem;
  }
  .carousel {
    display: flex !important;
    justify-content: center;

    .slider-frame {
      align-self: center;
      width: 100%;
    }

    .slider-slide {
      min-width: max-content !important;
    }
  }
  .image-container {
    width: 100%;
    @media ${device.laptopL} {
    }
    height: 70rem;
    img {
      height: 80%;
    }
    p {
      font-family: "Playfair Display";
      font-size: 3rem;
      padding: 2rem 0;
      text-align: right;
    }
  }
`;

const Accomodation = ({ villas }) => {
  const [numberOfSlides, setNumberOfSlides] = useState(3);
  const [cellSpacing, setCellSpacing] = useState(10);
  const size = useWindowSize();

  useEffect(() => {
    const { width } = size;
    const isMobileOnly = width <= 576;
    const isTablet = width > 576 && width < 992;
    const isSreenSM = width > 992 && width < 1200;
    const isSreenLG = width > 1200 && width < 1440;
    const screenXL = width > 1440 && width < 1600;
    const screenXXL = width > 1600;

    const slides = () => {
      if (isMobileOnly) return 1;
      if (isTablet) return 2;
      if (isSreenSM) return 2.4;
      if (isSreenLG) return 2.8;
      if (screenXL) return 3;
      if (screenXXL) return 2.9;
      // return 5.65;
    };
    const spacing = () => {
      // if (isMobileOnly) return 50;
      // if (isTablet) return 20;
      return 20;
    };

    setNumberOfSlides(slides);
    setCellSpacing(spacing);
  }, [size]);
  return (
    <AccomodationStyles className="resort__accomodation">
      <h2>Accomodation</h2>

      <Carousel
        className="carousel"
        slidesToShow={numberOfSlides}
        cellSpacing={cellSpacing}
        renderCenterRightControls={({ nextSlide }) => (
          <CarouselButton
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            bgColor="var(--darkGreen)"
          >
            <ChevronRight />
          </CarouselButton>
        )}
        renderCenterLeftControls={({ previousSlide }) => (
          <CarouselButton
            type="button"
            onClick={previousSlide}
            aria-label="Next Slide"
            bgColor="var(--darkGreen)"
          >
            <ChevronLeft />
          </CarouselButton>
        )}
      >
        {villas.map(({ name, imageThumb }) => (
          // <li key={name}>
          <div key={name} className="image-container">
            <Image
              style={{
                width: "100%",
                height: "80%",
                objectFit: "cover",
              }}
              {...imageThumb}
              alt={imageThumb.alt}
            />
            <p>{name}</p>
          </div>
          // </li>
        ))}
      </Carousel>
    </AccomodationStyles>
  );
};

export default Accomodation;
