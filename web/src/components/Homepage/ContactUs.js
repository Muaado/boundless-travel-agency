import React from "react";
import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

import Image from "gatsby-plugin-sanity-image";
import PhoneIcon from "../../assets/icons/phone.svg";
import EmailIcon from "../../assets/icons/email.svg";

const ContactUsSection = styled.div`
  margin-bottom: 18rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 2rem;
  padding: 0 10%;
  @media ${device.laptopL} {
    padding: 0 5%;
  }

  .links {
    margin-bottom: 4rem;
    display: flex;
    a {
      display: flex;
      align-items: center;
      &:first-of-type {
        margin-right: 5rem;
      }

      svg {
        margin-right: 1rem;
      }
    }
  }
  p {
    margin-bottom: 2.5rem;
  }
  .contact-people {
    margin-bottom: 4rem;
    display: flex;

    li {
      width: 12rem;
      &:not(:last-of-type) {
        margin-right: 2.5rem;
      }
    }
  }

  .hours {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    ul {
      margin-bottom: 4rem;
      width: 50rem;
      @media ${device.laptopM} {
        width: 42rem;
      }
      li {
        display: flex;
        justify-content: space-between;
      }
    }
    p {
      color: var(--grey1);
      font-style: italic;
    }
  }
`;

export const ContactUs = ({ contactUs }) => {
  const { email, phoneOne, contactPeople, hours, businessHoursDescription } =
    contactUs;
  return (
    <ContactUsSection>
      <div>
        <p>Need a little help?</p>
        <p>Our luxury hotel specialists are only a call or click away.</p>
        <div className="links">
          <a href={`tel:${phoneOne}`}>
            <PhoneIcon />
            {phoneOne}
          </a>
          <a href={`mailto:${email}`}>
            <EmailIcon />
            Send us an email
          </a>
        </div>
        <ul className="contact-people">
          {contactPeople.map(({ image }) => (
            <li key={image._id}>
              <Image {...image} alt={image.alt} />
            </li>
          ))}
        </ul>
        <p>Our experience curators are only a call or click away.</p>
      </div>
      <div className="hours">
        <ul>
          {hours.map(({ days, hours }) => (
            <li key={days}>
              <span>{days}</span>
              <span>{hours}</span>
            </li>
          ))}
        </ul>
        <p>{businessHoursDescription}</p>
      </div>
    </ContactUsSection>
  );
};
