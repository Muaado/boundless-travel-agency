import React from "react";

// import * as styles from "./container.module.css";

import styled from "styled-components";

const ContainerStyles = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  .page-content {
    margin-top: 82vh;
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    /* margin: 0 10%; */
  }

  /* .promo-section {
    
  } */
  .about-us {
    display: flex;
    align-items: center;
    padding: 10rem 0;

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
  }
`;

const Container = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

export default Container;
