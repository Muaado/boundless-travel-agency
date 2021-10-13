import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

export const HeroStyles = styled.div`
  text-align: center;

  color: #fff;

  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  &:before {
    content: "";
    position: absolute;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    background-color: #000;
  }
  h1 {
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  p {
  }

  video {
    height: 100%;
    width: 100vw;
    object-fit: fill;
  }
`;

export const SearchBar = styled.form`
  padding: 1rem;
  position: absolute;
  top: -3.5rem;

  background: #fff;
  align-self: center;

  display: flex;
  width: 80%;

  filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25));
  input {
    padding: 1rem;
    border: none;
    width: 20%;

    &[name="location"] {
      width: 60%;
    }
    &:focus {
      outline: none;
    }
    &:not(:last-of-type) {
      border-right: 1px solid #000;
    }
  }

  button {
    border-radius: 2px;
  }
`;

export const MagazineStyles = styled.div`
  margin-bottom: 22rem;
  display: flex;
  flex-direction: column;

  padding: 0 10%;

  @media ${device.laptopL} {
    padding: 0 10%;
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
    .image-container {
      width: 100%;
    }
    h3 {
      font-size: 2.4rem;
      font-weight: bold;
      color: #000;
      text-transform: unset;
    }
    p {
      max-width: 25rem;
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

export const NewsLetterStyles = styled.div`
  /* margin: 0 -12%; */
  margin-bottom: 10rem;
  position: relative;
  /* height: 70rem; */
  color: #fff;
  @media ${device.laptopL} {
    margin: 20rem 0;
    margin-bottom: 10rem;
  }

  h2 {
    position: absolute;
    top: 20%;
    right: 25%;
    color: #fff;
    font-size: 4rem;
    font-weight: bold;
    text-transform: capitalize;
  }

  .container {
    display: flex;
    width: 50%;
    input {
      width: 100%;
      padding: 0 2rem;
    }
    .btn {
      background: var(--primary);
    }
  }

  form {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem 4rem;

    align-items: center;
    background: rgba(0, 0, 0, 0.45);
    width: 80vw;
    display: flex;
    justify-content: space-between;
    /* 
  &:after {
    padding: 4rem;
    content: "";
    position: absolute;
    top: 0;
    left: -20%;
    width: 120%;
    height: 100%;
    background: #000;
    opacity: 0.4;
  } */
    h2 {
      z-index: 100;
      font-style: italic;
      position: unset;
      font-size: 3.2rem;
      font-weight: normal;
      width: max-content;
      /* margin-right: 20rem; */
    }
  }
`;
