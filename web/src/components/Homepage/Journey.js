import React from "react";

// import { buildImageObj } from "../../lib/helpers";
// import { imageUrlFor } from "../../lib/image-url";

import Image from "gatsby-plugin-sanity-image";
import styled from "styled-components";

const JourneyStyles = styled.div`
  margin-top: 15rem;
  margin-bottom: 2rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  font-family: "Playfair Display";
  text-align: center;

  width: 100%;
  /* max-width: 1440px; */
  h1 {
    font-size: 7rem;
    letter-spacing: 2rem;
    line-height: 10rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  .header {
    align-self: center;
    display: flex;
    align-items: center;

    li {
      padding: 0 2rem;
      text-transform: uppercase;
      &:not(:last-of-type) {
        border-right: 1px solid #000;
      }
    }
  }

  .images {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    /* grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 30rem; */

    gap: 1rem;

    li {
      position: relative;
      /* height: 40rem;
      width: 40rem; */
      height: 40rem;
      /* width: 40rem; */
      p {
        z-index: 100;
        color: #fff;
        position: absolute;
        text-transform: uppercase;

        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
          0px 4px 4px rgba(0, 0, 0, 0.25);

        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      grid-column: 1 / span;
      &:first-of-type {
        grid-column: 1/4;
      }
      &:nth-of-type(2) {
        grid-column: 4/8;
      }

      &:nth-of-type(3) {
        grid-column: 1/3;
      }
      &:nth-of-type(4) {
        grid-column: 3/5;
      }
      &:nth-of-type(5) {
        grid-column: 5/8;
      }
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      position: relative;
    }
  }
`;

const Journey = ({ collections }) => {
  return (
    <JourneyStyles>
      <h1>Start your journey</h1>
      <ul className="header">
        <li>most popular</li>
        <li>experiences</li>
        <li>by traveler</li>
        <li>unique</li>
        <li>view all</li>
      </ul>

      <ul className="images">
        {collections.edges
          .sort((a, b) => a.node.rank - b.node.rank)
          .map(({ node }) => (
            <li key={node.name}>
              <p>{node.name}</p>
              {console.log(node.rank, node.name)}
              <Image
                {...node.imageThumb}
                // src={imageUrlFor(buildImageObj(node.imageThumb))
                //   .width(1200)
                //   .height(Math.floor((9 / 16) * 1200))
                //   .fit("crop")
                //   .auto("format")
                //   .url()}
                alt={node.imageThumb.alt}
              />
            </li>
          ))}
      </ul>
    </JourneyStyles>
  );
};

export default Journey;
