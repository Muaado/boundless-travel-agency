import React, { useState } from "react";
import styled from "styled-components";

import Image from "gatsby-plugin-sanity-image";
import { device } from "../../styles/deviceSizes";
import Carousel from "nuka-carousel";
import CarouselButton from "../Ui/CarouselButton";
import useWindowSize from "../../lib/useWindowSize";

import Placeholder from "../../assets/placeholder.svg";

const GalleryStyles = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  padding: 0 15%;
  @media ${device.laptopM} {
    padding: 0 10%;
  }

  @media ${device.tablet} {
    padding: 0 1.5rem;
  }

  h2 {
    margin-bottom: 7rem;
  }

  .filters {
    margin-bottom: 3rem;
    align-self: center;
    display: flex;

    @media ${device.tablet} {
      display: none;
    }

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
    height: 90vh;

    @media ${device.tablet} {
      height: 70vh;
    }
  }

  .image-grid {
    /* height: 70rem; */
    /* height: 50vh; */
    overflow: hidden;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;

    @media ${device.mobileXL} {
      gap: 1rem;
    }
    li {
      height: 35rem;
      @media ${device.laptopM} {
        height: 30rem;
      }

      @media ${device.tablet} {
        height: 25rem;
      }

      @media ${device.tabletS} {
        height: 20rem;
      }

      @media ${device.mobileXL} {
        height: 15rem;
      }
      &:nth-of-type(1) {
        grid-row: 1/3;
        height: 71.5rem;
        @media ${device.laptopM} {
          height: 61.5rem;
        }

        @media ${device.tablet} {
          height: 51.5rem;
        }

        @media ${device.tabletS} {
          height: 41.5rem;
        }
        @media ${device.mobileXL} {
          height: 31rem;
        }
      }

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

  .slider-control-bottomcenter {
    /* outline: none; */
    position: absolute;
    bottom: -3rem !important;

    .paging-item {
      /* height: fit-content !important; */
      button {
        height: fit-content !important;
        display: flex !important;
        align-items: center;
        svg {
          margin: 0;
        }
      }
    }
  }

  .carousel {
    height: 75vh !important;

    @media ${device.tablet} {
      height: 50vh !important;
    }
    img {
      height: 80%;
    }
  }
`;

const Gallery = ({ id, galleries }) => {
  // const firstImage = galleries[0].images[0];
  const types = galleries.map((galleryItem) => galleryItem.type?.name);
  const [selectedGallery, setSelectedGallery] = useState(null);

  const allImages = galleries.map((galleryItem) => galleryItem.images).flat();

  let isTablet;
  const windowGlobal = typeof window !== "undefined";
  if (windowGlobal) {
    isTablet = window.innerWidth <= 805 ? true : false;
  }

  return (
    <GalleryStyles
      id={id}
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
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
      {!selectedGallery && !isTablet ? (
        <ul className="image-grid">
          {galleries.length
            ? galleries[0]?.images.slice(0, 4).map((image) => {
                return (
                  <li key={image.alt}>
                    {image && image.asset ? (
                      <Image {...image} alt={image.alt} />
                    ) : (
                      <Placeholder />
                    )}
                  </li>
                );
              })
            : [1, 2, 3, 4].map((item) => (
                <li key={item}>
                  <Placeholder />
                </li>
              ))}
        </ul>
      ) : (
        <Carousel
          speed={1000}
          className="carousel"
          // renderCenterRightControls={({ nextSlide }) => (
          //   <CarouselButton onClick={nextSlide} chevronRight={true} />
          // )}
          // renderCenterLeftControls={({ previousSlide }) => (
          //   <CarouselButton onClick={previousSlide} />
          // )}
        >
          {!isTablet
            ? selectedGallery.images.map((image) => (
                <div key={image.alt} className="main-image-container">
                  {image && image.asset ? (
                    <Image {...image} alt={image.alt} />
                  ) : (
                    <Placeholder />
                  )}
                </div>
              ))
            : allImages.map((image) => (
                <div key={image.alt} className="main-image-container">
                  {image && image.asset ? (
                    <Image {...image} alt={image.alt} />
                  ) : (
                    <Placeholder />
                  )}
                </div>
              ))}
        </Carousel>
      )}
    </GalleryStyles>
  );
};

export default Gallery;
