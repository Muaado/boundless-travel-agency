import React from "react";

import Image from "gatsby-plugin-sanity-image";
import PortableText from "../portableText";

import styled from "styled-components";
// import { device } from "../styles/deviceSizes";

const SpaStyles = styled.div`
  /* margin-top: 14rem; */

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: 70rem;
  /* height: max-content; */
  .container {
    display: flex;
    align-self: center;
    justify-content: center;
    max-width: 1400px;
    padding-bottom: 5rem;
    height: 70rem;
    .left-section {
      /* height: 100rem; */
      width: 80rem;
      padding-top: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5rem 0;

      p {
        padding-left: 5rem;
        max-width: 60rem;
      }
    }
    .right-section {
      height: 100%;
      padding-top: 10rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  &:after {
    content: "";
    background: #c0a7772b;
    width: 100%;
    height: 100%;
    position: absolute;
    right: -55vw;
  }

  background: #fff6f6;
  h2 {
    width: max-content;
    text-transform: capitalize;
    z-index: 100;
  }
  p {
    bottom: 0;
  }
  .image-web {
    height: 40rem;
    width: 70rem;
    position: relative;
    right: -5rem;
    top: -2rem;
    z-index: 100;
  }

  .image-thumb {
    max-width: 30rem;
    z-index: 100;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Spa = ({ spa, className }) => {
  return (
    <SpaStyles className={className}>
      <div className="container">
        <div className="left-section">
          <div className="image-web">
            <Image {...spa.imageWeb} alt={spa.imageWeb.alt} />
          </div>
          <PortableText blocks={spa._rawDescription} />
        </div>
        <div className="right-section">
          <h2>{spa.name}</h2>
          <div className="image-thumb">
            <Image {...spa.imageThumb} alt={spa.imageThumb.alt} />
          </div>
        </div>
      </div>
    </SpaStyles>
  );
};

export default Spa;
