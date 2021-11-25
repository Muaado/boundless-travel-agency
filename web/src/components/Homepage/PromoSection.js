import React from "react";
import Image from "gatsby-plugin-sanity-image";

import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

export const PromoSectionStyles = styled.div`
  /* width: 100vw; */
  /* margin: 0 -14%; */
  position: relative;
  height: 60rem;
  color: #fff;

  @media ${device.laptopL} {
    margin: 0;
  }

  @media ${device.tabletL} {
    margin: 0;
  }

  @media ${device.tablet} {
    height: 50rem;
  }

  @media ${device.mobileXL} {
    height: 40rem;
  }

  img {
    height: 100%;
    width: 100%;

    object-fit: contain;
    @media ${device.laptopM} {
      object-position: right;
    }
  }

  h2 {
    /* z-index: 100; */
    width: 45rem;
    position: absolute;
    top: 45%;
    left: 75%;
    transform: translate(-50%, -50%);

    color: #fff;
    text-align: center;
    letter-spacing: 1rem;
    /* font-family: "Playfair display"; */
    /* font-size: 4.8rem; */
    text-transform: lowercase;
    font-weight: normal;

    @media ${device.tabletL} {
      left: 70%;
    }
    @media ${device.tablet} {
      left: 50%;
      top: 35%;
      width: unset;
      text-transform: uppercase;

      /* position: relative; */
    }
  }
  p {
    width: 45rem;
    position: absolute;
    top: 75%;
    left: 75%;
    transform: translate(-50%, -50%);
    color: #fff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media ${device.tabletL} {
      left: 70%;
    }
    @media ${device.tablet} {
      left: 50%;
      width: 100%;
      padding: 0 1.5rem;
    }
  }
`;

const PromoSection = ({ image }) => {
  return (
    <PromoSectionStyles
      className="parallax"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h2 className="parallax__layer--back">we specialise in the maldives</h2>
      <p className="parallax__layer--back">
        hand-picked portfolio of the world’s most luxurious resorts and Villas
        in the most stunning locations.
      </p>
      {/* <div > */}
      {image && image.asset && (
        <Image
          className="parallax__layer--base"
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
      )}
      {/* </div> */}
    </PromoSectionStyles>
  );
};

export default PromoSection;
