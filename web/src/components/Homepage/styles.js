import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

// .parallax-wrapper {
//   height: 100vh;
//   overflow-x: hidden;
//   overflow-y: scroll;
//   perspective: 10px;
// }

// .parallax-content {
//

export const HeroStyles = styled.div`
  text-align: center;
  overflow: hidden;
  color: #fff;

  /* position: absolute; */
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  @media ${device.laptop} {
    height: 80vh;
  }
  @media ${device.tablet} {
    height: 65vh !important;
  }

  &:before {
    content: "";
    position: absolute;
    opacity: 0.3;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #000;

    @media ${device.laptop} {
      height: inherit;
    }
  }
  h1 {
    text-transform: uppercase;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: "Roboto";
    font-size: 5rem;
    color: #fff;

    @media ${device.laptop} {
      font-size: 3rem;
      padding: 0 2rem;
    }
  }
  p {
  }

  .video {
    height: inherit;
    div {
      height: inherit;
    }
  }

  video {
    height: 100%;
    width: 100vw;
    object-fit: fill;

    @media ${device.laptop} {
      width: 120%;
      position: relative;
      left: -10%;
    }
  }
`;

export const HandCraftedJourneysStyles = styled.div`
  margin: 10rem 0;
  padding: 0 15%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptopL} {
    padding: 0 15%;
  }
  @media ${device.laptop} {
    padding: 0 10%;
  }
  @media ${device.tablet} {
    margin: 5rem 0;
    padding: 0 1.5rem;
  }

  h2,
  p {
    text-align: center;
  }

  h2 {
    text-transform: lowercase;
    max-width: 50rem;
    margin-bottom: 3rem;
    letter-spacing: 1rem;

    @media ${device.tablet} {
      letter-spacing: unset;
    }
  }

  .subtitle {
    text-transform: uppercase;
    color: var(--primary);
  }

  .description {
    margin-bottom: 10rem;
    font-size: 1.6rem;
    max-width: 55rem;
    color: var(--grey);
    line-height: 3rem;
  }

  ul {
    margin-bottom: 7rem;
    /* display: flex;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    @media ${device.tablet} {
      grid-template-columns: 1fr;
    }

    .image-container {
      width: 100%;
    }
    text-align: center;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h3 {
      margin-top: 3rem;
      margin-bottom: 1.5rem;
      font-size: 2.4rem;
      font-weight: bold;
      color: #000;
      text-transform: unset;
    }
    p {
      max-width: 25rem;
      text-align: center;
      color: var(--grey1);
      line-height: 3rem;
    }
  }

  .btn {
    text-transform: capitalize;
  }
`;

export const MagazineStyles = styled.div`
  margin-bottom: 22rem;
  display: flex;
  flex-direction: column;

  padding: 0 15%;

  @media ${device.laptopL} {
    padding: 0 15%;
  }
  @media ${device.laptopM} {
    padding: 0 10%;
  }

  @media ${device.tablet} {
    margin-bottom: 7rem;
    padding: 0 1.5rem;
  }

  h2,
  .subtitle {
    text-align: center;
  }
  .subtitle {
    margin-bottom: 6rem;
    font-size: 2.4rem;
    text-transform: uppercase;
    color: var(--primary);
  }
  ul {
    margin-bottom: 7rem;
    /* display: flex;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    @media ${device.tablet} {
      grid-template-columns: 1fr;
      text-align: left;
    }

    a {
      display: flex;
      flex-direction: column;
    }

    .image-container {
      width: 100%;
    }
    h3 {
      margin-top: 3rem;
      margin-bottom: 1.5rem;
      font-size: 2.4rem;
      font-weight: bold;
      color: #000;
      text-transform: unset;
    }
    p {
      /* max-width: 25rem; */
      @media ${device.tablet} {
        align-self: center;
        /* max-width: unset; */
      }
    }
  }

  a {
    align-self: center;
  }

  .btn {
    padding: 1.5rem 4rem;
    align-self: center;
    width: fit-content;
    text-transform: capitalize;
  }
`;
