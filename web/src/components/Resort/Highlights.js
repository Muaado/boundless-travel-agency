import Carousel from "nuka-carousel";
import React from "react";
import PortableText from "../Ui/portableText";
import ChevronRight from "../../assets/icons/chevron-right.svg";
import Image from "gatsby-plugin-sanity-image";
import Placeholder from "../../assets/placeholder.svg";
import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

const HighlightsStyles = styled.div`
   margin-top: 10rem;
      margin-bottom: 10rem;
      text-align: center;
      padding: 0 15%;
      display: flex;
      flex-direction: column;
      @media ${device.laptopM} {
        padding: 0 10%;
      }
      @media ${device.tablet} {
        margin-top: 5rem;
        padding: 0 1.5rem;
      }

      .carousel {
        display: none !important;
        @media ${device.tablet} {
          display: unset !important;
        }
        .slider-slide {
          /* height: 100% !important; */
          li {
            height: unset;
          }
        }

        .slider-control-bottomcenter {
          bottom: -5rem !important;
          ul {
            height: max-content;
            li {
              height: max-content;
            }
          }
        }
      }
      h2 {
        margin-bottom: 7rem;
        /* letter-spacing: 1rem; */
      }

      ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.6rem;

        @media ${device.laptop} {
          grid-template-columns: 1fr 1fr;
        }

        @media ${device.tablet} {
          grid-template-columns: 1fr;
          display: none;
        }

        li {
          position: relative;
          height: 30rem;

          @media ${device.tablet} {
            height: 30vh;

          }
          /* 
          width: 30rem; */
          &:hover {
            transition: all 0.3s;

            p {
              transition: all 0.3s;
              opacity: 1;
            }
            &:after {
              content: "";
              background: #000;
              left: 0;
              top: 0;
              opacity: 0.4;
              width: 100%;
              height: 100%;
              position: absolute;
              z-index: 50;
              /* right: -55vw; */
            }
          }
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      a {
        position: absolute;
        color: #fff;
        font-size: 2.2rem;
        padding: 1rem 5rem;
        
        bottom: 3rem;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #fff;
        z-index: 100;
        width: fit-content;
        display: flex;
        align-items: center;

        svg {
          margin-left: 1rem;
        }
        

        @media ${device.laptopM} {
          bottom: 0;
        }
        @media ${device.tabletL} {
          padding: 1rem 2.5rem;
        }
      }
      p {
        width: 90%;
        position: absolute;
        /* top: 20%; */
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;

        @media ${device.laptopM} {
          top: 35%
          font-size: 1.4rem;
        }
        @media ${device.tabletL} {
          font-size: 1.4rem;
        }

        opacity: 0;
        color: #fff;
        align-self: center;
        line-height: 2.4rem;
      }
    
      `;

const Highlights = ({ highlights }) => {
  return (
    <HighlightsStyles
      id="highlights"
      className="resort__highlights"
      // data-aos="fade-up"
      // data-aos-delay="50"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
    >
      <h2>Highlights</h2>

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
        {highlights.map(({ name, imageThumb, description }) => (
          <li key={imageThumb?.alt}>
            {/* <Link to={getHighlightUrl({ name, resortName: resort.name })}> */}
            <a>
              {name} <ChevronRight />
            </a>
            {/* </Link> */}
            <p>{description}</p>
            {imageThumb && imageThumb.asset && (
              <Image {...imageThumb} alt={imageThumb.alt} />
            )}
          </li>
        ))}
      </Carousel>
      <ul className="desktop-highlights">
        {highlights.length
          ? highlights.map(({ name, imageThumb, description }) => (
              <li key={imageThumb?.alt}>
                {/* <Link to={getHighlightUrl({ name, resortName: resort.name })}> */}
                <a>
                  {name} <ChevronRight />
                </a>
                {/* </Link> */}
                <p>{description}</p>
                {imageThumb && imageThumb.asset && (
                  <Image {...imageThumb} alt={imageThumb.alt} />
                )}
              </li>
            ))
          : [1, 2, 3, 4, 5, 6].map((item) => (
              <li key={item}>
                {/* {console.log("hrehreh")} */}
                <Placeholder />
              </li>
            ))}
      </ul>
    </HighlightsStyles>
  );
};

export default Highlights;
