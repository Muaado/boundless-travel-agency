import React from "react";

import PortableText from "../portableText";
import styled from "styled-components";
// import { device } from "../styles/deviceSizes";

const AmenitiesStyles = styled.div`
  display: flex;
  flex-direction: column;
  .description {
    max-width: 80rem;
    font-size: 2.4rem;
    font-weight: 100;
    text-align: center;
    align-self: center;
    padding: 5rem 0;

    line-height: 3.6rem;
  }
  ul {
    align-self: center;
    width: fit-content;

    align-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    li {
      /* border-right: 1px solid #000; */
      /* padding: 0 1rem; */
      text-align: center;

      &:nth-of-type(1),
      &:nth-of-type(4) {
        border-right: 1px solid var(--grey);
        padding-right: 1rem;
        text-align: right;
      }
      &:nth-of-type(3),
      &:last-of-type {
        border-left: 1px solid var(--grey);
        padding-left: 1rem;
        text-align: left;
      }
    }
  }
`;

const Amenities = ({
  locationAtoll,
  numberOfBars,
  numberOfRestaurants,
  numberOfRooms,
  resortTransferType,
  timeToAirport,
  _rawDescription,
}) => {
  return (
    <AmenitiesStyles>
      <div className="description">
        <PortableText blocks={_rawDescription} />
      </div>
      <ul className="amenties">
        <li>No of rooms: {numberOfRooms} </li>
        <li>Restaurants: {numberOfRestaurants}</li>
        <li> No of bars: {numberOfBars}</li>
        <li>Location: {locationAtoll} </li>
        <li>Time to airport: {timeToAirport}</li>
        <li>
          Transfers:{" "}
          {resortTransferType?.map(
            (type, index) =>
              `${type.transferType}${
                index + 1 !== resortTransferType.length ? "/" : ""
              }`
          )}
        </li>
      </ul>
    </AmenitiesStyles>
  );
};

export default Amenities;
