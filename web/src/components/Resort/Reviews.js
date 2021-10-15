import React, { useEffect, useState } from "react";

import Carousel from "nuka-carousel";
import PortableText from "../portableText";

import useWindowSize from "../../lib/useWindowSize";
import styled from "styled-components";
import { device } from "../../styles/deviceSizes";
import CarouselButton from "../Ui/CarouselButton";

const ReviewsStyles = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 5rem;
  padding: 2rem 10%;
  min-width: fit-content;

  h2 {
    letter-spacing: 1rem;
    text-align: center;
  }

  .title {
    font-weight: bold;
    color: #000;
  }
  a {
    margin-top: 7rem;
    color: var(--darkGreen);
    font-weight: bold;
  }

  .carousel {
    padding: 5rem;
    /* display: flex !important;
    justify-content: center; */

    &__button {
      &-right {
        position: absolute;
        left: 3rem;
        top: -5rem;
      }

      &-left {
        position: absolute;
        right: 3rem;
        top: -5rem;
      }
    }
    .slider-list {
      /* padding: 0 5rem; */
    }
    .slider-frame {
      /* margin: 0 2rem; */
      align-self: center;
      padding: 2rem 4rem !important;
      width: calc(100% + 10rem);
      width: 100%;
      /* display: flex;
      justify-content: center; */
    }

    .slide {
      width: fit-content;
    }

    .slider-slide {
      width: fit-content;
      @media ${device.tablet} {
        display: flex !important;
        justify-content: center;
      }
    }
  }

  .review {
    /* max-width: 25rem; */
    width: fit-content;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);

    margin-right: 0;

    p {
      width: 25rem;
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
      if (screenXL) return 3.5;
      if (screenXXL) return 3.5;
      return 5;
    };
    const spacing = () => {
      if (isMobileOnly) return 50;
      if (isTablet) return 20;
      return 150;
    };

    setNumberOfSlides(slides);
    setCellSpacing(spacing);
  }, [size]);
  return (
    <ReviewsStyles className="resort__reviews">
      <h2>Reviews</h2>
      <Carousel
        className="carousel"
        slidesToShow={numberOfSlides}
        cellSpacing={cellSpacing}
        renderCenterRightControls={({ nextSlide }) => (
          <CarouselButton onClick={nextSlide} chevronRight={true} />
        )}
        renderCenterLeftControls={({ previousSlide }) => (
          <CarouselButton onClick={previousSlide} />
        )}
      >
        {reviews.map(({ name, _rawDescription }) => (
          <div className="review" key={name}>
            <p className="title">{name}</p>
            <PortableText blocks={_rawDescription} />
            <a>Read more</a>
          </div>
        ))}
      </Carousel>
    </ReviewsStyles>
  );
};

export default Reviews;
