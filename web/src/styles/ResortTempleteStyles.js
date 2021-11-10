import styled from "styled-components";
import { device } from "../styles/deviceSizes";
const ResortStyles = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow-y: auto;
  overscroll-behavior-y: contain;
  scroll-snap-type: y proximity; */

  h1 {
  }

  h2 {
    letter-spacing: 1rem;
    text-align: center;
  }

  #overview {
    margin: 10rem 0;

    @media ${device.tablet} {
      margin: 5rem 0;
    }
  }
  .title {
    text-align: center;
    color: var(--primary);
    font-weight: bold;
    font-size: 7.2rem;
    padding-bottom: 7rem;
    letter-spacing: 1rem;

    @media ${device.tablet} {
      font-size: 4rem;
      /* padding-bottom: 2rem; */
      padding: 2rem;
    }
  }

  /* .left-nav {
   
  } */

  .resort {
    &__image {
      position: relative;
      /* scroll-snap-align: center; */
      max-height: 100vh;
      overflow-y: hidden;
      /* position: relative;
      top: -18rem; */
      z-index: -1;

      transition: 1s all;
      opacity: 1;

      @media ${device.laptop} {
        height: 80vh;
      }
      @media ${device.tablet} {
        height: 65vh;
      }
      /* img {
        object-position: bottom;
      } */
      .text {
        position: absolute;
        bottom: 10rem;
        left: 10%;

        @media ${device.tablet} {
          bottom: 0;
        }
        h1,
        p {
          color: #fff;
        }
        h1 {
          font-family: "Roboto";
          text-transform: uppercase;
          font-weight: normal;
        }
      }
    }

    /* &__amenties {
  
    } */

    &__highlights {
      margin-top: 10rem;
      margin-bottom: 10rem;
      text-align: center;
      padding: 0 15%;
      display: flex;
      flex-direction: column;
      @media ${device.laptopM} {
        padding: 0 10%;
      }
      @media ${device.tablet} {
        margin-top: 5rem;
        padding: 0 3rem;
      }

      .carousel {
        display: none !important;
        @media ${device.tablet} {
          display: unset !important;
        }

        .slider-control-bottomcenter {
          bottom: -5rem !important;
        }
      }
      h2 {
        margin-bottom: 7rem;
        /* letter-spacing: 1rem; */
      }

      ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.6rem;

        @media ${device.laptop} {
          grid-template-columns: 1fr 1fr;
        }

        @media ${device.tablet} {
          grid-template-columns: 1fr;
          display: none;
        }

        li {
          position: relative;

          &:hover {
            transition: all 0.3s;

            p {
              transition: all 0.3s;
              opacity: 1;
            }
            &:after {
              content: "";
              background: #000;
              left: 0;
              top: 0;
              opacity: 0.4;
              width: 100%;
              height: 100%;
              position: absolute;
              z-index: 50;
              /* right: -55vw; */
            }
          }
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      a {
        position: absolute;
        color: #fff;
        font-size: 2.2rem;
        padding: 1rem 5rem;
        bottom: 3rem;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #fff;
        z-index: 100;
        width: fit-content;
        display: flex;
        align-items: center;

        svg {
          margin-left: 1rem;
        }

        @media ${device.laptopM} {
          bottom: 0;
        }
        @media ${device.tabletL} {
          padding: 1rem 2.5rem;
        }
      }
      p {
        width: 90%;
        position: absolute;
        /* top: 20%; */
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;

        @media ${device.laptopM} {
          top: 35%
          font-size: 1.4rem;
        }
        @media ${device.tabletL} {
          font-size: 1.4rem;
        }

        opacity: 0;
        color: #fff;
        align-self: center;
        line-height: 2.4rem;
      }
    }

    /* &__accomodation {
     
    } */

    &__restaurants {
      margin-top: 10rem;
      margin-bottom: 15rem;
      padding: 0 15%;

      @media ${device.tablet} {
        margin-top: 0;
        margin-bottom: 8rem;
        padding: 0 3rem;
      }
      p {
        font-size: 1.4rem;
      }

      &__header {
        position: absolute;
        width: 40rem;

        @media ${device.laptop} {
          position: unset;
          width: unset;
          text-align: center;

          display: flex;
          flex-direction: column;
          margin-bottom: 5rem;
        }

        h2 {
          color: var(--primary);
          font-weight: bold;
          font-size: 7.2rem;
          width: 30rem;
          line-height: 1;
          padding-bottom: 2rem;

          border-bottom: 2px solid var(--primary);
          margin-bottom: 2rem;
          text-align: left;

          @media ${device.laptop} {
            text-align: center;
            align-self: center;
          }
        }
      }
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20rem;

        position: relative;

        @media ${device.laptop} {
          grid-template-columns: 1fr;
          align-items: center;
        }

        li {
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          position: relative;
          @media ${device.laptop} {
            max-height: unset;
            flex-direction: row;
            margin-bottom: 3rem;
          }

          @media ${device.tablet} {
            max-height: unset !important;
            flex-direction: column;
            &:not(:last-of-type) {
              margin-bottom: 6rem;
            }
          }

          .image-container {
            @media ${device.laptop} {
              max-height: 50rem;
              overflow: hidden;
              margin-right: 2rem;
            }
            @media ${device.tablet} {
              max-height: unset;
              height: 28rem;
              margin-right: 0;

              img {
                height: 100%;
                object-fit: cover;
                object-position: top;
              }
            }

            /* @media ${device.ta} {
              max-height: unset;
            } */
          }
          img {
            height: 80%;
            object-position: top;

            @media ${device.laptop} {
              height: unset;
            }
            @media ${device.laptop} {
              height: 100%;
            }
          }
          &:nth-of-type(odd) {
            margin-top: 20rem;
          }
          &:nth-of-type(even) {
            top: -15rem;
          }
          &:nth-of-type(1) {
            margin-top: 30rem;
          }
          &:nth-of-type(2) {
            top: 0;
          }

          @media ${device.laptop} {
            margin-top: unset !important;
            top: unset !important;
            max-height: unset;
            max-height: 50vh;
          }
        }
      }

      &__text {
        margin-top: -8rem;
        align-self: center;
        max-width: 25rem;

        display: flex;
        flex-direction: column;

        @media ${device.laptopL} {
          margin-top: -6rem;
        }

        @media ${device.tablet} {
          margin-top: 3rem;
          max-width: unset;
        }
        .name {
          font-size: 2rem;
        }
        .alternate-name {
          font-size: 1.6rem;
          font-weight: 100;
          margin-bottom: 2rem;
          color: var(--grey);
          text-transform: capitalize;
          letter-spacing: 0.3rem;
        }
      }
    }
    /* &__gallery {
     
    } */

    &__spas {
      /* height: 120rem; */
      margin-top: 10rem;

      h2 {
        text-transform: capitalize;
      }

      .slider {
        height: 70rem;
      }
      .slider-slide {
        width: 100% !important;
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
    }

    /* &__activities {
   
    } */

    &__second-image {
      /* margin-bottom: 10rem; */
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__faq {
      &:nth-of-type(odd) {
        background: #faf7f7;
      }
    }
  }
`;
export default ResortStyles;
