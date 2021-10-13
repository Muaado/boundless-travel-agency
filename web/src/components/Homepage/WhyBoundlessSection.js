import React from "react";
import styled from "styled-components";

import Image from "gatsby-plugin-sanity-image";

import PersonalizedService from "../../assets/icons/whyBoundlessIcons/service.svg";
import PhoneService from "../../assets/icons/whyBoundlessIcons/phoneService.svg";
import Properties from "../../assets/icons/whyBoundlessIcons/properties.svg";
import Concierge from "../../assets/icons/whyBoundlessIcons/concierge.svg";
import Bellboy from "../../assets/icons/whyBoundlessIcons/bellboy.svg";
import Eclipse from "../../assets/icons/whyBoundlessIcons/eclipse.svg";

const WhyBoundlessSectionStyles = styled.div`
  position: relative;
  margin-bottom: 10rem;
  .image-container {
    height: 80vh;
    img {
      object-position: top;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10%;
    left: 60%;
    color: #fff;

    h2 {
      margin-bottom: 7rem;
      color: #fff;
      text-transform: lowercase;
      max-width: 50rem;
      text-align: center;
      font-weight: 100;
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
      text-align: center;
      li {
        svg {
          width: 10rem;
          margin-bottom: 2rem;
        }
      }
    }
  }
`;

const WhyBoundlessSection = ({ whyBoundlessImage }) => {
  return (
    <WhyBoundlessSectionStyles>
      <div className="image-container">
        <Image {...whyBoundlessImage} alt={whyBoundlessImage.alt} />
      </div>

      <div className="content">
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
