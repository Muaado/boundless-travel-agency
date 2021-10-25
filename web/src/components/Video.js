import React from "react";
const Video = ({ videoSrcURL, className }) => (
  <video
    className={`video-player ${className}`}
    // height="100%"
    // width="100%"
    loop
    muted
    autoPlay
  >
    {console.log(videoSrcURL)}
    <source src={videoSrcURL} type="video/mp4" />
  </video>
  // <div className="video">
  //   <iframe
  //     src={videoSrcURL}
  //     title={videoTitle}
  //     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  //     frameBorder="0"
  //     webkitallowfullscreen="true"
  //     mozallowfullscreen="true"
  //     allowFullScreen
  //   />
  // </div>
);
export default Video;

{
  /* <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/8PNTZEv-e54"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>; */
}
