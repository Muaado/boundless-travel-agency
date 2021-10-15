import styled from "styled-components";
import { device } from "../styles/deviceSizes";
const ResortStyles = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    color: var(--primary);
    font-weight: bold;
    font-size: 7.2rem;
    padding: 7rem 0;
    letter-spacing: 1rem;
  }

  h2 {
    letter-spacing: 1rem;
    text-align: center;
  }

  .resort {
    &__image {
      padding: 0 10%;
      @media ${device.laptopL} {
        padding: 0;
      }
    }

    /* &__amenties {
  
    } */

    &__highlights {
      margin: 10rem 0;
      text-align: center;
      padding: 0 10%;
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
      }
      p {
        position: absolute;
        top: 50%;
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
      padding: 0 10%;
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
          display: flex;
          flex-direction: column;
          position: relative;
          &:nth-of-type(odd) {
            margin-top: 15rem;
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
        align-self: center;
        max-width: 25rem;

        display: flex;
        flex-direction: column;
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
      margin-bottom: 3rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
export default ResortStyles;
