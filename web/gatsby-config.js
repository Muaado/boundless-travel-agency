// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       {
    //         resolve: "gatsby-remark-embed-video",
    //         options: {
    //           width: 800,
    //           ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
    //           height: 400, // Optional: Overrides optional.ratio
    //           related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
    //           noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
    //           loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
    //           urlOverrides: [
    //             {
    //               id: "youtube",
    //               embedURL: (videoId) =>
    //                 `https://www.youtube-nocookie.com/embed/${videoId}`,
    //             },
    //           ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
    //           containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
    //           iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
    //         },
    //       },
    //     ],
    //   },
    // },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        projectId: "4x5xvp2b",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `source sans pro:300,400,400i,700`, // you can also specify font weights and styles
          `Playfair Display`,
          `source sans pro:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
