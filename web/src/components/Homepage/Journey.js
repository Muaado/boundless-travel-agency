import React from "react";

// import { buildImageObj } from "../../lib/helpers";
// import { imageUrlFor } from "../../lib/image-url";

import Image from "gatsby-plugin-sanity-image";
import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

import Carousel from "nuka-carousel";
import { Link } from "gatsby";
import { getCollectionUrl } from "../../lib/helpers";

const JourneyStyles = styled.div`
  margin-top: 10rem;
  margin-bottom: 2rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  /* font-family: "Playfair Display"; */
  text-align: center;

  padding: 0 15%;
  /* z-index: -1; */

  width: 100%;
  /* max-width: 1440px; */
  @media ${device.laptopL} {
    padding: 0 15%;
  }
  @media ${device.laptop} {
    margin-top: 10rem;
    padding: 0 10%;
  }

  @media ${device.tablet} {
    margin-top: 7rem;
    padding: 0 1.5rem;
  }
  @media ${device.mobileXL} {
    padding: 0;
  }

  h1 {
    letter-spacing: 2rem;
    line-height: 5rem;
    color: var(--primary);
    margin-bottom: 1rem;

    @media ${device.laptop} {
      font-size: 5rem;
    }

    @media ${device.tablet} {
      font-size: 3.6rem;
      letter-spacing: unset;
      line-height: 5rem;
    }
  }

  .header {
    align-self: center;
    display: flex;
    align-items: center;

    @media ${device.tablet} {
      display: none;
    }

    li {
      padding: 0 2rem;
      text-transform: uppercase;
      &:not(:last-of-type) {
        border-right: 1px solid #000;
      }
    }
  }

  .images {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    /* grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 30rem; */

    gap: 1rem;

    a {
      position: relative;
      /* height: 40rem;
      width: 40rem; */
      height: 35rem;
      img {
        z-index: -1;
      }
      /* width: 40rem; */
      p {
        z-index: 1;
        color: #fff;
        position: absolute;
        text-transform: uppercase;

        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
          0px 4px 4px rgba(0, 0, 0, 0.25);

        /* top: 90%; */
        top: 90%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);

        @media ${device.laptopM} {
        }
      }
      grid-column: 1 / span;
      &:first-of-type {
        grid-column: 1/4;
      }
      &:nth-of-type(2) {
        grid-column: 4/8;
      }

      &:nth-of-type(3) {
        grid-column: 1/3;
      }
      &:nth-of-type(4) {
        grid-column: 3/5;
      }
      &:nth-of-type(5) {
        grid-column: 5/8;
      }
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      position: relative;
    }
  }

  .carousel {
    margin-top: 4rem;
    .slider-slide,
    .slider-list {
      @media ${device.tablet} {
        height: 35rem !important;
      }
      @media ${device.mobileXL} {
        height: 25rem !important;
      }
    }

    .slider-control-bottomcenter {
      bottom: -5rem !important;
    }
    &__image-container {
      @media ${device.tablet} {
        height: 35rem !important;
      }
      @media ${device.mobileXL} {
        height: 25rem !important;
      }

      p {
        position: absolute;
        /* top: 90%; */
        bottom: 0;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);

        color: #fff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
          0px 4px 4px rgba(0, 0, 0, 0.25);
      }
      img {
        object-position: center;
      }
    }
  }
`;

const Journey = ({ collections }) => {
  const windowGlobal = typeof window !== "undefined";

  let windowWidth = 1440;

  if (windowGlobal) {
    windowWidth = window.innerWidth;
  }
  return (
    <JourneyStyles
    // data-aos="fade-up"
    // data-aos-delay="50"
    // data-aos-duration="1000"
    // data-aos-easing="ease-in-out"
    >
      <h1>Start your journey</h1>
      {/* <ul className="header">
        <li>most popular</li>
        <li>experiences</li>
        <li>by traveler</li>
        <li>unique</li>
        <li>view all</li>
      </ul> */}

      {windowWidth >= 805 ? (
        <ul className="images">
          {collections.edges
            .sort((a, b) => a.node.rank - b.node.rank)
            .map(({ node }) => (
              <Link
                to={getCollectionUrl({ name: node.name, type: node.type })}
                className="clickable"
                key={node.name}
              >
                <p>{node.name}</p>

                {node.imageThumb && node.imageThumb.asset && (
                  <Image {...node.imageThumb} alt={node.imageThumb.alt} />
                )}
              </Link>
            ))}
        </ul>
      ) : (
        <Carousel
          speed={1000}
          className="carousel"
          slidesToShow={1}
          disableEdgeSwiping
          dragging
          // easing
          // animation=""
          // cellSpacing={cellSpacing}
          renderCenterRightControls={() => ""}
          renderCenterLeftControls={() => ""}
        >
          {collections.edges
            .sort((a, b) => a.node.rank - b.node.rank)
            .map(({ node }) => (
              <Link
                key={node.alt}
                className="carousel__image-container clickable"
                to={getCollectionUrl({ name: node.name, type: node.type })}
              >
                <p>{node.name}</p>
                {node.imageThumb && node.imageThumb.asset && (
                  <Image {...node.imageThumb} alt={node.imageThumb.alt} />
                )}
              </Link>
            ))}
        </Carousel>
      )}
    </JourneyStyles>
  );
};

export default Journey;
