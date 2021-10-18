import { graphql } from "gatsby";

import React, { useEffect, useRef, useState } from "react";
// import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";

import Image from "gatsby-plugin-sanity-image";

import PortableText from "../components/portableText";

import ChevronRight from "../assets/icons/chevron-right.svg";

import Reviews from "../components/Resort/Reviews";

import ResortStyles from "../styles/ResortTempleteStyles";
import Gallery from "../components/Gallery";
import Amenities from "../components/Resort/Amenities";
import Activities from "../components/Resort/Activities";
import Spa from "../components/Resort/Spa";
import Accomodation from "../components/Resort/Accomodation";
import { ContactUs } from "../components/Homepage/ContactUs";

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

      # villas {

      # }
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

      highlights {
        name
        _rawDescription
        imageThumb {
          ...SanityImage
          alt
        }
      }
    }
    villas: allSanityVilla(limit: 3, filter: { resort: { _id: { eq: $id } } }) {
      nodes {
        name
        imageThumb {
          ...SanityImage
          alt
        }
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

    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
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
  }
`;

const ResortTemplate = (props) => {
  const { data, errors } = props;
  const resort = data && data.resort;
  const featuredSpa = data && data.featuredSpa;
  const activities = data && data.activities;
  const villas = data && data.villas;
  const site = data && data.site;
  // const highlights = data && data.highlights;

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
    // villas,
    restaurants,
    reviews,
    gallery: galleries,
    secondImage,
    highlights,
  } = resort;

  const navRef = useRef();

  window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 100;

    // console.log(navRef.current.childNodes[0].childNodes);

    navRef.current.childNodes[0].childNodes.forEach((link) => {
      let section = document.querySelector(link.firstChild.hash);

      if (section)
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
    });
  });
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
          <div className="resort__image">
            <Image {...image} width={1440} alt={image.alt} />
            <div className="text">
              <p>{locationAtoll}</p>
              <h1>{name}</h1>
            </div>
          </div>

          <div ref={navRef} className="left-nav">
            <ul>
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#accomodation">Accomodation</a>
              </li>
              <li>
                <a href="#highlights">Highlights</a>
              </li>
              <li>
                <a href="#dine">Dine</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
            </ul>
          </div>

          <div id="overview">
            <h2 className="title">Island overview</h2>

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
          <Accomodation id="accomodation" villas={villas.nodes} />
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

          <div id="highlights" className="resort__highlights">
            <h2>Highlights</h2>
            <ul>
              {highlights.map(({ name, imageThumb, _rawDescription }) => (
                <li key={imageThumb?.alt}>
                  <a>
                    {name} <ChevronRight />
                  </a>
                  <PortableText blocks={_rawDescription} />
                  <Image {...imageThumb} alt={imageThumb.alt} />
                </li>
              ))}
            </ul>
          </div>

          <div id="dine" className="resort__restaurants">
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

          <Gallery id="gallery" galleries={galleries} />

          {featuredSpa && <Spa className="resort__spa" spa={featuredSpa} />}

          <Activities activities={activities} />

          <Reviews reviews={reviews} />
          <div className="resort__second-image">
            <Image {...secondImage} alt={secondImage.alt} />
          </div>
          <ContactUs contactUs={site.contactUs} />
        </ResortStyles>
      </Container>
    </Layout>
  );
};

export default ResortTemplate;
