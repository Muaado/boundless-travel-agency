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
  position: relative;
  margin-bottom: 10rem;
  @media ${device.tablet} {
    margin-bottom: 5rem;
  }
  p {
    color: #fff;
  }
  .image-container {
    height: 80vh;
    min-height: 50rem;
    img {
      object-position: top;
      @media ${device.tablet} {
        object-position: top;
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10%;
    left: 50%;
    color: #fff;
    @media ${device.laptopL} {
      left: 40%;
    }
    @media ${device.laptopM} {
      left: 30%;
    }
    @media ${device.tablet} {
      left: 0%;
    }
    h2 {
      margin-bottom: 3rem;
      color: #fff;
      text-transform: lowercase;
      max-width: 50rem;
      text-align: center;
      font-weight: 100;
      font-size: 4rem;

      /* @media ${device.laptopM} {
      } */
    }
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
      text-align: center;

      p {
        font-size: 2.4rem;
        color: #fff;

        @media ${device.laptopM} {
          gap: 1rem;
        }

        @media ${device.tablet} {
          font-size: 1.6rem;
        }
      }
      li {
        svg {
          width: 7rem;
          margin-bottom: 2rem;
          @media ${device.laptopM} {
            margin-bottom: 1rem;
            width: 7rem;
          }

          @media ${device.laptop} {
            width: 6rem;
          }

          @media ${device.tablet} {
            width: 6rem;
          }
          @media ${device.mobileL} {
            width: 4rem;
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
        {whyBoundlessImage && whyBoundlessImage.asset && (
          <Image {...whyBoundlessImage} alt={whyBoundlessImage.alt} />
        )}
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
