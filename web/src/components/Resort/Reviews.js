import React, { useEffect, useState } from "react";

import Carousel from "nuka-carousel";
import PortableText from "../portableText";

import useWindowSize from "../../lib/useWindowSize";
import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

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

  .carousel {
    /* padding: 5rem; */
    display: flex;
    justify-content: center;
    .slider-frame {
      padding: 5rem !important;
      display: flex;
      justify-content: center;
    }

    .slider-slide {
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
      width: 20rem;
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
    const screenXL = width > 1440;

    const slides = () => {
      if (isMobileOnly) return 1;
      if (isTablet) return 2;
      if (isSreenSM) return 2.4;
      if (isSreenLG) return 2.8;
      if (screenXL) return 4;
      return 2;
    };
    const spacing = () => {
      if (isMobileOnly) return 50;
      if (isTablet) return 20;
      return 0;
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
        // enableKeyboardControls
        // renderCenterLeftControls={null}
        // renderBottomCenterControls={null}
        // renderCenterRightControls={({ nextSlide }) => (
        //   <button
        //     type="button"
        //     className="btn-right"
        //     onClick={nextSlide}
        //     aria-label="Next Slide"
        //   >
        //     <img src={chevron} alt="" />
        //     <p className="eye-not-visible">Next Slide</p>
        //   </button>
        // )}
        // dragging
        // wrapAround
      >
        {reviews.map(({ name, _rawDescription }) => (
          <div className="review" key={name}>
            <p>{name}</p>
            <PortableText blocks={_rawDescription} />
          </div>
        ))}
      </Carousel>
    </ReviewsStyles>
  );
};

export default Reviews;
