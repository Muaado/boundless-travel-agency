import React from "react";
import Image from "gatsby-plugin-sanity-image";

import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

export const PromoSectionStyles = styled.div`
  /* width: 100vw; */
  margin: 0 -14%;
  position: relative;
  height: 60rem;
  color: #fff;

  @media ${device.laptopL} {
    margin: 0;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  h2 {
    width: 45rem;
    position: absolute;
    top: 45%;
    left: 75%;
    transform: translate(-50%, -50%);

    color: #fff;
    text-align: center;
    letter-spacing: 1rem;
    font-family: "Playfair display";
    font-size: 4.8rem;
  }
  p {
    width: 45rem;
    position: absolute;
    top: 75%;
    left: 75%;
    transform: translate(-50%, -50%);

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const PromoSection = ({ image }) => {
  return (
    <PromoSectionStyles>
      <h2>we specialise in the maldives</h2>
      <p>
        hand-picked portfolio of the world’s most luxurious resorts and Villas
        in the most stunning locations.
      </p>
      <Image
        {...image}
        // tell Sanity how large to make the image (does not set any CSS)
        width={1440}
        // style it how you want it
        style={{
          // width: "100%",
          // height: "100%",
          objectFit: "cover",
        }}
        // fluid={imageUrlFor(buildImageObj(site.image))
        //   .width(1200)
        //   .height(Math.floor((9 / 16) * 1200))
        //   .fit("crop")
        //   .auto("format")
        //   .url()}
        alt={image.alt}
      />
    </PromoSectionStyles>
  );
};

export default PromoSection;
