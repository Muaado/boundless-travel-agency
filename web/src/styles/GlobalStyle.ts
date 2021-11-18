import { createGlobalStyle } from "styled-components";
import { device } from "./deviceSizes";

export const GlobalStyle = createGlobalStyle`

  :root {
    --darkRed: #5D0012;
    --lightOrange: #B39A6A;
    --darkGreen: #004743;
    --brown: #76622E;
    




    /* Define colors as colors */
    --pureBlack: #000;
    --black: #2b2926;
    --cream: #eeeeee;
    /* --lightOrange: #ff9100; */
    --orange: #EA4C2F;
    --green: #5cb85c;
    --red: #cb1d00;
    --blue: #008cd0;
    --purple: #9b2a9a;
    --pink: #9b2a9a;
    --pureBlack: #000;
    --pureWhite: #fff;
    --lightGrey: #e8e8e8;
    --lightGrey1: #F5F3F3;
    --lightGrey2: #EBEAEA;
    --lightGrey3: #dbdbdb;
    --grey: #8e8e8e;
    --grey1: #505050;
    --grey2: #CCCCCC;
    --darkGrey: #2f2f2f;
    /* Define colors intentions */
    --background: var(--cream);
    --textColor: var(--black);
    --lineColor: var(--lightGrey);
    --primary: var(--lightOrange);
    --secondary: var(--darkRed);
    --primaryDark20: var(--orangeDark20);
    --cardBg: var(--pureWhite);
    --headerBg: var(--black);

    /* Styles */
    --line: 2px solid var(--lineColor);
    --transition: 0.3s ease;
    --box-shadow:  0px 4px 6px #00000029;
    --selected-box-shadow:  0px 4px 6px var(--primary);

    /* Types */
    --bodyFont: "Glacial Indifference", sans-serif;
    --baseFontSize: 16px;
    --h1: 3rem;
    --h2: 2.5rem;
    --h3: 2rem;
    --h4: 1.5rem;
    --h5: 1.5rem;
    --heading-line: 1rem;
    --smallText: 0.8rem;

    /* Elevation */
    --level--1: inset 0 1px 3px 0 rgba(0, 0, 0, 0.1), inset 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --level-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --level-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --level-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --level-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }



  html {
    box-sizing: border-box;
    font-size: 62.5%;
    color: #222;
    line-height: 1.4;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .btn {
    background: var(--secondary);
    color: var(--pureWhite);
    border: none;
    padding: 1.5rem 6rem;
    outline: none;
    cursor: pointer;
    font-size: 1.6rem;
    text-transform: uppercase;
    
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a, a:visited {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    /* font-weight: normal; */
    font-family: "Roboto";
    font-size: 5rem;
    
    
  }

  h1,h2,h3,h4,h5,h6, p {
    margin: 0;
    
  }

  .carousel {
    outline: none;

    .slider-control-centerright,
    .slider-control-centerleft {
     @media ${device.tablet} {
        bottom: 1rem !important;
        top: unset !important;
        height: max-content ;
     }
    }
  }

  h1 {
    color: var(--primary);
    /* text-transform: unset; */
    font-size: 5rem;
    font-weight: bold;
    @media ${device.tablet} {
      font-size: 3.6rem;
    }
  }
  h2,h3,h4,h5,h6 {
    text-transform: uppercase;
    color: var(--darkGreen);
    font-size: 5rem;
    @media ${device.tablet} {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 2.8rem;
    color: var(--grey1);
      @media ${device.tablet} {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .disappear-on-scroll {
    transition: 1s all;
    &.hide {
      opacity: 0 !important;
      /* transform: translateY(-50px); */
    }
  }


  .white {
    color: #fff !important;
  }
  ::-moz-selection {
    background: #b3d4fc;
    text-shadow: none;
  }

  ::selection {
    background: #b3d4fc;
    text-shadow: none;
  }


  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
  }


  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }


  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }


  textarea {
    resize: vertical;
  }

  .hidden,
  [hidden] {
    display: none !important;
  }


  .sr-only {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }


  .sr-only.focusable:active,
  .sr-only.focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    white-space: inherit;
    width: auto;
  }

  .invisible {
    visibility: hidden;
  }

  .clearfix::before,
  .clearfix::after {
    content: " ";
    display: table;
  }

  .clearfix::after {
    clear: both;
  }


  .bold {
    font-weight: bold;
  }

  .clickable {
    cursor: pointer;
  }

  

  @media print,
    (-webkit-min-device-pixel-ratio: 1.25),
    (min-resolution: 1.25dppx),
    (min-resolution: 120dpi) {
    /* Style adjustments for high resolution devices */
  }

  @media print {
    *,
    *::before,
    *::after {
      background: #fff !important;
      color: #000 !important;
      /* Black prints faster */
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]::after {
      content: " (" attr(href) ")";
    }

    abbr[title]::after {
      content: " (" attr(title) ")";
    }

    a[href^="#"]::after,
    a[href^="javascript:"]::after {
      content: "";
    }

    pre {
      
      white-space: pre-wrap !important;
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }
    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }
`;
