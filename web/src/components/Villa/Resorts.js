import React, { useEffect, useState } from "react";
import Carousel from "nuka-carousel";
import CarouselButton from "../../components/Ui/CarouselButton";
import Image from "gatsby-plugin-sanity-image";

import useWindowSize from "../../lib/useWindowSize";
import styled from "styled-components";

const Resorts = ({ resorts }) => {
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
    const screenXL = width > 1440 && width < 1600;
    const screenXXL = width > 1600 && width < 1700;
    const screenXXXL = width > 1700;

    const slides = () => {
      if (isMobileOnly) return 1;
      if (isTablet) return 1;
      if (isTabletL) return 1.9;
      if (isSreenSM) return 2.4;
      if (isSreenLG) return 2.8;
      if (screenXL) return 3;
      if (screenXXL) return 3;
      if (screenXXXL) return 3;
      return 5;
    };
    const spacing = () => {
      // if (isMobileOnly) return 50;
      // if (isTablet) return 20;
      // return 200;
      return 20;
    };

    setNumberOfSlides(slides);
    setCellSpacing(spacing);
  }, [size]);

  return (
    <div
      className="villa__resorts"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <p className="title">
        <span>SIMILAR</span>
        {/* <span className="line"></span> */}
        <span>RESORTS</span>
      </p>
      <Carousel
        speed={1000}
        className="carousel"
        slidesToShow={numberOfSlides}
        // slidesToScroll={1}

        cellSpacing={cellSpacing}
        // renderCenterRightControls={({ nextSlide }) => (
        //   <CarouselButton onClick={nextSlide} chevronRight={true} />
        // )}
        // renderCenterLeftControls={({ previousSlide }) => (
        //   <CarouselButton onClick={previousSlide} />
        // )}
        // cellAlign="center"
        // renderBottomCenterControls={(props) => {
        //   console.log(props);
        //   return (
        //     <ul>
        //       {[...Array(props.slideCount).keys()].map((number) => (
        //         <li key={number} onClick={() => props.goToSlide(number)}>
        //           &nbsp;
        //         </li>
        //       ))}
        //     </ul>
        //   );
        // }}
        // renderBottomCenterControls={({
        //   slideCount,
        //   currentSlide,
        //   goToSlide,
        // }) => (
        //   <div className="slider-control-bottomcenter">
        //     {console.log(currentSlide)}
        //     <SliderListStyles currentSlide={currentSlide}>
        //       {[...Array(slideCount)].map((e, key) => (
        //         <li
        //           className={`${
        //             currentSlide == key ? "active" : undefined
        //           } ${key}`}
        //           key={key}
        //         >
        //           <button
        //             type="button"
        //             aria-label="slide 1 bullet"
        //             onClick={() => goToSlide(key)}
        //           >
        //             <svg width="12" height="12">
        //               <rect width="10" height="10" />
        //             </svg>
        //           </button>
        //         </li>
        //       ))}
        //     </SliderListStyles>
        //   </div>
        // )}
      >
        {resorts.length &&
          resorts.map(({ name, image }) => (
            <div
              className="carousel__node"
              // to={getResortUrl({ name })}
              key={name}
            >
              {/* <a className="carousel__node" key={name}> */}
              <div className="image-container">
                {image && image.asset && <Image {...image} alt={image.alt} />}
              </div>
              <p>{name}</p>
              {/* </a> */}
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Resorts;
// const SliderListStyles = styled.ul`
//   position: relative;
//   max-width: 7rem;
//   overflow-x: hidden;
//   top: -10px;
//   display: flex;
//   margin: 0px;
//   padding: 0px;
//   list-style-type: none;

//   li {
//     position: relative;
//     right: ${(props) => `${props.currentSlide + 1}vw`};
//     &.active {
//       right: ${(props) => `${props.currentSlide}vw`};
//     }
//     /* top: 0; */

//     button {
//       cursor: pointer;
//       opacity: 1;
//       background: transparent;
//       border: none;
//       fill: white;
//     }
//   }

//   .active {
//     /* position: absolute;
//             left: 35%; */
//     button {
//       fill: #0b296c !important;
//     }
//   }
// `;
