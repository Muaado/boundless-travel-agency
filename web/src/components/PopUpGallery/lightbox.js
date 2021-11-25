import React from "react";
import LightboxReact from "lightbox-react";
import "lightbox-react/style.css";

import { GalleryImage } from "./style";

import Image from "gatsby-plugin-sanity-image";

const Lightbox = ({
  images,
  selectedImage,
  handleClose,
  handlePrevRequest,
  handleNextRequest,
  showLightbox,
}) => {
  const array = [];
  images.forEach((image) =>
    array.push(
      <GalleryImage className={`gallery ${showLightbox ? "open" : ""}`}>
        {image && image.asset && <Image {...image} alt={image.alt} />}
      </GalleryImage>
    )
  );

  return (
    <LightboxReact
      className="modal"
      enableZoom={false}
      clickOutsideToClose={true}
      mainSrc={array[selectedImage]}
      nextSrc={array[(selectedImage + 1) % array.length]}
      prevSrc={array[(selectedImage + array.length - 1) % images.length]}
      onCloseRequest={handleClose}
      onMovePrevRequest={handlePrevRequest(selectedImage, array.length)}
      onMoveNextRequest={handleNextRequest(selectedImage, array.length)}
    />
  );
};

export default Lightbox;
