import { graphql } from "gatsby";
import BlogPost from "../components/blog-post";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { toPlainText } from "../lib/helpers";

import Carousel from "nuka-carousel";

import Image from "gatsby-plugin-sanity-image";
import styled from "styled-components";
import PortableText from "../components/portableText";
import { device } from "../styles/deviceSizes";

export const query = graphql`
  query ResortTemplateQuery($id: String!) {
    resort: sanityResort(_id: { eq: $id }) {
      _rawDescription(resolveReferences: { maxDepth: 10 })
      name
      locationAtoll
      locationFull
      numberOfBars
      numberOfRestaurants
      numberOfRooms
      roomVoltage
      timeToAirport
      image {
        ...SanityImage
        alt
      }
      resortTransferType {
        transferType
      }

      villas {
        name
        imageThumb {
          ...SanityImage
          alt
        }
      }
      restaurants {
        name
        alternateName
        _rawDescription
        imageThumb {
          ...SanityImage
          alt
        }
      }
    }
  }
`;

const ResortStyles = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    color: var(--primary);
    font-weight: bold;
    font-size: 7.2rem;
    padding: 7rem 0;
  }

  .resort {
    &__image {
      padding: 0 10%;
      @media ${device.laptopL} {
        padding: 0;
      }
    }
    &__description {
      max-width: 80rem;
      font-size: 2.4rem;
      font-weight: 100;
      text-align: center;
      align-self: center;
      padding: 5rem 0;

      line-height: 3.6rem;
    }
    &__amenties {
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

    &__accomodation {
      padding: 0 10%;
      @media ${device.laptopL} {
        padding: 0;
      }
      h2 {
        text-align: center;
        padding: 5rem;
      }
      ul {
        display: flex;
        gap: 2rem;
      }

      .image-container {
        width: 100%;
        @media ${device.laptopL} {
        }
        height: 70rem;
        img {
          height: 80%;
        }
        p {
          font-family: "Playfair Display";
          font-size: 3rem;
          padding: 2rem 0;
          text-align: right;
        }
      }
    }

    &__restaurants {
      margin-top: 10rem;
      padding: 0 10%;

      &__header {
        position: absolute;
        width: 40rem;

        h2 {
          color: var(--primary);
          font-weight: bold;
          font-size: 7.2rem;
          width: 30rem;
          line-height: 1;
          padding-bottom: 2rem;

          border-bottom: 2px solid var(--primary);
          margin-bottom: 2rem;
        }
      }
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20rem;

        position: relative;
        li {
          display: flex;
          flex-direction: column;
          position: relative;
          &:nth-of-type(odd) {
            margin-top: 15rem;
          }
          &:nth-of-type(even) {
            top: -15rem;
          }
          &:nth-of-type(1) {
            margin-top: 30rem;
          }
          &:nth-of-type(2) {
            top: 0;
          }
        }
      }

      &__text {
        align-self: center;
        max-width: 25rem;

        display: flex;
        flex-direction: column;
        .name {
          font-size: 2rem;
        }
        .alternate-name {
          font-size: 1.6rem;
          font-weight: 100;
          margin-bottom: 2rem;
          color: var(--grey);
          text-transform: capitalize;
          letter-spacing: 0.3rem;
        }
      }
    }
  }
`;

const ResortTemplate = (props) => {
  const { data, errors } = props;
  const resort = data && data.resort;

  const {
    name,
    locationAtoll,
    // locationFull,
    _rawDescription,
    numberOfBars,
    numberOfRestaurants,
    numberOfRooms,
    // roomVoltage,
    resortTransferType,
    timeToAirport,
    image,
    villas,
    restaurants,
  } = resort;

  console.log(villas);
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {resort && (
        <SEO
          title={resort.name || "Untitled"}
          // description={toPlainText(resort._rawExcerpt)}
          // image={resort.mainImage}
        />
      )}
      <Container>
        <ResortStyles>
          <h1>Island overview</h1>

          <div className="resort__image">
            <Image
              {...image}
              // tell Sanity how large to make the image (does not set any CSS)
              width={500}
              // style it how you want it
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              // fluid={imageUrlFor(buildImageObj(site.promoImageWeb))
              //   .width(1200)
              //   .height(Math.floor((9 / 16) * 1200))
              //   .fit("crop")
              //   .auto("format")
              //   .url()}
              alt={image.alt}
            />
          </div>

          <div className="resort__description">
            <PortableText blocks={_rawDescription} />
          </div>
          <ul className="resort__amenties">
            <li>No of rooms: {numberOfRooms} </li>
            <li>Restaurants: {numberOfRestaurants}</li>
            <li> No of bars: {numberOfBars}</li>
            <li>Location: {locationAtoll} </li>
            <li>Time to airport: {timeToAirport}</li>
            <li>
              Transfers:{" "}
              {resortTransferType.map(
                (type, index) =>
                  `${type.transferType}${
                    index + 1 !== resortTransferType.length ? "/" : ""
                  }`
              )}
            </li>
          </ul>

          <div className="resort__accomodation">
            <h2>Accomodation</h2>
            {/* <ul> */}
            <Carousel
              slidesToShow={3.2}
              cellSpacing={10}
              // enableKeyboardControls
              // renderCenterLeftControls={null}
              // renderBottomCenterControls={null}
              // renderCenterRightControls={({ nextSlide }) => (
              //   <button
              //     type="button"
              //     className="btn-right"
              //     onClick={nextSlide}
              //     aria-label="Next Slide"
              //   >
              //     <img src={chevron} alt="" />
              //     <p className="eye-not-visible">Next Slide</p>
              //   </button>
              // )}
              // dragging
              // wrapAround
            >
              {villas.map(({ name, imageThumb }) => (
                // <li key={name}>
                <div key={name} className="image-container">
                  <Image
                    style={{
                      width: "100%",
                      height: "80%",
                      objectFit: "cover",
                    }}
                    {...imageThumb}
                    alt={imageThumb.alt}
                  />
                  <p>{name}</p>
                </div>
                // </li>
              ))}
            </Carousel>
            {/* </ul> */}
          </div>

          <div className="resort__restaurants">
            <div className="resort__restaurants__header">
              <h2>DINE</h2>
              <p>
                Great conversation, a perfectly mixed drink, delicious tapas
                plates served under the sparkle of the Maldivian sky. Our
                poolside bar in the Maldives lets you enjoy life’s simplest
                luxuries: sunset, kinship and the peace of an island sanctuary.
              </p>
            </div>
            <ul>
              {restaurants.map(({ name, alternateName, imageThumb }) => (
                <li key={name}>
                  <div key={name} className="image-container">
                    <Image
                      style={{
                        width: "100%",
                        height: "90%",
                        objectFit: "cover",
                      }}
                      {...imageThumb}
                      alt={imageThumb.alt}
                    />
                  </div>
                  <div className="resort__restaurants__text">
                    <span className="name">{name}</span>
                    <span className="alternate-name">{alternateName}</span>

                    <PortableText blocks={_rawDescription} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ResortStyles>
      </Container>
    </Layout>
  );
};

export default ResortTemplate;
