import React from "react";

// import * as styles from "./container.module.css";

import styled from "styled-components";
import { device } from "../styles/deviceSizes";

const ContainerStyles = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  .page-content {
    /* margin-top: 82vh; */
    position: relative;
    display: flex;
    flex-direction: column;

    width: 100vw;

    @media ${device.desktop} {
      /* width: 1440px; */
      /* padding: 0 10%; */
    }
    @media ${device.laptopL} {
      /* width: 100vw; */
      padding: 0;
    }
    /* margin: 0 10%; */
  }

  /* .promo-section {
    
  } */
  /* .about-us {
    display: flex;
    align-items: center;
    padding: 10rem 0;

    @media ${device.laptopL} {
      padding: 10rem 10%;
    }

    &__image-container {
      width: 50rem;
      height: 50rem;
      height: auto;
      margin-right: 4rem;
    }
    &__text {
      h2 {
        font-family: "Playfair display";
        text-transform: uppercase;
        font-size: 5rem;
        margin-bottom: 2rem;
        color: var(--darkGreen);
      }

      p {
        max-width: 80rem;
        margin: 2rem 0;
      }
    }
  } */

  .second-image {
    /* margin: 20rem -14%; */
    margin-bottom: 10rem;
    position: relative;
    height: 70rem;
    color: #fff;
    @media ${device.tablet} {
      /* margin: 20rem 0; */
      margin-bottom: 5rem;
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

const Container = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

export default Container;
