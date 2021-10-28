import styled from "styled-components";
import { device } from "../styles/deviceSizes";
const VillaStyles = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    /* text-align: center; */
    /* color: var(--primary); */
    font-weight: bold;
    /* font-size: 7.2rem; */
    /* padding: 7rem 0; */
    letter-spacing: 1rem;
  }

  h2 {
    letter-spacing: 1rem;
    text-align: center;
  }

  .villa {
    &__image {
      max-height: 80vh;
      overflow-y: hidden;
      position: relative;
      /* &:after {
        content: "";

        background: linear-gradient(
          188.95deg,
          #1c2238 30.5%,
          rgba(28, 34, 56, 0) 93.2%
        );
        /* opacity: */
      /* left: 0;
      top: 0;
      opacity: 0.2;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 50; */
      /* right: -55vw; */
      /* } */

      &-title {
        position: absolute;

        font-family: "Roboto";
        font-weight: normal;
        text-transform: uppercase;
        font-size: 4rem;
        color: #fff;
        left: 10%;
        bottom: 10%;
        z-index: 100;
      }
    }
    &__header {
      margin: 7rem 0;
      margin-top: 10rem;
      display: flex;
      padding: 0 10%;
      position: relative;
      justify-content: center;

      @media ${device.laptopL} {
        padding: 0;
      }

      .carousel {
        height: 80rem !important;
        width: 60rem !important;
        position: absolute !important;
        top: 10rem;
        left: -55rem;
        z-index: 100;

        &__button-right,
        &__button-left {
          display: none;
        }

        &__image-container {
          height: 80rem !important;
          width: 60rem !important;
        }

        .slider-control-bottomcenter {
          position: absolute;
          bottom: -10rem !important;

          ul {
            /* display: flex !important;
            align-items: center;
            justify-content: center; */
            li {
              margin: 0;
            }
          }

          .paging-item {
            /* height: fit-content !important; */
            button {
              height: fit-content !important;
              display: flex !important;
              align-items: center;

              svg {
                /* height: 3rem;
                width: 3rem; */
                margin: 0;
              }
            }
          }
        }
      }
      .container {
        /* background: black; */
        position: relative;
        height: 100rem;
        margin-left: 50rem;
        padding: 15rem 8rem 15rem 15rem;
        border: 1px solid var(--primary);
        p {
          max-width: 40rem;
          font-size: 2.2rem;
          color: var(--grey1);
        }
      }

      .alternate-name {
        transform: rotate(90deg);
        position: absolute;
        top: 8rem;
        left: 11rem;
        text-transform: uppercase;
        color: #76622e !important;
        font-family: "Playfair Display";
        font-size: 1.5rem !important;
        letter-spacing: 0.5rem;
      }

      h1 {
        margin-top: 5rem;
        font-size: 3.6rem;
        font-weight: normal;
        color: #76622e;
      }

      h3 {
        padding: 3rem 0;
      }

      .tagline {
        /* fo */
        font-style: italic;
        font-size: 2.4rem;
      }

      ul {
        padding: 3rem 4rem;
        display: flex;
        li {
          margin-right: 4rem;
          height: 8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          &:first-of-type {
            svg {
              margin-top: 1rem;
            }
          }
        }
      }

      .btn {
        margin-top: 4rem;
        padding: 1.5rem 4rem;
        font-size: 2rem;
      }
    }

    &__room-features {
      margin-bottom: 10rem;
      position: relative;
      overflow-y: hidden;
      h2,
      h3 {
        color: #fff;
        text-transform: capitalize;
      }
      h2 {
        margin-bottom: 8rem;
      }

      .content {
        padding: 4rem 3rem;
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* align-items: center; */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;

        background: rgba(0, 0, 0, 0.3);
        /* box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.5); */
        box-shadow: 5px 33px 42px rgb(0 0 0 / 60%);

        height: 100%;

        h3 {
          padding: 1rem 0;

          display: flex;
          justify-content: space-between;
          align-items: center;

          font-size: 2.2rem;
          border-bottom: 1px solid var(--primary);

          svg {
            margin-right: 4rem;
          }
        }

        ul {
          li {
            width: 70rem;
            p {
              color: #fff;
            }
            & > * {
              margin-top: 2rem;
              font-size: 2.2rem;
            }
            /* h3 {
              padding-left: 0 !important;
            } */
            ul {
              padding-left: 4rem;
              list-style: disc;
              li {
                margin-bottom: 1rem;
              }
            }
          }
        }
      }
    }

    &__highlights {
      margin-top: 7rem;
      background: #fff6f6;
      padding: 15rem 5%;
      display: grid;
      align-items: center;
      grid-template-columns: 35rem 1fr;
      gap: 4rem;
      h2 {
        font-size: 2.5rem;
        text-align: left;
        margin-bottom: 5rem;
        letter-spacing: 0.5rem;
        text-transform: capitalize;
      }
      h3 {
        text-transform: unset;
      }
      ul {
        /* height: 80rem; */
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 25rem 25rem 25rem;
        li {
          position: relative;
          .text {
            display: flex;
            flex-direction: column;
          }
          &:hover {
            transition: all 0.3s;

            .text {
              height: 100%;
              width: 100%;
              transition: all 0.3s;
              opacity: 1;
              color: #fff;
              z-index: 100;
              text-align: center;
              align-items: center;
              justify-content: center;
              padding: 2rem;
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
          &:first-of-type {
            grid-row: 1/3;
          }
          &:nth-of-type(2) {
            grid-row: 1/2;
          }
          &:nth-of-type(3) {
            grid-row: 1/3;
          }
          &:nth-of-type(5) {
            grid-row: 2/4;
          }
          .text {
            opacity: 0;
            position: absolute;
          }
          h3 {
            color: #fff;
          }
        }
      }
    }
    &__property-overview {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 5rem;
      h2 {
        text-transform: capitalize;
        color: var(--primary);
        position: relative;
        &:before,
        &:after {
          content: "";
          position: absolute;
          top: 50%;
          left: -8rem;
          background: var(--primary);
          width: 4rem;
          height: 2px;
        }
        &:after {
          left: unset;
          right: -8rem;
        }
      }
    }

    &__restaurants {
      margin-top: 10rem;
      margin-bottom: 5rem;
      padding: 0 15%;
      @media ${device.laptopL} {
        /* padding: 0; */
      }

      h2 {
        margin-bottom: 7rem;
      }
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 6rem;
        row-gap: 2rem;

        .image-container {
          height: 50rem;
        }
      }

      &__text {
        margin-top: 1rem;
        position: relative;
        /* top: -4rem; */
        align-self: center;
        /* max-width: 25rem; */

        display: flex;
        flex-direction: column;
        .name {
          font-size: 2rem;
          font-family: "Playfair Display";
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .alternate-name {
          font-size: 1.6rem;
          font-weight: 100;
          margin-bottom: 2rem;
          color: var(--grey);
          text-transform: uppercase;
          letter-spacing: 0.3rem;
        }

        a {
          margin-top: 2.5rem;
          color: var(--grey);
        }
      }
    }

    &__spas {
      /* height: 120rem; */

      h2 {
        text-transform: capitalize;
      }

      .slider {
        height: 70rem;
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

    &__resorts {
      margin-top: 5rem;
      margin-bottom: 10rem;
      padding: 10rem 10%;
      background: #b39a6a;

      /* height: fit-content; */
      .title {
        font-family: "Playfair Display";
        position: absolute;
        left: 0;
        transform: rotate(-90deg);
        color: #fff;
        font-size: 1.4rem;
        /* position: relative; */
        span {
          margin-right: 5rem;
          &.line {
            position: absolute;
            top: 1rem;
            left: 3.5rem;
            width: 3rem;
            height: 1px;
            background: #fff;
            z-index: 100;
          }
        }
      }

      p {
        color: #000;
        margin-top: 2rem;
        text-align: right;
      }
      .carousel {
        /* .slider-frame {
          height: max-content !important;
        } */
        &__node {
          display: block;
          /* height: 100%; */
          height: 60rem;
        }
        .image-container {
          height: 85%;
        }
        position: relative;
        &__button {
          &-right {
            position: absolute;
            left: 5rem;
            top: -5rem;
          }

          &-left {
            position: absolute;
            right: 5rem;
            top: -5rem;
          }
        }
      }
    }
  }
`;
export default VillaStyles;
