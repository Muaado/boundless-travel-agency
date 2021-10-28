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
  min-height: 70rem;
  padding: 2rem;

  background-size: 100vw;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* height: max-content; */
  .container {
    display: flex;
    align-self: center;
    justify-content: center;
    max-width: 1400px;
    /* padding-bottom: 20rem; */
    /* padding: 2rem; */
    min-height: 70rem;
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
      /* height: 100%; */
      padding: 6rem 0;
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
    justify-self: flex-end;
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
    <SpaStyles
      className={className}
      // data-aos="fade-up"
      // data-aos-delay="50"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
    >
      <div className="container">
        <div className="left-section">
          <div className="image-web">
            {spa.imageWeb && <Image {...spa.imageWeb} alt={spa.imageWeb.alt} />}
          </div>
          <PortableText blocks={spa._rawDescription} />
        </div>
        <div className="right-section">
          <h2>{spa.name}</h2>
          <div className="image-thumb">
            {spa.imageThumb && (
              <Image {...spa.imageThumb} alt={spa.imageThumb.alt} />
            )}
          </div>
        </div>
      </div>
    </SpaStyles>
  );
};

export default Spa;
