import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

export const GalleryImage = styled.div`
  /* height: 100rem; */
  @media ${device.laptopL} {
    padding-right: 0 !important;
  }
  width: 100%;
  height: max-content;
  /* height: 100%; */
  &.open {
    /* width: 70%;
    height: 70%; */

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* padding: 10%; */
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        min-height: 60rem !important;
        max-height: 60rem !important;
        min-width: 50vw !important;
        max-width: 50vw !important;

        @media ${device.laptopM} {
          min-height: 50rem !important;
          max-height: 50rem !important;
        }

        @media ${device.laptop} {
          min-height: 30rem !important;
          max-height: 20rem !important;
        }

        @media ${device.tablet} {
          min-width: 70vw !important;
          max-width: 100vw !important;
        }

        @media ${device.mobileL} {
          min-width: 100vw !important;
        }
      }
    }
  }

  .image-wrapper {
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
  }

  .image-wrapper > div {
    width: 100%;
    min-height: 20rem;

    position: relative !important;

    @media ${device.laptopM} {
      max-height: 30rem;
    }

    @media ${device.tablet} {
      min-height: 30rem;
    }
  }

  /* @media ${device.tablet} {
    width: 100vw ;
  } */
`;
