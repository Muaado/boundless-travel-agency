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

  .height-80vh {
    height: 80vh;
    &:before {
      height: inherit;
    }
  }

  .second-image {
    /* margin-bottom: 5rem; */
    /* margin: 20rem -14%; */
    /* margin-bottom: 10rem; */
    position: relative;
    height: 70rem;
    color: #fff;
    @media ${device.tablet} {
      height: 30rem;
      /* margin: 20rem 0; */
      /* margin-bottom: 5rem; */
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
