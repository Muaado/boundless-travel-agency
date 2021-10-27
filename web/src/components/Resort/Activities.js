import React from "react";

import Image from "gatsby-plugin-sanity-image";
import styled from "styled-components";
import { device } from "../../styles/deviceSizes";
import { Link } from "gatsby";
import { getActivityUrl } from "../../lib/helpers";

const ActivitiesStyles = styled.div`
  margin: 10rem 0;
  text-align: center;
  padding: 0 15%;
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
    width: 100%;
    li {
      position: relative;
      /* width: 10rem; */

      transition: all 1s;
      max-height: 35rem;
      a {
        height: 100%;
        width: 100%;
        display: block;
      }
      p {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: fit-content;
        color: #fff;
        font-size: 2.4rem;
      }

      &:hover {
        a {
          &:before {
            /* transform: translate(-50%, -50%); */
            content: "";
            position: absolute;
            opacity: 0.3;
            width: 100%;
            height: 100%;
            background-color: #000;
          }
        }
        p {
          opacity: 1;
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Activities = ({ activities }) => {
  return (
    <ActivitiesStyles
    // data-aos="fade-up"
    // data-aos-delay="50"
    // data-aos-duration="1000"
    // data-aos-easing="ease-in-out"
    >
      <h2>Activities</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <ul>
        {activities.nodes.map(({ name, imageThumb, resort }) => (
          <li key={imageThumb.alt}>
            <Link to={getActivityUrl({ name, resortName: resort.name })}>
              {imageThumb && <Image {...imageThumb} alt={imageThumb.alt} />}
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </ActivitiesStyles>
  );
};

export default Activities;
