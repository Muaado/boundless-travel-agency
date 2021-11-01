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
  }
  .title {
    text-align: center;
    color: var(--primary);
    font-weight: bold;
    font-size: 7.2rem;
    padding-bottom: 7rem;
    letter-spacing: 1rem;
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

      /* img {
        object-position: bottom;
      } */
      .text {
        position: absolute;
        bottom: 10rem;
        left: 10%;

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
      @media ${device.laptopL} {
        /* padding: 0; */
      }

      h2 {
        margin-bottom: 7rem;
        /* letter-spacing: 1rem; */
      }

      ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.6rem;

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
      }
      p {
        width: 90%;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;

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
      margin-bottom: 22rem;
      padding: 0 15%;
      p {
        font-size: 1.4rem;
      }

      &__header {
        position: absolute;
        width: 40rem;

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
        }
      }
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20rem;

        position: relative;
        li {
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          position: relative;

          img {
            height: 80%;
            object-position: top;
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

    &__spa {
      margin-top: 12rem;
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
