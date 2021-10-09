import React from "react";
import Image from "gatsby-plugin-sanity-image";

import styled from "styled-components";

const PromoSectionStyles = styled.div`
  width: 100vw;
  position: relative;
  height: 60rem;
  color: #fff;
  left: ${(props) => {
    return `-${props.windowWidth - 1440}px`;
  }};
  width: ${(props) => {
    console.log(props);
    return `calc(1440px + ${(props.windowWidth - 1440) * 2}px)`;
  }};

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  h2 {
    width: 45rem;
    text-align: center;
    letter-spacing: 1rem;
    font-family: "Playfair display";
    font-size: 4.8rem;
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
  p {
    width: 45rem;
    position: absolute;
    top: 80%;
    left: 70%;
    transform: translate(-50%, -50%);

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const PromoSection = ({ image }) => {
  return (
    <PromoSectionStyles windowWidth={window.innerWidth}>
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
