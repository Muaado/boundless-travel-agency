import React from "react";
import Container from "../components/container";
import Layout from "../containers/layout";
import SEO from "../components/seo";

import { graphql } from "gatsby";
import { HeroStyles } from "../components/Homepage/styles";
import Image from "gatsby-plugin-sanity-image";
import styled from "styled-components";
import Search from "../components/Search";
import useForm from "../hooks/useForm";
import { ContactUs } from "../components/Homepage/ContactUs";

export const query = graphql`
  query EnquirePageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      newsLetterTitle
      magazinePageImage {
        ...SanityImage
        alt
      }

      contactUs {
        address
        email
        phoneOne
        contactPeople {
          name
          image {
            ...SanityImage
            alt
          }
        }
        hours {
          days
          hours
        }
        businessHoursDescription
      }
    }
    resorts: allSanityResort {
      nodes {
        name
      }
    }
    villas: allSanityVilla {
      nodes {
        name
        resort {
          name
        }
      }
    }
  }
`;

const EnquirePageStyles = styled.div`
  margin: 5rem 0;
  form {
    margin-bottom: 5rem;
    display: flex;

    h2 {
      margin-bottom: 4rem;
      font-weight: normal;
      font-size: 2rem;
      color: #fff;
      text-align: center;
    }

    & > div {
      background: var(--primary);
      padding: 3rem;
      color: #fff;
      display: flex;
      flex-direction: column;
      &:first-of-type {
        border-right: 1px solid #fff;
      }
    }

    .form-control {
      display: flex;
      flex-direction: column;
      width: 35vw;
      margin-bottom: 2rem;

      &.two-column {
        display: grid;
        grid-template-columns: 48% 48%;
        gap: 4%;
      }
      &.three-column {
        display: grid;
        grid-template-columns: 48% 1fr 1fr;
        gap: 4%;
      }

      label {
        text-transform: uppercase;
        font-size: 1.4rem;
      }
      input,
      select {
        width: 100%;
        padding: 1rem 1.5rem;
      }
      textarea {
        height: 15rem;
      }

      span.required {
        color: var(--red);
      }
    }
  }
`;

const Enquire = (props) => {
  const { data, errors } = props;
  const site = (data || {}).site;
  const resorts = (data || {}).resorts;
  const villas = (data || {}).villas;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const {
    values: {
      destination,
      dateOfTravel,
      duration,
      budget,
      comments,
      title,
      firstName,
      lastName,
      email,
      phoneNumber,
      adults,
      children,
    } = {},
    values,
    updateValue,
    updateValueManually,
  } = useForm({
    destination: {},
    dateOfTravel: "",
    duration: "",
    budget: "",
    comments: "",
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    adults: "",
    children: "",
  });

  console.log(values);

  return (
    <Layout {...props}>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />

      <Container>
        <HeroStyles className="height-80vh">
          <h1> {site.description}</h1>
          {data.site.magazinePageImage && (
            <Image
              {...data.site.magazinePageImage}
              alt={data.site.magazinePageImage.alt}
            />
          )}
        </HeroStyles>
        <EnquirePageStyles>
          <form
            method="post"
            action="https://getform.io/f/209039b1-5178-40df-8c4a-97f28465ec11"
          >
            <div>
              <h2>Holiday details</h2>
              <div className="form-control">
                <label>
                  Destination<span className="required">*</span>
                </label>
                <Search
                  className="enquire-search"
                  resorts={resorts.nodes}
                  villas={villas.nodes}
                  placeholder="Select destination"
                  value={destination}
                  onChange={(input) => {
                    updateValueManually("destination", input);
                  }}
                />
                <input
                  hidden
                  name="destination"
                  value={destination ? destination.value : ""}
                />
              </div>
              <div className="form-control two-column">
                <div>
                  <label>
                    Date of travel<span className="required">*</span>
                  </label>
                  <input
                    name="dateOfTravel"
                    type="date"
                    placeholder=""
                    value={dateOfTravel}
                    onChange={(e) =>
                      updateValueManually("dateOfTravel", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label>
                    Duration<span className="required">*</span>
                  </label>
                  <select
                    name="duration"
                    value={duration}
                    onChange={updateValue}
                  >
                    {[...Array(30).keys()].map((number) => (
                      <option key={number + 1} value={number + 1}>
                        {number + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* <div className="form-control"></div> */}
              <div className="form-control">
                <label>Total holiday budget $</label>
                <input
                  name="budget"
                  type="number"
                  placeholder=""
                  value={budget}
                  onChange={updateValue}
                />
              </div>
              <div className="form-control">
                <label>Additional comments</label>
                {/* <input name="" type="" placeholder="" /> */}
                <textarea onChange={updateValue} name="comments">
                  {comments}
                </textarea>
              </div>
            </div>

            <div>
              <h2>Your details</h2>
              <div className="form-control two-column">
                <div>
                  <label>
                    Title<span className="required">*</span>
                  </label>
                  <select value={title} name="title" onChange={updateValue}>
                    {["Mr.", "Mrs."].map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>
                    First name<span className="required">*</span>
                  </label>
                  <input
                    name="firstName"
                    value={firstName}
                    onChange={updateValue}
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              {/* <div className="form-control"></div> */}
              <div className="form-control">
                <label>
                  Last name<span className="required">*</span>
                </label>
                <input
                  name="lastName"
                  value={lastName}
                  onChange={updateValue}
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="form-control">
                <label>
                  e-mail address<span className="required">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={updateValue}
                  placeholder=""
                />
              </div>
              <div className="form-control three-column">
                <div>
                  <label>
                    Telephone number<span className="required">*</span>
                  </label>
                  <input
                    name="phoneNumber"
                    type="text"
                    placeholder=""
                    value={phoneNumber}
                    onChange={updateValue}
                  />
                </div>

                <div>
                  <label>Adults</label>
                  <select value={adults} name="adults" onChange={updateValue}>
                    {[...Array(7).keys()].map((number) => (
                      <option key={number + 1} value={number + 1}>
                        {number + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Children</label>
                  <select
                    value={children}
                    name="children"
                    onChange={updateValue}
                  >
                    {[...Array(7).keys()].map((number) => (
                      <option key={number + 1} value={number + 1}>
                        {number + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button className="btn">Enquire now</button>
            </div>
          </form>

          {/* <ContactUs contactUs={site.contactUs} /> */}
        </EnquirePageStyles>
      </Container>
    </Layout>
  );
};

export default Enquire;