import React from "react";
import styled from "styled-components";

import LogoIcon from "../assets/logo.svg";
import { device } from "../styles/deviceSizes";
import PhoneIcon from "../assets/icons/phone.svg";
import EmailIcon from "../assets/icons/email.svg";
import Location from "../assets/icons/location.svg";
import { Logo } from "./header";

const FooterStyles = styled.footer`
  background: var(--lightOrange);
  padding: 10rem 15%;

  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
    padding: 10rem 1.5rem;
  }

  .header-section {
    display: flex;
    justify-content: space-between;
    /* border-bottom: 1px solid #fff; */
    /* padding-bottom: 4rem; */
    @media ${device.laptop} {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  .logo {
    width: 14rem;
    height: 17rem;
    a {
      width: 14rem;
      height: 17rem;

      img {
        object-fit: contain;
      }
    }
  }

  .form {
    /* dis */
    @media ${device.laptop} {
      display: none;
    }

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

  .bottom-section {
    margin-top: 2rem;

    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    @media ${device.laptop} {
      flex-direction: column-reverse;
      align-items: center;
      p {
        margin-top: 2rem;
      }
    }

    p {
      font-size: 1.6rem;
    }

    ul {
      display: flex;
      gap: 2rem;

      @media ${device.laptop} {
        margin-top: 2rem;
        flex-direction: column;
        align-items: center;
      }

      li {
        display: flex;
        align-items: center;
        svg {
          margin-right: 1rem;
        }
      }
    }

    svg {
      path {
        fill: #fff;
      }
    }
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

const Footer = ({ logo, contactUs }) => {
  return (
    <FooterStyles>
      <div className="header-section">
        <Logo logo={logo} />
        {/* 
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
        </form> */}
      </div>

      <div className="bottom-section">
        <p>Copyright © {new Date().getFullYear()} Boundless Maldives</p>
        <ul>
          <li>
            <a>
              <Location />
              {contactUs?.address}
            </a>
          </li>
          <li>
            <a href={`tel:${contactUs?.phoneOne}`}>
              <PhoneIcon />
              {contactUs?.phoneOne}
            </a>
          </li>
          <li>
            <a href={`mailto:${contactUs?.email}`}>
              <EmailIcon />
              Send us an email
            </a>
          </li>
        </ul>
      </div>
    </FooterStyles>
  );
};

export default Footer;
