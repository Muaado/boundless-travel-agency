import { graphql, Link } from "gatsby";
import React, { useState } from "react";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { getResortUrl, getRestaurantUrl, toPlainText } from "../lib/helpers";

import Image from "gatsby-plugin-sanity-image";

import PortableText from "../components/portableText";
import Gallery from "../components/Gallery";
import VillaStyles from "../styles/VillaTemplateStyles";
import Amenities from "../components/Resort/Amenities";
import Activities from "../components/Resort/Activities";
import Reviews from "../components/Resort/Reviews";
import Spa from "../components/Resort/Spa";
import LeftSidebar from "../components/LeftSidebar";
import PopUpGallery from "../components/PopUpGallery";
import Carousel from "nuka-carousel";

import PlusIcon from "../assets/icons/plus-icon.svg";
import MinusIcon from "../assets/icons/minus-icon.svg";
import CarouselButton from "../components/Ui/CarouselButton";

import Measure from "../assets/icons/villaSpecifications/measure.svg";
import TwoPeople from "../assets/icons/villaSpecifications/two-people.svg";
import Bed from "../assets/icons/villaSpecifications/bed.svg";
import Shower from "../assets/icons/villaSpecifications/shower.svg";
import SwimmingPool from "../assets/icons/villaSpecifications/swimming-pool.svg";
import { MouseScroll } from "../components/Ui/MouseScroll";
// import styled from "styled-components";

