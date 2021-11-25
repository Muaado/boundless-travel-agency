import React, { useEffect, useState } from "react";
import Image from "gatsby-plugin-sanity-image";
import Carousel from "nuka-carousel";
import ChevronRight from "../../assets/icons/chevron-right.svg";
import ChevronLeft from "../../assets/icons/chevron-left.svg";

import styled from "styled-components";
import { device } from "../../styles/deviceSizes";
import useWindowSize from "../../lib/useWindowSize";
import CarouselButton from "../Ui/CarouselButton";
import { getVillaUrl } from "../../lib/helpers";
import { Link } from "gatsby";
import Placeholder from "../../assets/placeholder.svg";
const AccomodationStyles = styled.div`
  padding: 0 15%;
  @media ${device.laptopL} {
    padding: 0 10%;
  }
  @media ${device.tablet} {
    padding: 0;
  }
  h2 {
    text-align: center;
    /* padding: 5rem; */
    letter-spacing: normal;
    margin-bottom: 7rem;
  }
  .carousel {
    display: flex !important;

    width: 100%;

    .slider-slide {
      margin-right: 2rem;
      /* width: 100% !important; */
      /* min-width: 50rem !important; */
    }

    .slider-frame {
      align-self: center;
      width: 100% !important;
    }
  }
  .image-container {
    /* min-width: 40rem; */
    width: 100%;
    display: flex;
    flex-direction: column;

    height: 60rem;
    img {
      height: 80%;
    }
    p {
      /* font-family: "Playfair Display"; */
      font-size: 3rem;
      padding: 2rem 0;
      text-align: right;

      @media ${device.tablet} {
        /* text-align: left; */
        font-size: 1.6rem;
        margin-right: 1rem;
      }
    }
  }
`;

const Accomodation = ({ villas, id }) => {
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
      if (isSreenLG) return 3;
      if (screenXL) return 3;
      if (screenXXL) return 3;
      return 2.9;
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
    <AccomodationStyles
      id={id}
      className="resort__accomodation"
      // data-aos="fade-up"
      // data-aos-delay="50"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
    >
      <h2>Accomodation</h2>

      <Carousel
        speed={1000}
        wrapAround
        className="carousel"
        slidesToShow={numberOfSlides}
        cellSpacing={cellSpacing}
        // renderCenterRightControls={({ nextSlide }) => (
        //   <CarouselButton onClick={nextSlide} />
        // )}
        // renderCenterLeftControls={({ previousSlide }) => ""}
      >
        {villas.map(({ name, imageThumb, resort }) => (
          // <li key={name}>
          <Link
            to={getVillaUrl({ name, resortName: resort.name })}
            key={name}
            className="image-container"
          >
            {imageThumb && imageThumb.asset ? (
              <Image
                style={{
                  width: "100%",
                  height: "80%",
                  objectFit: "cover",
                }}
                {...imageThumb}
                alt={imageThumb.alt}
              />
            ) : (
              <Placeholder />
            )}

            <p>{name}</p>
          </Link>
          // </li>
        ))}
      </Carousel>
    </AccomodationStyles>
  );
};

export default Accomodation;
