import React, { useState } from "react";
import styled from "styled-components";

import Image from "gatsby-plugin-sanity-image";
import { device } from "../../styles/deviceSizes";
import Carousel from "nuka-carousel";
import CarouselButton from "../Ui/CarouselButton";

const GalleryStyles = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  padding: 0 15%;
  @media ${device.laptopL} {
    /* padding: 0; */
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
    height: 90vh;
  }

  .image-grid {
    /* height: 70rem; */
    /* height: 50vh; */
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;

    li {
      height: 35rem;
      &:nth-of-type(1) {
        grid-row: 1/3;
        height: 71.5rem;
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
    height: 70vh !important;
    img {
      height: 80%;
    }
  }
`;

const Gallery = ({ id, galleries }) => {
  // const firstImage = galleries[0].images[0];
  const types = galleries.map((galleryItem) => galleryItem.type.name);
  const [selectedGallery, setSelectedGallery] = useState(null);

  return (
    <GalleryStyles
      id={id}
      // data-aos="fade-up"
      // data-aos-delay="50"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
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
      {!selectedGallery ? (
        <ul className="image-grid">
          {galleries.length &&
            galleries[0]?.images.slice(0, 4).map((image) => {
              return (
                <li key={image.alt}>
                  {image && <Image {...image} alt={image.alt} />}
                </li>
              );
            })}
        </ul>
      ) : (
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
          {selectedGallery.images.slice(0, 4).map((image) => (
            <div key={image.alt} className="main-image-container">
              <Image {...image} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      )}
    </GalleryStyles>
  );
};

export default Gallery;
