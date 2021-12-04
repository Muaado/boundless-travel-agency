import React, { useEffect, useState } from "react";

import Carousel from "nuka-carousel";
import PortableText from "../Ui/portableText";

import useWindowSize from "../../lib/useWindowSize";
import styled from "styled-components";
import { device } from "../../styles/deviceSizes";
import CarouselButton from "../Ui/CarouselButton";
import Placeholder from "../../assets/placeholder.svg";

const ReviewsStyles = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 5rem;
  padding: 2rem 10%;
  min-width: fit-content;

  @media ${device.tablet} {
    padding: 2rem 1.5rem;
  }

  h2 {
    letter-spacing: 1rem;
    text-align: center;
    color: #000;
    margin-bottom: 5rem;
  }

  .title {
    font-weight: bold;
    color: #000;
    padding: 0;
  }
  a {
    margin-top: 7rem;
    color: var(--darkGreen);
    font-weight: bold;
  }

  .carousel {
    width: 100% !important;
    /* padding: 5rem; */
    /* display: flex !important;
    justify-content: center; */

    /* &__button {
      @media ${device.laptop} {
        position: unset;
        top: unset;
        left: unset;
        right: unset;
      }
      &-right {
        position: absolute;
        left: 3rem;
        top: -5rem;
        @media ${device.laptop} {
          position: unset;
          top: unset;
          left: unset;
          right: unset;
        }
      }

      &-left {
        position: absolute;
        right: 3rem;
        top: -5rem;
        @media ${device.laptop} {
          position: unset;
          top: unset;
          left: unset;
          right: unset;
        }
      } */
    }
    /* .slider-list {
  
    */

    .slider-control-bottomcenter {
      bottom: -5rem !important;
    }
  }

  .review {
    /* max-width: 25rem; */
    /* width: 80vw; */
    /* max-width: fit-content; */
    /* mi */
    width: fit-content;
    /* oveflow:  */
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25); */
    border: 1px solid var(--grey);

    margin-right: 0 !important;


    /* h2 {
      
      le
    } */

    p {
      /* width: 25rem; */
      /* width: inherit; */
      text-align: left;

      letter-spacing: 0.1rem;
      color: #000;
    }

    p:first-of-type {
      font-weight: bold;
      font-size: 2rem;
      margin-bottom: 5rem;
    }
  }
`;

const Reviews = ({ reviews }) => {
  const [numberOfSlides, setNumberOfSlides] = useState(3);
  const [cellSpacing, setCellSpacing] = useState(10);
  const size = useWindowSize();

  useEffect(() => {
    const { width } = size;
    const isMobileOnly = width <= 576;
    const isTablet = width > 576 && width < 780;
    const isTabletL = width > 780 && width < 992;
    const isSreenSM = width > 992 && width < 1200;
    const isSreenLG = width > 1200 && width < 1440;
    const screenXL = width > 1440 && width <= 1600;
    const screenXXL = width > 1600 && width < 1700;
    const screenXXXL = width > 1700;

    const slides = () => {
      if (isMobileOnly) return 1;
      if (isTablet) return 2.3;
      if (isTabletL) return 2.5;
      if (isSreenSM) return 2.8;
      if (isSreenLG) return 3.4;
      if (screenXL) return 4;
      if (screenXXL) return 4.3;
      if (screenXXXL) return 4.5;
      return 5;
    };
    const spacing = () => {
      // if (isMobileOnly) return 50;

      // if (isTablet) return 50;
      // if (isTabletL) return 20;
      // if (isSreenSM) return -60;
      // if (isSreenLG) return -60;
      // if (screenXL) return -60;
      // if (screenXXL) return -10;
      // if (screenXXXL) return 100;
      // return -300;
      return 20;
    };

    setNumberOfSlides(slides);
    setCellSpacing(spacing);
  }, [size]);
  return (
    <ReviewsStyles
      className="resort__reviews"
      // data-aos="fade-up"
      // data-aos-delay="50"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
    >
      <h2>Reviews</h2>
      <Carousel
        speed={1000}
        className="carousel"
        slidesToShow={numberOfSlides}
        cellSpacing={cellSpacing}
        // renderCenterRightControls={({ nextSlide }) => (
        //   <CarouselButton onClick={nextSlide} chevronRight={true} />
        // )}
        // renderCenterLeftControls={({ previousSlide }) => (
        //   <CarouselButton onClick={previousSlide} />
        // )}
      >
        {reviews.length
          ? reviews.map(({ name, description }) => (
              <div className="review" key={name}>
                <p className="title">{name}</p>
                <p>{description}</p>
                <a>Read more</a>
              </div>
            ))
          : [1, 2, 3, 4, 5].map((item) => (
              <div className="review" key={item}>
                <Placeholder />
              </div>
            ))}
      </Carousel>
    </ReviewsStyles>
  );
};

export default Reviews;
