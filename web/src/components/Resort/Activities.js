import React from "react";

import Image from "gatsby-plugin-sanity-image";
import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

const ActivitiesStyles = styled.div`
  margin: 10rem 0;
  text-align: center;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  @media ${device.laptopL} {
    /* padding: 0; */
  }

  h2 {
    margin-bottom: 3rem;
    letter-spacing: 1rem;
  }
  p {
    margin-bottom: 5rem;
    width: 70rem;
    color: var(--grey);
    align-self: center;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.6rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Activities = ({ activities }) => {
  return (
    <ActivitiesStyles>
      <h2>Activities</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <ul>
        {activities.nodes.map(({ imageThumb }) => (
          <li key={imageThumb.alt}>
            <Image {...imageThumb} alt={imageThumb.alt} />
          </li>
        ))}
      </ul>
    </ActivitiesStyles>
  );
};

export default Activities;
