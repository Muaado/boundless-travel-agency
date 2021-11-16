import { graphql, Link } from "gatsby";
import React, { useState } from "react";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import {
  getHighlightUrl,
  getResortUrl,
  getRestaurantUrl,
  toPlainText,
} from "../lib/helpers";

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

import PlusIcon from "../assets/icons/plus-icon.svg";
import MinusIcon from "../assets/icons/minus-icon.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import ChevronUp from "../assets/icons/chevron-up.svg";
import ChevronDown from "../assets/icons/chevron-down.svg";

import Measure from "../assets/icons/villaSpecifications/measure.svg";
import TwoPeople from "../assets/icons/villaSpecifications/two-people.svg";
import Bed from "../assets/icons/villaSpecifications/bed.svg";
import Shower from "../assets/icons/villaSpecifications/shower.svg";
import SwimmingPool from "../assets/icons/villaSpecifications/swimming-pool.svg";
import { MouseScroll } from "../components/Ui/MouseScroll";
import Resorts from "../components/Villa/Resorts";
// import styled from "styled-components";

import Placeholder from "../assets/placeholder.svg";
import Carousel from "nuka-carousel";
import CarouselButton from "../components/Ui/CarouselButton";

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
      short_desc

      _rawDescription
      # imageWeb {
      #   ...SanityImage
      #   alt
      # }

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

        activities {
          name
          resort {
            name
          }
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

    # restaurants {
    #
    #     }

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
    # activities: allSanityActivity(
    #   filter: { resort: { _id: { eq: $resortId } } }
    # ) {
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
    resorts: allSanityResort {
      nodes {
        name
        image {
          ...SanityImage
          alt
        }
      }
    }
    restaurants: allSanityRestaurant(
      filter: { resort: { _id: { eq: $resortId } } }
    ) {
      nodes {
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
    }

    priceList: allSanityPriceList(filter: { villa: { _id: { eq: $id } } }) {
      nodes {
        month
        price
      }
    }
  }
`;

const VilaTemplate = (props) => {
  const { data, errors } = props;
  const villa = data && data.villa;
  // const activities = data && data.activities;
  const spas = data && data.spas;
  const resorts = data && data.resorts;
  const restaurants = data && data.restaurants;
  const priceList = data && data.priceList;

  const [openedFeature, setOpenedFeature] = useState(-1);
  const [restaurantSlice, setRestaurantSLice] = useState(4);

  const {
    name,
    alternateName,
    tagline,
    _rawDescription: _rawDescriptionVilla,
    short_desc,
    // imageWeb,
    roomFeatures,
    maxOccupancy,
    sizeSqm,
    showers,
    villaPoolTypes,
    heroImage,
    activities,
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

  const [calendarOpen, setCalendarOpen] = useState(false);

  const months = [
    { title: "JAN", value: "0" },
    { title: "FEB", value: "1" },
    { title: "MAR", value: "2" },
    { title: "APR", value: "3" },
    { title: "MAY", value: "4" },
    { title: "JUN", value: "5" },
    { title: "JUL", value: "6" },
    { title: "AUG", value: "7" },
    { title: "SEP", value: "8" },
    { title: "OCT", value: "9" },
    { title: "NOV", value: "10" },
    { title: "DEC", value: "11" },
  ];

  const sortedPriceList = priceList.nodes.sort((a, b) =>
    parseInt(b.month) > parseInt(a.month) ? -1 : 1
  );

  let medianPrice = 0;

  sortedPriceList.forEach((price) => {
    medianPrice += price.price;
  });

  medianPrice = medianPrice / sortedPriceList.length;
  return (
    <Layout>
      {villa && (
        <SEO
          title={name || "Untitled"}
          description={short_desc}
          image={heroImage}
        />
      )}

      <Container>
        <LeftSidebar
          list={["overview", "room-features", "gallery", "highlights", "dine"]}
        />
        <VillaStyles>
          {/* {heroImage && ( */}
          <div className="villa__image">
            <div className="image-container">
              {heroImage && heroImage.asset ? (
                <Image {...heroImage} alt={heroImage.alt} />
              ) : (
                <Placeholder style={{ width: "100%", height: "100%" }} />
              )}
            </div>
            <h1 className="villa__image-title" id="header-text">
              {resortName}
            </h1>
            <MouseScroll />
            <div className="villa__calendar">
              <div
                className="icon"
                onClick={() => setCalendarOpen(!calendarOpen)}
              >
                <CalendarIcon />
                {!calendarOpen ? (
                  <ChevronDown className="chevron" />
                ) : (
                  <ChevronUp className="chevron" />
                )}
              </div>
              {/* {calendarOpen && ( */}
              <ul className={calendarOpen ? "open" : ""}>
                {months.map(({ title, value }) => {
                  const price = sortedPriceList?.find(
                    (item) => item.month === value
                  );

                  return (
                    <li key={title}>
                      <span>
                        <span>{title}</span> $
                        {price?.price.toFixed(2) || medianPrice.toFixed(2)}
                      </span>
                      <span className="per-night">per night</span>
                    </li>
                  );
                })}
              </ul>
              {/* )} */}
            </div>
          </div>

          {/* )} */}

          <div
            className="villa__header"
            id="overview"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="container">
              {/* <p className="alternate-name">{alternateName}</p> */}
              <h1>{name}</h1>
              {/* <h3 className="tagline">{tagline}</h3> */}
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
              <Link to="/enquire" className="btn">
                ENQUIRE
              </Link>
            </div>
            <PopUpGallery className="carousel" images={headerImages} />
          </div>

          <div
            className="villa__room-features"
            id="room-features"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="image-container">
              {roomFeatures?.backgroundImage ? (
                <Image
                  {...roomFeatures.backgroundImage}
                  alt={roomFeatures.backgroundImage.alt}
                />
              ) : (
                <Placeholder style={{ width: "100%", height: "100%" }} />
              )}
            </div>
            <div className="content">
              <h2>Room features</h2>
              <ul>
                {roomFeatures?.features?.map(
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
            <ul className="desktop-list">
              {highlights.length
                ? highlights.map(({ name, imageThumb }) => (
                    <li key={imageThumb?.alt}>
                      {/* <Link to={getHighlightUrl({ name, resortName })}> */}
                      {/* <a>
                     <ChevronRight />
                  </a> */}
                      <div className="text">
                        <h3>{name}</h3>
                        {/* <PortableText blocks={_rawDescription} /> */}
                      </div>

                      {imageThumb && imageThumb.asset && (
                        <Image {...imageThumb} alt={imageThumb.alt} />
                      )}
                      {/* </Link> */}
                    </li>
                  ))
                : [1, 2, 3, 4, 5, 6].map((item) => (
                    <li key={item}>
                      <Placeholder />
                    </li>
                  ))}
            </ul>

            <Carousel
              speed={1000}
              className="carousel"
              renderCenterRightControls={({ nextSlide }) => (
                <CarouselButton onClick={nextSlide} chevronRight={true} />
              )}
              renderCenterLeftControls={({ previousSlide }) => (
                <CarouselButton onClick={previousSlide} />
              )}
            >
              {highlights.length
                ? highlights.map(({ name, imageThumb }) => (
                    <li key={imageThumb?.alt}>
                      {/* <Link to={getHighlightUrl({ name, resortName })}> */}
                      {/* <a>
                     <ChevronRight />
                  </a> */}
                      <div className="text">
                        <h3>{name}</h3>
                        {/* <PortableText blocks={_rawDescription} /> */}
                      </div>

                      {imageThumb && imageThumb.asset && (
                        <Image {...imageThumb} alt={imageThumb.alt} />
                      )}
                      {/* </Link> */}
                    </li>
                  ))
                : [1, 2, 3, 4, 5, 6].map((item) => (
                    <li key={item}>
                      <Placeholder />
                    </li>
                  ))}
            </Carousel>
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
              {restaurants.nodes
                .slice(0, restaurantSlice)
                .map(({ name, alternateName, imageThumb, resort }) => (
                  <li
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    key={name}
                  >
                    <div key={name} className="image-container">
                      {imageThumb && imageThumb.asset ? (
                        <Image {...imageThumb} alt={imageThumb.alt} />
                      ) : (
                        <Placeholder
                          style={{ width: "100%", height: "100%" }}
                        />
                      )}
                    </div>
                    <div className="villa__restaurants__text">
                      <span className="name">{name}</span>
                      <span className="alternate-name">{alternateName}</span>

                      <PortableText blocks={_rawDescription} />
                      {/* <Link
                        to={getRestaurantUrl({ name, resortName: resort.name })}
                      >
                        Read more...
                      </Link> */}
                    </div>
                  </li>
                ))}
            </ul>

            {restaurantSlice === 4 && (
              <button className="btn" onClick={() => setRestaurantSLice(100)}>
                View more
              </button>
            )}
          </div>

          <Activities activities={activities} />
          <Resorts resorts={resorts.nodes} />
          <Reviews reviews={reviews} />
        </VillaStyles>
      </Container>
    </Layout>
  );
};

export default VilaTemplate;
