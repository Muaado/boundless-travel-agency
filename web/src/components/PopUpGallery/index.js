import React, { useState } from "react";
import LightBox from "./lightbox";
// import Image from "next/image"
import Image from "gatsby-plugin-sanity-image";
import { GalleryImage } from "./style";
import Carousel from "nuka-carousel";
import CarouselButton from "../Ui/CarouselButton";

const GalleryComponent = ({ images }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // console.log(props);
  const handleOpen = (i) => (e) => {
    setShowLightbox(true);
    setSelectedImage(i);
  };
  const handleClose = () => {
    setShowLightbox(false);
    setSelectedImage(null);
  };
  const handlePrevRequest = (i, length) => (e) => {
    setSelectedImage((i - 1 + length) % length);
  };
  const handleNextRequest = (i, length) => (e) => {
    setSelectedImage((i + 1) % length);
  };
  return (
    <GalleryImage className="gallery carousel">
      <div className="image-wrapper">
        <Carousel
          speed={1000}
          className=""
          renderCenterRightControls={({ nextSlide }) => (
            <CarouselButton onClick={nextSlide} chevronRight={true} />
          )}
          renderCenterLeftControls={({ previousSlide }) => (
            <CarouselButton onClick={previousSlide} />
          )}
        >
          {images &&
            images.images.map((image) => (
              <div key={image.alt} className="carousel__image-container">
                <Image {...image} alt={image.alt} onClick={handleOpen(0)} />
              </div>
            ))}
        </Carousel>

        {/* {images.images[0] && (
          <Image 
            {...images.images[0]}
            alt={images.images[0].alt}
            // layout="fixed"
            // width="350"
            // height="200"
            // src={props.images[0]}
            onClick={handleOpen(0)}
          />
        )} */}
      </div>

      {showLightbox && selectedImage !== null && (
        <LightBox
          showLightbox={showLightbox}
          images={images.images}
          handleClose={handleClose}
          handleNextRequest={handleNextRequest}
          handlePrevRequest={handlePrevRequest}
          selectedImage={selectedImage}
        />
      )}
    </GalleryImage>
  );
};
export default GalleryComponent;
