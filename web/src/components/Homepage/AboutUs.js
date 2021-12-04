import React from "react";
import Image from "gatsby-plugin-sanity-image";
import PortableText from "../Ui/portableText";

import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

const AboutUsSectionStyles = styled.div`
  display: flex;
  align-items: center;
  padding: 10rem 15%;

  @media ${device.laptopL} {
    padding: 5rem 10%;
  }

  @media ${device.tablet} {
    padding: 5rem 1.5rem;
  }
  .about-us {
    &__image-container {
      width: 50rem;
      height: 50rem;
      height: auto;
      margin-right: 4rem;

      @media ${device.tabletL} {
        display: none;
      }
    }
    &__text {
      h2 {
        /* font-family: "Playfair display"; */
        text-transform: uppercase;
        /* font-size: 5rem; */

        margin-bottom: 2rem;
        color: var(--darkGreen);
        text-align: left !important;
        @media ${device.tabletL} {
          /* text-align: center !important; */
        }
      }

      p {
        max-width: 80rem;
        margin: 2rem 0;
      }
    }
  }
`;

const AboutUs = ({ aboutUs }) => {
  return (
    <AboutUsSectionStyles
      className="about-us"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="about-us__image-container">
        {aboutUs.image && aboutUs.image.asset && (
          <Image
            {...aboutUs.image}
            // tell Sanity how large to make the image (does not set any CSS)
            width={500}
            // style it how you want it

            alt={aboutUs.image.alt}
          />
        )}
      </div>
      <div className="about-us__text">
        <h2>{aboutUs.title}</h2>

        {aboutUs._rawDescription && (
          <PortableText
            className="about-us__text-block"
            blocks={aboutUs._rawDescription}
          />
        )}
        {/* <p>{}</p> */}
      </div>
    </AboutUsSectionStyles>
  );
};

export default AboutUs;
