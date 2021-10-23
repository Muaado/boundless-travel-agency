import React from "react";
import styled from "styled-components";

import Image from "gatsby-plugin-sanity-image";

import PersonalizedService from "../../assets/icons/whyBoundlessIcons/service.svg";
import PhoneService from "../../assets/icons/whyBoundlessIcons/phoneService.svg";
import Properties from "../../assets/icons/whyBoundlessIcons/properties.svg";
import Concierge from "../../assets/icons/whyBoundlessIcons/concierge.svg";
import Bellboy from "../../assets/icons/whyBoundlessIcons/bellboy.svg";
import Eclipse from "../../assets/icons/whyBoundlessIcons/eclipse.svg";
import { device } from "../../styles/deviceSizes";

const WhyBoundlessSectionStyles = styled.div`
  margin-bottom: 10rem;
  perspective: 2px;
  height: 75vh;
  overflow-x: hidden;
  overflow-y: auto;

  position: relative;

  .parallax {
    &__layer {
      height: 105%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    &__layer--base {
      transform: translateZ(0);
    }

    &__layer--back {
      width: fit-content;
      /* height: 90vh; */
      left: 50%;
      top: 0%;
      margin-bottom: 10rem;
      transform: translateZ(-1px);

      @media ${device.laptopL} {
        left: 30%;
      }
      @media ${device.laptopM} {
        left: 20%;
      }

      @media ${device.tablet} {
        top: -15%;
        left: 0%;
      }
    }
  }

  .content {
    /* margin-top: 12rem;
    /* display: flex; */
    /* flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0%;
    left: 58%;
    color: #fff; */
    /* transform: translateZ(1px); */
    /*
    

    
/*    */

    /* transform: translateZ(3px); */

    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      align-self: center;
      margin-bottom: 7rem;
      color: #fff;
      text-transform: lowercase;
      max-width: 70rem;

      font-size: 7rem;
      text-align: center;
      font-weight: 100;
    }

    ul {
      /* height: 100vh; */
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 4rem;
      text-align: center;
      p {
        font-size: 3.2rem;
        color: #fff;
      }
      li {
        svg {
          width: 10rem;
          margin-bottom: 2rem;

          @media ${device.laptopM} {
            width: 8rem;
          }
        }
      }
    }
  }
`;

const WhyBoundlessSection = ({ whyBoundlessImage }) => {
  return (
    <WhyBoundlessSectionStyles className="parallax-container">
      <div className="image-container parallax__layer parallax__layer--base">
        <Image {...whyBoundlessImage} alt={whyBoundlessImage.alt} />
      </div>

      {/* <div className="dot">.</div> */}
      <div className="content foreground parallax__layer parallax__layer--back">
        <h2>why travel with boundless</h2>
        <ul>
          <li>
            <PersonalizedService />
            <p>Personalized Service</p>
          </li>
          <li>
            <PhoneService />
            <p>24/7 Help Line</p>
          </li>
          <li>
            <Properties />
            <p>Hand picked properties</p>
          </li>
          <li>
            <Concierge />
            <p>Our Local Concierge</p>
          </li>
          <li>
            <Bellboy />
            <p>Our Local Concierge</p>
          </li>
          <li>
            <Eclipse />
            <p>Price match Gauranteed</p>
          </li>
        </ul>
      </div>
    </WhyBoundlessSectionStyles>
  );
};

export default WhyBoundlessSection;
