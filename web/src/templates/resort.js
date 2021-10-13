import { graphql } from "gatsby";

import React, { useState } from "react";
// import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";

import Carousel from "nuka-carousel";

import Image from "gatsby-plugin-sanity-image";

import PortableText from "../components/portableText";
import ChevronRight from "../assets/icons/chevron-right.svg";

import Reviews from "../components/Resort/Reviews";

import ResortStyles from "../styles/ResortTempleteStyles";
import Gallery from "../components/Gallery";
import Amenities from "../components/Resort/Amenities";
import Activities from "../components/Resort/Activities";
import Spa from "../components/Resort/Spa";

// import review from "../../../studio/schemas/documents/review";

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

      gallery {
        images {
          ...SanityImage
          alt
        }
        name
        type {
          name
        }
      }

      reviews {
        name
        _rawDescription
      }

      secondImage {
        ...SanityImage
        alt
      }
    }

    featuredSpa: sanitySpa(
      resort: { _id: { eq: $id } }
      spaFeatured: { eq: true }
    ) {
      id
      _rawDescription
      name
      imageWeb {
        ...SanityImage
        alt
      }
      imageThumb {
        ...SanityImage
        alt
      }
    }

    activities: allSanityActivity(filter: { resort: { _id: { eq: $id } } }) {
      nodes {
        imageThumb {
          ...SanityImage
          alt
        }
      }
    }

    highlights: allSanityResortHighlight(
      filter: { resort: { _id: { eq: $id } } }
    ) {
      nodes {
        name
        _rawDescription
        imageThumb {
          ...SanityImage
          alt
        }
      }
    }
  }
`;

const ResortTemplate = (props) => {
  const { data, errors } = props;
  const resort = data && data.resort;
  const featuredSpa = data && data.featuredSpa;
  const activities = data && data.activities;
  const highlights = data && data.highlights;

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
    reviews,
    gallery: galleries,
    secondImage,
  } = resort;

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
            <Image {...image} width={1440} alt={image.alt} />
          </div>

          <Amenities
            locationAtoll={locationAtoll}
            numberOfBars={numberOfBars}
            numberOfRestaurants={numberOfRestaurants}
            numberOfRooms={numberOfRooms}
            resortTransferType={resortTransferType}
            timeToAirport={timeToAirport}
            _rawDescription={_rawDescription}
          />
          {/* <div className="resort__description">
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
          </ul> */}

          <div className="resort__highlights">
            <h2>Highlights</h2>
            <ul>
              {highlights.nodes.map(({ name, imageThumb, _rawDescription }) => (
                <li key={imageThumb.alt}>
                  <a>
                    {name} <ChevronRight />
                  </a>
                  <PortableText blocks={_rawDescription} />
                  <Image {...imageThumb} alt={imageThumb.alt} />
                </li>
              ))}
            </ul>
          </div>

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

          <Gallery galleries={galleries} />

          <Spa spa={featuredSpa} />

          <Activities activities={activities} />

          <Reviews reviews={reviews} />
          <div className="resort__second-image">
            <Image {...secondImage} alt={secondImage.alt} />
          </div>
        </ResortStyles>
      </Container>
    </Layout>
  );
};

export default ResortTemplate;
