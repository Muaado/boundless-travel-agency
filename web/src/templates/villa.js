import { graphql } from "gatsby";
import React from "react";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { toPlainText } from "../lib/helpers";

import Image from "gatsby-plugin-sanity-image";

import PortableText from "../components/portableText";
import Gallery from "../components/Gallery";
import VillaStyles from "../styles/VillaTemplateStyles";
import Amenities from "../components/Resort/Amenities";
import Activities from "../components/Resort/Activities";
import Reviews from "../components/Resort/Reviews";
import Spa from "../components/Resort/Spa";
import Carousel from "nuka-carousel";

import ChevronRight from "../assets/icons/chevron-right.svg";
import ChevronLeft from "../assets/icons/chevron-left.svg";
// import styled from "styled-components";
import { CarouselButton } from "../styles/Ui";

export const query = graphql`
  query VillaTemplateQuery($id: String!, $resortId: String!) {
    villa: sanityVilla(_id: { eq: $id }) {
      name
      alternateName
      tagline
      _rawDescription
      imageWeb {
        ...SanityImage
        alt
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
      resort {
        locationAtoll
        locationFull
        numberOfBars
        numberOfRestaurants
        numberOfRooms
        roomVoltage
        timeToAirport
        _rawDescription
        resortTransferType {
          transferType
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

        reviews {
          name
          _rawDescription
        }
      }
    }

    spas: allSanitySpa(filter: { resort: { _id: { eq: $resortId } } }) {
      nodes {
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
    }
    activities: allSanityActivity(
      filter: { resort: { _id: { eq: $resortId } } }
    ) {
      nodes {
        imageThumb {
          ...SanityImage
          alt
        }
      }
    }
  }
`;

const VilaTemplate = (props) => {
  const { data, errors } = props;
  const villa = data && data.villa;
  const activities = data && data.activities;
  const spas = data && data.spas;

  const {
    name,
    alternateName,
    tagline,
    _rawDescription: _rawDescriptionVilla,
    imageWeb,

    gallery: galleries,
    // gallery,
  } = villa;

  const {
    locationAtoll,
    numberOfBars,
    numberOfRestaurants,
    numberOfRooms,
    resortTransferType,
    timeToAirport,
    _rawDescription,
    reviews,
    restaurants,
  } = villa.resort;

  console.log(spas);
  return (
    <Layout>
      <Container>
        <VillaStyles>
          <div className="villa__header">
            <div className="container">
              <div className="image-container">
                <Image {...imageWeb} alt={imageWeb?.alt} />
              </div>
              <p className="alternate-name">{alternateName}</p>
              <h1>{name}</h1>
              <h3 className="tagline">{tagline}</h3>
              <PortableText blocks={_rawDescriptionVilla} />
              <button className="btn">ENQUIRE</button>
            </div>
          </div>
          <Gallery galleries={galleries} />
          <div className="villa__property-overview">
            <h2>Property Overview</h2>

            <Amenities
              locationAtoll={locationAtoll}
              numberOfBars={numberOfBars}
              numberOfRestaurants={numberOfRestaurants}
              numberOfRooms={numberOfRooms}
              resortTransferType={resortTransferType}
              timeToAirport={timeToAirport}
              _rawDescription={_rawDescription}
            />
          </div>
          <div className="villa__restaurants">
            <h2>Dine</h2>
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
                  <div className="villa__restaurants__text">
                    <span className="name">{name}</span>
                    <span className="alternate-name">{alternateName}</span>

                    <PortableText blocks={_rawDescription} />
                    <a>Read more...</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Carousel
            className="villa__spas"
            slidesToShow={1}
            cellSpacing={0}
            renderCenterRightControls={({ nextSlide }) => (
              <CarouselButton
                type="button"
                onClick={nextSlide}
                aria-label="Next Slide"
                bgColor="var(--darkGreen)"
              >
                <ChevronRight />
              </CarouselButton>
            )}
            renderCenterLeftControls={({ previousSlide }) => (
              <CarouselButton
                type="button"
                onClick={previousSlide}
                aria-label="Next Slide"
                bgColor="var(--darkGreen)"
              >
                <ChevronLeft />
              </CarouselButton>
            )}
          >
            {spas.nodes.map((spa) => (
              <Spa spa={spa} key={spa._id} />
            ))}
          </Carousel>
          <Activities activities={activities} />
          <Reviews reviews={reviews} />
        </VillaStyles>
      </Container>
    </Layout>
  );
};

export default VilaTemplate;
