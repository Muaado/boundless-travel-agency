import React from "react";
import styled from "styled-components";

import LogoIcon from "../assets/logo.svg";
import { device } from "../styles/deviceSizes";

const FooterStyles = styled.footer`
  background: var(--lightOrange);
  padding: 10rem 15%;

  .header-section {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
    padding-bottom: 4rem;
    @media ${device.laptopM} {
      flex-direction: column;
    }
  }

  .form {
    /* dis */

    .container {
      display: flex;
    }

    label {
      margin-top: 3rem;

      color: #fff;
      display: flex;
      flex-direction: column;

      p {
        margin-bottom: 1rem;
      }
    }

    .input-container {
      display: flex;
      @media ${device.laptop} {
        flex-direction: column;
      }
    }

    input {
      padding: 2rem 1.5rem;
      width: 30rem;
      border-radius: 10px;
      margin-right: 5rem;
      border: none;
    }

    button {
      border-radius: 10px;
    }
  }

  p {
    color: #fff;
  }

  /* svg {
    width: 20rem;
    height: 20rem;
    path {
      width: 20rem;
      height: 20rem;
    }
  } */
`;

const Footer = () => {
  return (
    <FooterStyles>
      <div className="header-section">
        <LogoIcon />

        <form className="form">
          <p>Join our newsletter</p>
          <div className="container">
            <label>
              <p>Your email</p>
              <div className="input-container">
                <input placeholder="Enter your email here" />
                <button className="btn">Subscribe</button>
              </div>
            </label>
          </div>
        </form>
      </div>

      <div>
        <p>Copyright Boundless Maldives</p>
      </div>
    </FooterStyles>
  );
};

export default Footer;
