import { graphql, Link } from "gatsby";

import React, { useRef, useState } from "react";
// import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";

import Carousel from "nuka-carousel";
import CarouselButton from "../components/Ui/CarouselButton";

import Image from "gatsby-plugin-sanity-image";

import PortableText from "../components/Ui/portableText";

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

import Placeholder from "../assets/placeholder.svg";

import { toPlainText } from "../lib/helpers";
import Highlights from "../components/Resort/Highlights";
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
      # restaurants {

      # }

      activities {
        # sanityResortHighlightname

        name
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
        description
      }

      secondImage {
        ...SanityImage
        alt
      }

      highlights {
        name
        description
        imageThumb {
          ...SanityImage
          alt
        }
      }

      faq {
        name
        description
        faqQuestionsAnswers {
          # _id
          answer
          question
        }
      }
    }
    villas: allSanityVilla(
      limit: 3
      filter: { resort: { _id: { eq: $id } }, active: { eq: true } }
    ) {
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

    restaurants: allSanityRestaurant(filter: { resort: { _id: { eq: $id } } }) {
      nodes {
        name
        alternateName
        description
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
      description
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

    spas: allSanitySpa(filter: { resort: { _id: { eq: $id } } }) {
      nodes {
        id
        description
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
    # activities: allSanityActivity(filter: { resort: { _id: { eq: $id } } }) {
    #   nodes {
    #     name
    #     resort {
    #       name
    #     }
    #     imageThumb {
    #       ...SanityImage
    #       alt
    #     }
    #   }
    # }

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
  // const featuredSpa = data && data.featuredSpa;
  const spas = data && data.spas;
  // const activities = data && data.activities;
  const villas = data && data.villas;
  const restaurants = data && data.restaurants;
  const site = data && data.site;

  const [slice, setSlice] = useState(Number);
  const [restaurantSlice, setRestaurentSlice] = useState(4);

  console.log(restaurants); // const highlights = data && data.highlights;

  const windowGlobal = typeof window !== "undefined";
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
    // restaurants,
    reviews,
    gallery: galleries,
    activities,
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
            {image && image.asset && (
              <Image {...image} width={1440} alt={image?.alt} />
            )}
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
          <Highlights highlights={highlights} />

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
              {restaurants.nodes
                .slice(0, restaurantSlice)
                .map(({ name, alternateName, imageThumb, _rawDescription }) => (
                  <li
                    key={name}
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    <div key={name} className="image-container">
                      {imageThumb && imageThumb.asset ? (
                        <Image {...imageThumb} alt={imageThumb.alt} />
                      ) : (
                        <Placeholder />
                      )}
                    </div>
                    <div className="resort__restaurants__text">
                      <span className="name">{name}</span>
                      <span className="alternate-name">{alternateName}</span>

                      {_rawDescription && (
                        <PortableText blocks={_rawDescription} />
                      )}
                    </div>
                  </li>
                ))}
            </ul>
            {restaurantSlice === 4 && (
              <button className="btn" onClick={() => setRestaurentSlice(100)}>
                View more
              </button>
            )}
          </div>

          {galleries && <Gallery id="gallery" galleries={galleries} />}

          {spas.nodes && (
            <Carousel
              speed={1000}
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="resort__spas"
              slidesToShow={1}
              cellSpacing={0}
              vertical={windowGlobal && window.innerWidth < 806}
              // heightMode="max"
              // renderCenterRightControls={({ nextSlide }) => (
              //   <CarouselButton onClick={nextSlide} chevronRight={true} />
              // )}
              // renderCenterLeftControls={({ previousSlide }) => (
              //   <CarouselButton onClick={previousSlide} />
              // )}
            >
              {spas.nodes.map((spa) => (
                <Spa spa={spa} key={spa._id} />
              ))}
            </Carousel>
          )}
          {/* {featuredSpa && <Spa className="resort__spa" spa={featuredSpa} />} */}

          <Activities activities={activities} />

          <Reviews reviews={reviews} />
          <div
            className="resort__second-image"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            {secondImage && secondImage.asset && (
              <Image {...secondImage} alt={secondImage?.alt} />
            )}
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