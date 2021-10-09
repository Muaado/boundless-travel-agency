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
  }
  .resort {
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
      h2 {
        text-align: center;
        padding: 5rem;
      }
      ul {
        /* width: 100vw; */
        /* position: relative; */

        display: flex;
        gap: 2rem;
      }

      .image-container {
        width: 100%;
        height: 70rem;
        p {
          font-family: "Playfair Display";
          font-size: 3rem;
          padding: 2rem 0;
          text-align: right;
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
          <h1>{name}</h1>

          <div className="image-container">
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
              slidesToShow={2.7}
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
                      height: "90%",
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

          <div>
            <ul>
              {restaurants.map(({ name, alternateName, imageThumb }) => (
                <li key={name}>
                  {name}
                  {alternateName}
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
