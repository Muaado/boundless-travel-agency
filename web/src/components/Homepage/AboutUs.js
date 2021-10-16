import React from "react";
import Image from "gatsby-plugin-sanity-image";
import PortableText from "../portableText";

import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

const AboutUsSectionStyles = styled.div`
  display: flex;
  align-items: center;
  padding: 10rem 10%;
  @media ${device.tablet} {
    padding: 5rem 10%;
  }

  .about-us {
    &__image-container {
      width: 50rem;
      height: 50rem;
      height: auto;
      margin-right: 4rem;
      @media ${device.tablet} {
        display: none;
      }
    }
    &__text {
      h2 {
        font-family: "Playfair display";
        text-transform: uppercase;
        /* font-size: 5rem; */
        margin-bottom: 2rem;
        color: var(--darkGreen);
        text-align: left;
        @media ${device.tabletL} {
          text-align: center;
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
    <AboutUsSectionStyles className="about-us">
      <div className="about-us__image-container">
        <Image
          {...aboutUs.image}
          // tell Sanity how large to make the image (does not set any CSS)
          width={500}
          // style it how you want it
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          // fluid={imageUrlFor(buildImageObj(site.promoImageWeb))
          //   .width(1200)
          //   .height(Math.floor((9 / 16) * 1200))
          //   .fit("crop")
          //   .auto("format")
          //   .url()}
          alt={aboutUs.image.alt}
        />
      </div>
      <div className="about-us__text">
        <h2>{aboutUs.title}</h2>

        <PortableText
          className="about-us__text-block"
          blocks={aboutUs._rawDescription}
        />
        {/* <p>{}</p> */}
      </div>
    </AboutUsSectionStyles>
  );
};

export default AboutUs;
