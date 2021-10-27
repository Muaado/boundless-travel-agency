import { graphql, Link } from "gatsby";

import React, { useRef, useState } from "react";
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
import Faq from "../components/Homepage/Faq";
import LeftSidebar from "../components/LeftSidebar";
import { MouseScroll } from "../components/Ui/MouseScroll";
import { getHighlightUrl } from "../lib/helpers";

import { toPlainText } from "../lib/helpers";
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

      faq {
        name
        _rawDescription
        faqQuestionsAnswers {
          # _id
          answer
          question
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
        resort {
          name
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
        name
        resort {
          name
        }
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

  const [slice, setSlice] = useState(Number);
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
    faq,
  } = resort;

  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {resort && (
        <SEO
          title={resort.name || "Untitled"}
          description={toPlainText(resort._rawDescription)}
          image={resort.image}
        />
      )}
      <Container>
        <ResortStyles>
          <div className="resort__image">
            {image && <Image {...image} width={1440} alt={image?.alt} />}
            <div
              // id="header-text"
              className="text disappear-on-scroll"
              data-aos="zoom-out-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <p>{locationAtoll}</p>
              <h1>{name}</h1>
            </div>
            <MouseScroll />
          </div>

          <LeftSidebar
            list={["overview", "accomodation", "highlights", "dine", "gallery"]}
          />

          <div
            id="overview"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
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

          <div
            id="highlights"
            className="resort__highlights"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h2>Highlights</h2>
            <ul>
              {highlights.map(({ name, imageThumb, _rawDescription }) => (
                <li key={imageThumb?.alt}>
                  <Link to={getHighlightUrl({ name, resortName: resort.name })}>
                    {name} <ChevronRight />
                  </Link>
                  <PortableText blocks={_rawDescription} />
                  {imageThumb && <Image {...imageThumb} alt={imageThumb.alt} />}
                </li>
              ))}
            </ul>
          </div>

          <div
            id="dine"
            className="resort__restaurants"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
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
              {restaurants.map(
                ({ name, alternateName, imageThumb, _rawDescription }) => (
                  <li key={name}>
                    <div key={name} className="image-container">
                      {imageThumb && (
                        <Image {...imageThumb} alt={imageThumb.alt} />
                      )}
                    </div>
                    <div className="resort__restaurants__text">
                      <span className="name">{name}</span>
                      <span className="alternate-name">{alternateName}</span>

                      <PortableText blocks={_rawDescription} />
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>

          {galleries && <Gallery id="gallery" galleries={galleries} />}

          {featuredSpa && <Spa className="resort__spa" spa={featuredSpa} />}

          <Activities activities={activities} />

          <Reviews reviews={reviews} />
          <div
            className="resort__second-image"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            {secondImage && <Image {...secondImage} alt={secondImage?.alt} />}
          </div>
          {faq.slice(0, slice ? slice : 1).map((faq) => (
            <Faq
              className="resort__faq"
              key={faq.name}
              faq={faq}
              path="/resort"
              onClick={() => {
                setSlice(100);
              }}
              slice={slice}
            />
          ))}
          <ContactUs contactUs={site.contactUs} />
        </ResortStyles>
      </Container>
    </Layout>
  );
};

export default ResortTemplate;