export const query = graphql`
  query VillaTemplateQuery($id: String!, $resortId: String!) {
    villa: sanityVilla(_id: { eq: $id }) {
      name
      alternateName
      tagline

      headerImages {
        images {
          ...SanityImage
          alt
        }
      }

      _rawDescription
      imageWeb {
        ...SanityImage
        alt
      }

      heroImage {
        ...SanityImage
        alt
      }

      roomFeatures {
        backgroundImage {
          ...SanityImage
          alt
        }
        features {
          _rawDescription
          title
        }
      }
      sizeSqm
      showers {
        option
        number
      }

      villaPoolTypes {
        poolType
      }

      maxOccupancy {
        option
        number
      }

      resort {
        name
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

        highlights {
          name
          _rawDescription
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

          resort {
            name
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
    resorts: allSanityResort(limit: 3) {
      nodes {
        name
        image {
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
  const resorts = data && data.resorts;

  const [openedFeature, setOpenedFeature] = useState(-1);

  const {
    name,
    alternateName,
    tagline,
    _rawDescription: _rawDescriptionVilla,
    imageWeb,
    roomFeatures,
    maxOccupancy,
    sizeSqm,
    showers,
    villaPoolTypes,
    heroImage,

    headerImages,

    // gallery,
  } = villa;

  const {
    name: resortName,
    locationAtoll,
    numberOfBars,
    numberOfRestaurants,
    numberOfRooms,
    resortTransferType,
    timeToAirport,
    _rawDescription,
    reviews,
    restaurants,
    gallery: galleries,
    highlights,
  } = villa.resort;

  let numberOfShowers = 0;

  showers.forEach(({ number }) => (numberOfShowers += number));

  const handleOpenFeature = (index) => {
    if (openedFeature !== index) {
      setOpenedFeature(index);
    } else {
      setOpenedFeature(-1);
    }
  };

  return (
    <Layout>
      <Container>
        <LeftSidebar
          list={["overview", "room-features", "gallery", "highlights", "dine"]}
        />
        <VillaStyles>
          {heroImage && (
            <div className="villa__image">
              {heroImage && <Image {...heroImage} alt={heroImage.alt} />}
              <h1 className="villa__image-title" id="header-text">
                {resortName}
              </h1>
              <MouseScroll />
            </div>
          )}

          <div
            className="villa__header"
            id="overview"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="container">
              <PopUpGallery className="carousel" images={headerImages} />

              <p className="alternate-name">{alternateName}</p>
              <h1>{name}</h1>
              <h3 className="tagline">{tagline}</h3>
              <PortableText blocks={_rawDescriptionVilla} />
              <ul>
                <li>
                  <Measure />
                  {sizeSqm}m2
                </li>
                <li>
                  <TwoPeople />
                  {maxOccupancy.map(
                    ({ number }, index) =>
                      `${number}${
                        index + 1 !== maxOccupancy.length ? "," : ""
                      } `
                  )}
                </li>
                <li>
                  <Shower />
                  {numberOfShowers}
                </li>
                {villaPoolTypes[0] && (
                  <li>
                    <SwimmingPool />
                    {villaPoolTypes[0].poolType}
                  </li>
                )}
              </ul>
              <button className="btn">ENQUIRE</button>
            </div>
          </div>

          <div
            className="villa__room-features"
            id="room-features"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Image
              {...roomFeatures.backgroundImage}
              alt={roomFeatures.backgroundImage.alt}
            />
            <div className="content">
              <h2>Room features</h2>
              <ul>
                {roomFeatures.features.map(
                  ({ title, _rawDescription }, index) => (
                    <li
                      key={title}
                      className="clickable"
                      onClick={() => handleOpenFeature(index)}
                    >
                      <h3>
                        {title}
                        {openedFeature !== index ? <PlusIcon /> : <MinusIcon />}
                      </h3>
                      {openedFeature === index && (
                        <PortableText blocks={_rawDescription} />
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <Gallery galleries={galleries} id="gallery" />
          <div
            className="villa__property-overview"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
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

          <div
            className="villa__highlights"
            id="highlights"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div>
              <h2>Hightlights</h2>
              <p>
                Elegant mansions by the sea, our two-storey beach residence in
                Maldives are sanctuaries of effortless chic. Each of our beach
                residence in Maldives features curved walls and livi
              </p>
            </div>
            <ul>
              {highlights.map(({ name, imageThumb, _rawDescription }) => (
                <li key={imageThumb?.alt}>
                  {/* <a>
                     <ChevronRight />
                  </a> */}
                  <div className="text">
                    <h3>{name}</h3>
                    {/* <PortableText blocks={_rawDescription} /> */}
                  </div>

                  <Image {...imageThumb} alt={imageThumb.alt} />
                </li>
              ))}
            </ul>
          </div>
          <div
            className="villa__restaurants"
            id="dine"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h2>Dine</h2>
            <ul>
              {restaurants.map(
                ({ name, alternateName, imageThumb, resort }) => (
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
                      <Link
                        to={getRestaurantUrl({ name, resortName: resort.name })}
                      >
                        Read more...
                      </Link>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>

          <Carousel
            speed={1000}
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="villa__spas"
            slidesToShow={1}
            cellSpacing={0}
            renderCenterRightControls={({ nextSlide }) => (
              <CarouselButton onClick={nextSlide} chevronRight={true} />
            )}
            renderCenterLeftControls={({ previousSlide }) => (
              <CarouselButton onClick={previousSlide} />
            )}
          >
            {spas.nodes.map((spa) => (
              <Spa spa={spa} key={spa._id} />
            ))}
          </Carousel>
          <Activities activities={activities} />
          <div
            className="villa__resorts"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="title">
              <span>ALL</span>
              <span className="line"></span>
              <span>PRODUCTS</span>
            </p>
            <Carousel
              speed={1000}
              className="carousel"
              slidesToShow={3}
              cellSpacing={20}
              renderCenterRightControls={({ nextSlide }) => (
                <CarouselButton onClick={nextSlide} chevronRight={true} />
              )}
              renderCenterLeftControls={({ previousSlide }) => (
                <CarouselButton onClick={previousSlide} />
              )}
            >
              {resorts.nodes.length &&
                resorts.nodes.map(({ name, image }) => (
                  <Link
                    className="carousel__node"
                    to={getResortUrl({ name })}
                    key={name}
                  >
                    {/* <a className="carousel__node" key={name}> */}
                    <div className="image-container">
                      {image && <Image {...image} alt={image.alt} />}
                    </div>
                    <p>{name}</p>
                    {/* </a> */}
                  </Link>
                ))}
            </Carousel>
          </div>
          <Reviews reviews={reviews} />
        </VillaStyles>
      </Container>
    </Layout>
  );
};

export default VilaTemplate;
