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
    &__header {
      margin: 7rem 0;
      display: flex;
      padding: 0 10%;
      position: relative;
      justify-content: center;

      @media ${device.laptopL} {
        padding: 0;
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

      .image-container {
        max-height: 80rem;
        max-width: 60rem;
        position: absolute;
        top: 6rem;
        left: -50rem;
        /* left: -10rem; */
      }

      .container {
        /* background: black; */
        position: relative;
        height: 100rem;
        margin-left: 50rem;
        padding: 15rem 12rem 15rem 15rem;
        border: 1px solid var(--primary);
        p {
          max-width: 40rem;
          font-size: 2.2rem;
          color: var(--grey1);
        }
      }

      .tagline {
        /* fo */
        font-style: italic;
        font-size: 2.4rem;
      }

      .btn {
        margin-top: 7rem;
        padding: 1.5rem 4rem;
        font-size: 2rem;
      }
    }
    &__property-overview {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 5rem;
      h2 {
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
      padding: 0 10%;
      @media ${device.laptopL} {
        padding: 0;
      }

      h2 {
        margin-bottom: 7rem;
      }
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 6rem;

        .image-container {
          height: 50rem;
        }
      }

      &__text {
        position: relative;
        top: -4rem;
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

      .slider {
        height: 70rem;
      }
    }
  }
`;
export default VillaStyles;
