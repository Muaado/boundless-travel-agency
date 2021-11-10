import styled from "styled-components";
import { device } from "../styles/deviceSizes";
export const CollectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .collection {
    &__image {
      max-height: 80vh;
      overflow-y: hidden;

      @media ${device.tablet} {
        height: 60vh;
      }
      img {
        object-position: bottom !important;
      }
    }
    &__title {
      margin-top: 7rem;
      /* margin-bottom: 10rem; */
      letter-spacing: 1rem;
      text-transform: capitalize;
    }

    &__list {
      padding: 0 10%;
      margin-bottom: 10rem;
      width: 100%;

      @media ${device.laptopM} {
        padding: 0 5%;
      }

      &__title {
        margin-top: 10rem;
        margin-bottom: 7rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1.5rem;
        font-weight: lighter;
      }
      .records {
        /* width: 100%; */
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;

        @media ${device.laptop} {
          gap: 2.5rem;
        }

        @media ${device.tablet} {
          grid-template-columns: 1fr;
        }

        li {
          height: 70rem;
          background: var(--lightGrey1);

          @media ${device.laptop} {
            height: 60rem;
          }

          .text {
            padding: 3rem;
            h3 {
              font-size: 2.4rem;
              text-transform: uppercase;
              color: #000;
              margin-bottom: 1rem;
            }
            p {
              color: var(--grey);
              margin-bottom: 5rem;
            }
          }
          img {
            height: 70%;

            @media ${device.laptop} {
              height: 65%;
            }
          }
        }
      }
    }
  }
`;
