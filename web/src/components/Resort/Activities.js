import React from "react";

import Image from "gatsby-plugin-sanity-image";
import styled from "styled-components";
import { device } from "../../styles/deviceSizes";
import { Link } from "gatsby";
import { getActivityUrl } from "../../lib/helpers";
import CarouselButton from "../Ui/CarouselButton";
import Carousel from "nuka-carousel";

// import { Placeholder } from "gatsby-plugin-image";
import Placeholder from "../../assets/placeholder.svg";
console.log(Placeholder);

const ActivitiesStyles = styled.div`
  margin: 10rem 0;
  text-align: center;
  padding: 0 15%;
  display: flex;
  flex-direction: column;
  @media ${device.laptopL} {
    /* padding: 0; */
  }
  @media ${device.tablet} {
    padding: 0 1.5rem;
  }

  h2 {
    margin-bottom: 3rem;
    letter-spacing: 1rem;
  }
  p {
    margin-bottom: 5rem;
    width: 70rem;
    color: var(--grey);
    align-self: center;
    @media ${device.laptop} {
      width: unset;
    }
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.6rem;
    width: 100%;

    @media ${device.laptop} {
      grid-template-columns: 1fr 1fr;
    }
    @media ${device.tablet} {
      display: none;
      /* grid-template-columns: 1fr; */
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .item {
    position: relative;
    /* width: 10rem; */

    transition: all 2s;
    max-height: 35rem;

    &__carousel {
      max-height: unset;
      height: 100%;
    }
    a {
      height: 100%;
      width: 100%;
      display: block;
    }
    p {
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: fit-content;
      color: #fff;
      font-size: 2.4rem;
    }

    &:hover {
      &:before {
        /* transform: translate(-50%, -50%); */
        content: "";
        position: absolute;
        opacity: 0.3;
        width: 100%;
        height: 100%;
        background-color: #000;
      }

      p {
        opacity: 1;
      }
    }
    p {
      opacity: 0;
    }
    @media ${device.tablet} {
      &:before {
        /* transform: translate(-50%, -50%); */
        content: "";
        position: absolute;
        opacity: 0.3;
        width: 100%;
        height: 103%;
        background-color: #000;
      }

      p {
        opacity: 1;
      }
    }
  }

  .carousel {
    display: none !important;
    min-height: 100% !important;

    @media ${device.tablet} {
      display: unset !important;
    }

    /* .slider-slide {
      height: 100% !important;
      li {
        height: inherit;
      }
    } */

    .slider-control-bottomcenter {
      bottom: -5rem !important;
      /* height: 110% !important; */
    }
  }
`;

const activitiesPlaceHolders = [1, 2, 3, 4, 5, 6];

const Activities = ({ activities }) => {
  return (
    <ActivitiesStyles
    // data-aos="fade-up"
    // data-aos-delay="50"
    // data-aos-duration="1000"
    // data-aos-easing="ease-in-out"
    >
      <h2>Activities</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <ul>
        {activities?.length
          ? activities?.map(({ name, imageThumb, resort }) => (
              <li className="item" key={imageThumb.alt}>
                {/* <Link to={getActivityUrl({ name, resortName: resort.name })}> */}
                {imageThumb && imageThumb.asset && (
                  <Image {...imageThumb} alt={imageThumb.alt} />
                )}
                <p>{name}</p>
                {/* </Link> */}
              </li>
            ))
          : activitiesPlaceHolders.map((item) => (
              <li className="item" key={item}>
                <Placeholder />
                {/* {item} */}
              </li>
            ))}
      </ul>

      <Carousel
        speed={1000}
        className="carousel"
        // renderCenterRightControls={({ nextSlide }) => (
        //   <CarouselButton onClick={nextSlide} chevronRight={true} />
        // )}
        // renderCenterLeftControls={({ previousSlide }) => (
        //   <CarouselButton onClick={previousSlide} />
        // )}
      >
        {activities?.map(({ name, imageThumb, resort }) => (
          <li className="item item__carousel" key={imageThumb.alt}>
            {/* <Link to={getActivityUrl({ name, resortName: resort.name })}> */}
            {imageThumb && imageThumb.asset && (
              <Image {...imageThumb} alt={imageThumb.alt} />
            )}
            <p>{name}</p>
            {/* </Link> */}
          </li>
        ))}
      </Carousel>
    </ActivitiesStyles>
  );
};

export default Activities;
