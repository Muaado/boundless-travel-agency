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
    &__description {
      max-width: 80rem;
      font-size: 2.4rem;
      font-weight: 100;
      text-align: center;
      align-self: center;
      padding: 5rem 0;

      line-height: 3.6rem;

      /* color: var(--grey); */
    }
    &__amenties {
      margin-bottom: 10rem;
      align-self: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
      li {
        /* border-right: 1px solid #000; */
        /* padding: 0 1rem; */
        text-align: center;

        &:nth-of-type(1),
        &:nth-of-type(4) {
          border-right: 1px solid var(--grey);
          padding-right: 1rem;
          text-align: right;
        }
        &:nth-of-type(3),
        &:last-of-type {
          border-left: 1px solid var(--grey);
          padding-left: 1rem;
          text-align: left;
        }
      }
    }

    &__highlights {
      margin: 10rem 0;
      text-align: center;
      padding: 0 10%;
      display: flex;
      flex-direction: column;
      @media ${device.laptopL} {
        padding: 0;
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

    &__accomodation {
      padding: 0 10%;
      @media ${device.laptopL} {
        padding: 0;
      }
      h2 {
        text-align: center;
        padding: 5rem;
      }
      ul {
        display: flex;
        gap: 2rem;
      }

      .image-container {
        width: 100%;
        @media ${device.laptopL} {
        }
        height: 70rem;
        img {
          height: 80%;
        }
        p {
          font-family: "Playfair Display";
          font-size: 3rem;
          padding: 2rem 0;
          text-align: right;
        }
      }
    }

    &__restaurants {
      margin-top: 10rem;
      padding: 0 10%;

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
    &__gallery {
      display: flex;
      flex-direction: column;

      text-align: center;
      padding: 0 10%;
      @media ${device.laptopL} {
        padding: 0;
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
        /* height: 70rem; */
      }

      .image-grid {
        /* height: 70rem; */
        display: grid;
        gap: 1.5rem;
        grid-template-columns: 1fr 1fr 1fr;
        li {
          &:nth-of-type(1) {
            grid-row: 1/3;
          }
        }
        li {
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
    }

    &__spa {
      margin-top: 14rem;

      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      .container {
        display: flex;
        align-self: center;

        justify-content: center;
        max-width: 1400px;
        div {
          padding-top: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-bottom: 5rem;

          &:nth-of-type(2) {
            padding: 10rem;
          }

          p {
            padding-left: 5rem;
            max-width: 60rem;
          }
        }
      }

      &:after {
        content: "";
        background: #c0a7772b;
        width: 100%;
        height: 100%;
        position: absolute;
        right: -55vw;
      }

      background: #fff6f6;
      h2 {
        width: max-content;
        text-transform: capitalize;
        z-index: 100;
      }
      p {
        bottom: 0;
      }
      .image-web {
        width: 70rem;
        position: relative;
        right: -5rem;
        top: -2rem;
        z-index: 100;
      }

      .image-thumb {
        max-width: 35rem;
        z-index: 100;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__activities {
      margin: 10rem 0;
      text-align: center;
      padding: 0 10%;
      display: flex;
      flex-direction: column;
      @media ${device.laptopL} {
        padding: 0;
      }

      h2 {
        margin-bottom: 3rem;
        letter-spacing: 1rem;
      }
      p {
        margin-bottom: 5rem;
        width: 70rem;
        color: var(--grey);
        align-self: center;
      }

      ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.6rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    &__reviews {
      display: flex;
      flex-direction: column;

      margin-bottom: 5rem;
      padding: 2rem 10%;
      min-width: fit-content;

      h2 {
        letter-spacing: 1rem;
        text-align: center;
      }

      .carousel {
        /* padding: 5rem; */
        display: flex;
        justify-content: center;
        .slider-frame {
          padding: 5rem !important;
          display: flex;
          justify-content: center;
        }

        .slider-slide {
          @media ${device.tablet} {
            display: flex !important;
            justify-content: center;
          }
        }
      }

      &__review {
        /* max-width: 25rem; */
        width: fit-content;

        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);

        margin-right: 0;

        p {
          width: 20rem;
        }
        p:first-of-type {
          font-weight: bold;
          font-size: 2rem;
          margin-bottom: 5rem;
        }
      }
    }

    &__second-image {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
export default ResortStyles;
