import React from "react";
import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

const TailorMadeStyles = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 10rem;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }
  @media ${device.laptopL} {
    padding: 0 10%;
  }
  .tailor-made {
    &__line {
      margin-top: 2rem;
      width: 100%;
      height: 0.3rem;
      border-radius: 10px;
      background: #000;
    }

    &__step {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      text-align: center;

      position: relative;

      &-num {
        background: var(--darkRed);
        width: fit-content;
        color: #fff;
        font-size: 2rem;
        padding: 2rem;
        border-radius: 50%;
        line-height: 0.7;
      }

      &-title {
        font-size: 2.4rem;
        font-weight: bold;
        color: #000;
        text-transform: capitalize;
      }
      &-text {
        width: 30rem;
      }
    }
  }
`;

const TailorMade = () => {
  return (
    <TailorMadeStyles className="tailor-made">
      <h2>100% Tailor-Made Holidays</h2>
      <ul>
        <li className="tailor-made__step">
          <p className="tailor-made__step-num">1</p>
          <h3 className="tailor-made__step-title">Understanding Your Needs</h3>
          <p className="tailor-made__step-text">
            Our team of destination experts will start by getting to know you
            and your unique requirements for your holiday
          </p>
        </li>
        <li className="tailor-made__line"></li>
        <li className="tailor-made__step">
          <p className="tailor-made__step-num">2</p>
          <h3 className="tailor-made__step-title">Personalization</h3>
          <p className="tailor-made__step-text">
            We work with you to build an ultra-personalized holiday itinerary
            with your choice of accommodation, experiences and activities
          </p>
        </li>
        <li className="tailor-made__line"></li>
        <li className="tailor-made__step">
          <p className="tailor-made__step-num">3</p>
          <h3 className="tailor-made__step-title">Our Success</h3>
          <p className="tailor-made__step-text">
            All of our holidays include little extras designed to make a vig
            difference to your trip, from fast-tracking you through airport
            check-in and security to our network of local concierges
          </p>
        </li>
      </ul>
    </TailorMadeStyles>
  );
};

export default TailorMade;
