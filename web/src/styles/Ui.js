import styled from "styled-components";

export const CarouselButtonStyles = styled.button`
  cursor: pointer;
  /* background-color: ${(props) => `${`'var(--lightGrey1)'`}`}; */
  background: var(--lightGrey);
  border: none;
  padding: 1.7rem 2rem;
  margin: 0 2rem;
  /* bacg */
  opacity: 0.7;

  border-radius: 50%;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  svg {
    path {
      fill: ${(props) => `${props.bgColor}`};
      /* background: ; */
    }
  }
`;
