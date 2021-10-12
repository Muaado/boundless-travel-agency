import React, { useEffect, useState } from "react";

import Carousel from "nuka-carousel";
import PortableText from "../portableText";

import useWindowSize from "../../lib/useWindowSize";

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
    <div className="resort__reviews">
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
          <div className="resort__reviews__review" key={name}>
            <p>{name}</p>
            <PortableText blocks={_rawDescription} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
