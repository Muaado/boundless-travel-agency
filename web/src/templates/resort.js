import { graphql } from "gatsby";
import BlogPost from "../components/blog-post";
import React, { useEffect, useState } from "react";
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
import ChevronRight from "../assets/icons/chevron-right.svg";

import useWindowSize from "../lib/useWindowSize";

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

const ResortStyles = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    color: var(--primary);
    font-weight: bold;
    font-size: 7.2rem;
    padding: 7rem 0;
    letter-spacing: 1rem;
  }

  h2 {
    letter-spacing: 1rem;
    text-align: center;
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

      /* color: var(--grey); */
    }
    &__amenties {
      margin-bottom: 10rem;
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

    &__highlights {
      margin: 10rem 0;
      text-align: center;
      padding: 0 10%;
      display: flex;
      flex-direction: column;
      @media ${device.laptopL} {
        padding: 0;
      }

      h2 {
        margin-bottom: 7rem;
        /* letter-spacing: 1rem; */
      }

      ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.6rem;

        li {
          position: relative;

          &:hover {
            transition: all 0.3s;

            p {
              transition: all 0.3s;
              opacity: 1;
            }
            &:after {
              content: "";
              background: #000;
              left: 0;
              top: 0;
              opacity: 0.4;
              width: 100%;
              height: 100%;
              position: absolute;
              z-index: 50;
              /* right: -55vw; */
            }
          }
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      a {
        position: absolute;
        color: #fff;
        font-size: 2.2rem;
        padding: 1rem 5rem;
        bottom: 3rem;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #fff;
        z-index: 100;
      }
      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;

        opacity: 0;
        color: #fff;
        align-self: center;
        line-height: 2.4rem;
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
    &__gallery {
      display: flex;
      flex-direction: column;

      text-align: center;
      padding: 0 10%;
      @media ${device.laptopL} {
        padding: 0;
      }

      h2 {
        margin-bottom: 7rem;
      }

      .filters {
        margin-bottom: 3rem;
        align-self: center;
        display: flex;

        li {
          color: var(--grey);
          font-size: 2rem;
          &:not(:last-of-type) {
            margin-right: 3rem;
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .main-image-container {
        /* height: 70rem; */
      }

      .image-grid {
        /* height: 70rem; */
        display: grid;
        gap: 1.5rem;
        grid-template-columns: 1fr 1fr 1fr;
        li {
          &:nth-of-type(1) {
            grid-row: 1/3;
          }
        }
        li {
          &:nth-of-type(4) {
            grid-column: 2/4;
          }
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    &__spa {
      margin-top: 14rem;

      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      .container {
        display: flex;
        align-self: center;

        justify-content: center;
        max-width: 1400px;
        div {
          padding-top: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-bottom: 5rem;

          &:nth-of-type(2) {
            padding: 10rem;
          }

          p {
            padding-left: 5rem;
            max-width: 60rem;
          }
        }
      }

      &:after {
        content: "";
        background: #c0a7772b;
        width: 100%;
        height: 100%;
        position: absolute;
        right: -55vw;
      }

      background: #fff6f6;
      h2 {
        width: max-content;
        text-transform: capitalize;
        z-index: 100;
      }
      p {
        bottom: 0;
      }
      .image-web {
        width: 70rem;
        position: relative;
        right: -5rem;
        top: -2rem;
        z-index: 100;
      }

      .image-thumb {
        max-width: 35rem;
        z-index: 100;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__activities {
      margin: 10rem 0;
      text-align: center;
      padding: 0 10%;
      display: flex;
      flex-direction: column;
      @media ${device.laptopL} {
        padding: 0;
      }

      h2 {
        margin-bottom: 3rem;
        letter-spacing: 1rem;
      }
      p {
        margin-bottom: 5rem;
        width: 70rem;
        color: var(--grey);
        align-self: center;
      }

      ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.6rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    &__reviews {
      display: flex;
      flex-direction: column;

      margin-bottom: 5rem;
      padding: 2rem 10%;
      min-width: fit-content;

      h2 {
        letter-spacing: 1rem;
        text-align: center;
      }

      .carousel {
        /* padding: 5rem; */
        display: flex;
        justify-content: center;
        .slider-frame {
          padding: 5rem !important;
          display: flex;
          justify-content: center;
        }

        .slider-slide {
          @media ${device.tablet} {
            display: flex !important;
            justify-content: center;
          }
        }
      }

      &__review {
        /* max-width: 25rem; */
        width: fit-content;

        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);

        margin-right: 0;

        p:first-of-type {
          font-weight: bold;
          font-size: 2rem;
          margin-bottom: 5rem;
        }
      }
    }

    &__second-image {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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

  const firstImage = galleries[0].images[0];
  const types = galleries.map((galleryItem) => galleryItem.type.name);
  const [selectedGallery, setSelectedGallery] = useState(null);

  const [numberOfSlides, setNumberOfSlides] = useState(3);
  const [cellSpacing, setCellSpacing] = useState(10);
  const size = useWindowSize();

  useEffect(() => {
    const { width } = size;
    const isMobileOnly = width <= 576;
    const isTablet = width > 576 && width < 992;
    const isSreenSM = width > 992 && width < 1200;
    const isSreenLG = width > 1200 && width < 1440;
    const screenXL = width > 1440;

    const slides = () => {
      if (isMobileOnly) return 1;
      if (isTablet) return 2;
      if (isSreenSM) return 2.4;
      if (isSreenLG) return 2.8;
      if (screenXL) return 4;
      return 2;
    };
    const spacing = () => {
      if (isMobileOnly) return 50;
      if (isTablet) return 20;
      return 30;
    };

    setNumberOfSlides(slides);
    setCellSpacing(spacing);
  }, [size]);

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

          <div className="resort__gallery">
            <h2>Gallery</h2>
            <ul className="filters">
              {types?.map((type) => (
                <li
                  className="clickable"
                  key={type}
                  onClick={() => {
                    const foundGallery = galleries.find(
                      (gallery) => gallery.type.name === type
                    );
                    setSelectedGallery(foundGallery);
                  }}
                >
                  {type}
                </li>
              ))}
            </ul>
            {!selectedGallery ? (
              <div className="main-image-container">
                <Image {...firstImage} alt={firstImage.alt} />
              </div>
            ) : (
              <ul className="image-grid">
                {selectedGallery.images.slice(0, 4).map((image) => {
                  return (
                    <li key={image.alt}>
                      <Image {...image} alt={image.alt} />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="resort__spa">
            <div className="container">
              <div>
                <div className="image-web">
                  <Image
                    {...featuredSpa.imageWeb}
                    alt={featuredSpa.imageWeb.alt}
                  />
                </div>
                <PortableText blocks={featuredSpa._rawDescription} />
              </div>
              <div>
                <h2>{featuredSpa.name}</h2>
                <div className="image-thumb">
                  <Image
                    {...featuredSpa.imageThumb}
                    alt={featuredSpa.imageThumb.alt}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="resort__activities">
            <h2>Activities</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <ul>
              {activities.nodes.map(({ imageThumb }) => (
                <li key={imageThumb.alt}>
                  <Image {...imageThumb} alt={imageThumb.alt} />
                </li>
              ))}
            </ul>
          </div>

          <div className="resort__reviews">
            <h2>Reviews</h2>
            <Carousel
              className="carousel"
              slidesToShow={numberOfSlides}
              cellSpacing={cellSpacing}
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
              {reviews.map(({ name, _rawDescription }) => (
                <div className="resort__reviews__review" key={name}>
                  <p>{name}</p>
                  <PortableText blocks={_rawDescription} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="resort__second-image">
            <Image {...secondImage} alt={secondImage.alt} />
          </div>
        </ResortStyles>
      </Container>
    </Layout>
  );
};

export default ResortTemplate;
