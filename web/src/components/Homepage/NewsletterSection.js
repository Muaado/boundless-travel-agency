import React from "react";
import Image from "gatsby-plugin-sanity-image";
import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

export const NewsLetterStyles = styled.div`
  /* margin: 0 -12%; */
  margin-bottom: 10rem;
  position: relative;
  /* height: 70rem; */
  color: #fff;
  @media ${device.laptopL} {
    /* margin: 20rem 0; */
    margin-bottom: 10rem;
  }

  @media ${device.tablet} {
    height: 50rem;
    margin-bottom: 5rem;
  }

  h2 {
    position: absolute;
    top: 20%;
    right: 15%;
    color: #fff;
    /* font-size: 4rem; */
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    @media ${device.tablet} {
      right: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  .container {
    display: flex;
    width: 50%;

    @media ${device.tablet} {
      width: 90%;
    }
    input {
      width: 100%;
      padding: 0 2rem;
    }
    .btn {
      background: var(--primary);
      @media ${device.laptopM} {
        padding: 1.2rem 2rem;
      }
    }
  }

  form {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem 4rem;

    align-items: center;
    background: rgba(0, 0, 0, 0.45);
    width: 80vw;
    display: flex;
    justify-content: space-between;

    @media ${device.tabletL} {
      padding: 1.2rem 2rem;
      width: 90vw;
    }
    @media ${device.tablet} {
      width: 70vw;

      flex-direction: column;
    }

    @media ${device.mobileXL} {
      width: 100vw;
    }
    h3 {
      z-index: 100;
      font-style: italic;
      position: unset;
      font-size: 3.2rem;
      font-weight: normal;
      width: max-content;
      color: #fff;

      @media ${device.laptopM} {
        font-size: 2.4rem;
      }
      @media ${device.tablet} {
        margin-bottom: 1rem;
      }
      /* margin-right: 20rem; */
    }
  }
`;

const NewsletterSection = ({ site }) => {
  return (
    <NewsLetterStyles>
      <h2>{site.newsLetterTitle}</h2>
      <Image
        {...site.newsLetterBackground}
        alt={site.newsLetterBackground?.alt}
      />

      <form className="form">
        <h3>Subscribe to our newsletter</h3>
        <div className="container">
          <input placeholder="Enter your email here" />
          <button className="btn">Subscribe</button>
        </div>
      </form>
    </NewsLetterStyles>
  );
};

export default NewsletterSection;
