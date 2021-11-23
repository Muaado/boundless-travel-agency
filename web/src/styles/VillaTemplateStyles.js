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

    @media ${device.tablet} {
      letter-spacing: unset;
    }
  }

  h2 {
    /* letter-spacing: 1rem; */
    text-align: center;
  }

  .villa {
    &__image {
      max-height: 80vh;
      /* overflow-y: hidden; */
      position: relative;

      .image-container {
        max-height: 80vh;
        overflow-y: hidden;
        @media ${device.tabletL} {
          height: 80vh;
        }
        @media ${device.tablet} {
          height: 60vh;
        }
      }

      @media ${device.tabletL} {
        height: 80vh;
      }
      @media ${device.tablet} {
        height: 60vh;
      }

      &-title {
        position: absolute;

        font-family: "Roboto";
        font-weight: normal;
        text-transform: uppercase;
        font-size: 4rem;
        color: #fff;
        left: 10%;
        bottom: 3%;
        z-index: 100;

        @media ${device.tabletL} {
          /* font-size: 2rem; */
          bottom: 1rem;
          /* letter-spacing: 0.8rem; */
        }
      }

      .mouse_scroll {
        bottom: 30% !important;
      }
    }

    &__calendar {
      /* z-index: 100000; */

      z-index: 1000;
      position: absolute;
      bottom: 20%;
      right: 15%;

      .icon {
        display: flex;
        align-items: center;
        .chevron {
          width: 1.5rem;
          height: 1.5rem;
          margin-left: 1rem;
          path {
            stroke: #000;
          }
        }
      }
      svg {
        width: 3rem;
        height: 3rem;
      }

      ul {
        position: absolute;
        background: #fff;
        padding: 2rem;

        @media ${device.laptopL} {
          right: 0;
        }

        /* transform: translateY(-100%); */
        max-height: 1rem;
        transition: all 0.2s;
        visibility: hidden;
        z-index: -1;
        &.open {
          /* transform: translateY(0); */
          max-height: 50rem;
          visibility: unset;
          z-index: 100;
        }

        &.open {
          li {
            visibility: unset;
            opacity: 1;
          }
        }

        li {
          opacity: 0;
          padding: 0.5rem 1rem;
          width: 20rem;
          display: flex;
          /* justify-content: space-between; */
          /* background: var(--primary); */
          background: rgba(179, 154, 106, 0.3);
          /* color: #fff; */
          margin-bottom: 0.5rem;

          span {
            span {
              margin-right: 0.5rem;
              width: 3rem;
              display: inline-block;
            }
          }

          .per-night {
            font-size: 1.1rem;
            margin-top: 0.5rem;
            margin-left: 0.5rem;
            color: var(--grey);
          }
          /* background-opacity: 0.6; */
        }
      }
    }
    &__header {
      margin: 7rem 0;
      margin-top: 10rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      /* padding: 0 10%; */
      position: relative;
      /* justify-content: center; */

      @media ${device.laptop} {
        margin-top: 0;
        flex-direction: column;
      }

      @media ${device.mobileXl} {
        width: 100vw;
      }

      .carousel {
        /* height: 70rem !important;
        width: 55rem !important; */
        height: 90vh;
        width: 100%;
        max-width: 50vw;

        /* position: absolute !important; */
        /* top: 10rem;
        left: -55rem; */
        z-index: 100;

        @media ${device.desktopS} {
          height: 75vh !important;
        }
        @media ${device.laptopL} {
          height: 70vh !important;
        }

        @media ${device.laptopM} {
          height: 60vh !important;
        }
        @media ${device.laptop} {
          /* height: 50vh !important; */
          width: 65%;
          max-width: unset;
          align-self: center;
        }

        @media ${device.tablet} {
          /* height: 50vh !important; */
          width: 85%;
        }
        @media ${device.mobileXL} {
          /* height: 50vh !important; */
          width: 100%;
        }

        &__button-right,
        &__button-left {
          display: none;
        }

        &__image-container {
          width: 100%;
          height: 90vh;

          @media ${device.desktopS} {
            height: 75vh !important;
          }
          @media ${device.laptopL} {
            height: 70vh !important;
          }
          @media ${device.laptopM} {
            height: 60vh !important;
          }
          @media ${device.laptop} {
            /* height: 50vh !important; */
          }
        }

        .slider-control-bottomcenter {
          position: absolute;
          bottom: -4rem !important;

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
        /* height: 100rem; */
        width: 50%;
        /* margin-left: 50rem; */
        /* padding: 15rem 8rem 15rem 15rem; */
        margin: 5rem 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* border: 1px solid var(--primary); */

        @media ${device.laptop} {
          /* display: flex;
          flex-direction: column;
          margin: 0;
          height: fit-content;
          width: 100%;
          align-items: center; */
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        @media ${device.tablet} {
          width: 100%;
          padding: 0 3rem;
          align-items: flex-start;
          justify-content: flex-start;
        }
        @media ${device.mobileXL} {
          /* padding: 0; */
          min-width: unset;
        }

        p {
          /* max-width: 40rem; */
          /* font-size: 2.2rem; */
          text-align: center;
          color: var(--grey1);
          @media ${device.tablet} {
            text-align: left;
          }
        }
      }

      .alternate-name {
        transform: rotate(90deg);
        position: absolute;
        top: 8rem;
        left: 11rem;
        text-transform: uppercase;
        color: #76622e !important;
        // font-family: "Playfair Display";
        font-size: 1.5rem !important;
        letter-spacing: 0.5rem;

        @media ${device.laptopM} {
          transform: unset;
          left: 5rem;
        }
      }

      h2 {
        margin-bottom: 2.5rem;

        font-weight: normal;
        color: #76622e;

        @media ${device.tablet} {
          text-align: left;
        }
      }

      h3 {
        padding: 3rem 0;
        @media ${device.mobileXL} {
          text-align: center;
        }
      }

      .tagline {
        /* fo */
        font-style: italic;
        font-size: 2.4rem;
      }

      &-icons {
        padding: 3rem 0;
        display: flex;
        justify-content: center;
        /* align-items: center; */

        @media ${device.tablet} {
          justify-content: flex-start;
        }

        @media ${device.laptop} {
          align-items: center;
          justify-content: center;
        }

        li {
          height: 8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          font-size: 1.1rem;
          &:first-of-type {
            svg {
              margin-top: 1rem;
              width: 3.5rem;
              height: 3.5rem;
            }
          }

          @media ${device.tablet} {
            height: 6rem;
          }

          svg {
            @media ${device.tablet} {
              width: 3rem;
              height: 3rem;
            }
          }

          &:not(:last-of-type) {
            margin-right: 4rem;
          }
        }
      }

      .btn {
        align-self: center;
        background: transparent;
        border: 1px solid var(--lightOrange);
        color: var(--lightOrange);
        margin-top: 2rem;
        padding: 1.5rem 10rem;
        font-size: 1.4rem;

        @media ${device.tablet} {
          align-self: flex-start;
        }
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

        @media ${device.laptopM} {
          margin-bottom: 1rem;
          font-size: 3rem;
        }
      }

      .image-container {
        height: 80vh;
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

          @media ${device.laptopM} {
            margin-top: 0.5rem !important;
            font-size: 1.6rem !important;
          }

          svg {
            margin-right: 4rem;
          }
        }

        ul {
          li {
            width: 70rem;

            @media ${device.tabletL} {
              width: 80vw;
            }
            p {
              color: #fff;
              @media ${device.laptopM} {
                /* margin-bottom: 1rem; */
                font-size: 1.6rem !important;
              }
            }
            & > * {
              margin-top: 2rem;
              font-size: 2.2rem;

              @media ${device.laptopM} {
                margin-top: 1rem;
                font-size: 1.6rem !important;
              }
            }
            /* h3 {
              padding-left: 0 !important;
            } */
            ul {
              /* padding-left: 4rem; */
              max-height: 14rem;
              overflow-y: hidden;
              list-style: disc;
              display: grid;
              grid-template-columns: 1fr 1fr;
              li {
                margin-bottom: 0.5rem;
                margin-left: 1rem;
                width: fit-content;
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
      align-self: center;

      @media ${device.laptopL} {
        grid-template-columns: 1fr;
        padding: 10rem 5%;

        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 100vw;
      }

      /* @media ${device.mobileXL} {
        width: 100vw;
      }
      div {
        width: 100vw;
      } */

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

        @media ${device.tablet} {
          grid-template-rows: 20rem 20rem 20rem;

          &.desktop-list {
            display: none;
          }
        }
        @media ${device.mobileXL} {
          grid-template-rows: 12rem 12rem 12rem;
          /* max-width: 90vw; */
          align-self: center;
        }
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
            @media ${device.mobileXL} {
              font-size: 1.6rem;
            }
            @media ${device.mobileL} {
              font-size: 1.4rem;
            }
          }
        }
      }

      .carousel {
        .slider-control-bottomcenter {
          bottom: -5rem !important;
          /* .paging-item {
            button {
              svg {
                width: unset;
                height: unset;
                margin: unset;
              }
            }
          } */
        }
        li {
          h3 {
            position: absolute;
            color: #fff;
            top: 50%;
            left: 50%;
            /* width: 100%; */
            transform: translate(-50%, -50%);
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
              0px 4px 4px rgba(0, 0, 0, 0.25);
          }
        }
      }
    }
    &__property-overview {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 5rem;
      @media ${device.mobileXL} {
        padding: 0 1.5rem;
        width: 100vw;
      }
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
          @media ${device.tablet} {
            content: unset;
            display: none;
          }
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

      display: flex;
      flex-direction: column;

      @media ${device.laptop} {
        padding: 0 10%;
      }

      @media ${device.tablet} {
        margin-top: 5rem;
        padding: 0 1.5rem;
        margin-bottom: 0;
      }
      h2 {
        margin-bottom: 7rem;
      }
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 6rem;
        row-gap: 2rem;

        @media ${device.laptop} {
          grid-template-columns: 1fr;
        }

        .image-container {
          height: 50rem;
          @media ${device.tablet} {
            height: 28rem;
          }
        }

        li {
          @media ${device.laptop} {
            display: grid;
            grid-template-columns: 1fr 25rem;
            gap: 4rem;
          }

          @media ${device.tablet} {
            grid-template-columns: 1fr;
          }
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

        @media ${device.laptop} {
          /* max-height: 25rem; */
        }

        .name {
          font-size: 2rem;
          /* font-family: "Playfair Display"; */
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

      .btn {
        margin-top: 5rem;
        align-self: center;
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
      position: relative;

      @media ${device.tablet} {
        padding: 3rem 1.5rem;
      }

      /* height: fit-content; */
      .title {
        /* font-family: "Playfair Display"; */
        position: absolute;
        left: 0;
        transform: rotate(-90deg);
        color: #fff;
        font-size: 1.4rem;
        /* position: relative; */

        @media ${device.laptop} {
          transform: unset;
          left: 10%;
          top: 5rem;
        }

        span {
          margin-right: 1rem;
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

        .slider-control-bottomcenter {
          position: absolute;
          bottom: -45px;
          left: 50%;
          transform: translateX(-50%);
        }
        .slider-control-bottomcenter {
          max-width: 80vw;
          overflow-x: hidden;
          /* max-width: 10%;
          overflow: hidden;
          position: relative; */

          /* ul {
            display: flex;
            /* width: 10rem; */

          /* li {
              background: #000;
              width: 1rem;
              height: 1rem;
              margin: 0 0.5rem;
              cursor: pointer;
              &.active {
                background: blue;
              }
            }
          } */
        }
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
            /* position: absolute; */
            /* left: 5rem; */
            /* top: -5rem; */
          }

          &-left {
            /* position: absolute; */
            /* right: -2rem; */
            /* top: -5rem; */
          }
        }
      }
    }
  }
`;
export default VillaStyles;
