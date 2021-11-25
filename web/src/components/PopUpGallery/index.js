import React, { useEffect, useState } from "react";
import LightBox from "./lightbox";
// import Image from "next/image"
import Image from "gatsby-plugin-sanity-image";
import { GalleryImage } from "./style";
import Carousel from "nuka-carousel";
import CarouselButton from "../Ui/CarouselButton";
import useWindowSize from "../../lib/useWindowSize";

import Placeholder from "../../assets/placeholder.svg";

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

  const [numberOfSlides, setNumberOfSlides] = useState(3);
  const [cellSpacing, setCellSpacing] = useState(10);
  const size = useWindowSize();

  useEffect(() => {
    const { width } = size;
    const isMobileOnly = width <= 576;
    const isTablet = width > 576 && width < 780;
    const isTabletL = width > 780 && width < 992;
    const isSreenSM = width > 992 && width < 1024;
    const isSreenLG = width > 1024 && width < 1440;
    const screenXL = width > 1440 && width < 1600;
    const screenXXL = width > 1600 && width < 1700;
    const screenXXXL = width > 1700;

    const slides = () => {
      if (isMobileOnly) return 1;
      if (isTablet) return 1;
      if (isTabletL) return 1;
      if (isSreenSM) return 1;
      if (isSreenLG) return 1;
      if (screenXL) return 1;
      if (screenXXL) return 1;
      if (screenXXXL) return 1;
      return 5;
    };
    const spacing = () => {
      // if (isMobileOnly) return 50;
      if (isMobileOnly) return 0;
      if (isTablet) return 0;
      if (isTabletL) return 20;
      if (isSreenSM) return 20;
      if (isSreenSM) return 20;
      // return 200;
      return 0;
    };

    setNumberOfSlides(slides);
    setCellSpacing(spacing);
  }, [size]);

  return (
    <GalleryImage className="gallery carousel">
      <div className="image-container">
        <Carousel
          speed={1000}
          cellSpacing={cellSpacing}
          slidesToShow={numberOfSlides}
          className=""
          // renderCenterRightControls={({ nextSlide }) => (
          //   <CarouselButton onClick={nextSlide} chevronRight={true} />
          // )}
          // renderCenterLeftControls={({ previousSlide }) => (
          //   <CarouselButton onClick={previousSlide} />
          // )}
        >
          {images?.images.length
            ? images.images.map((image) => (
                <div key={image.alt} className="carousel__image-container">
                  {image && image.asset && (
                    <Image {...image} alt={image.alt} onClick={handleOpen(0)} />
                  )}
                </div>
              ))
            : [1, 2, 3].map((item) => (
                <div key={item} className="carousel__image-container">
                  <Placeholder style={{ width: "100%", height: "100%" }} />
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
