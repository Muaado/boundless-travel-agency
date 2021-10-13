import styled from "styled-components";

export const CarouselButton = styled.button`
  cursor: pointer;
  background: var(--lightGrey1);
  border: none;
  padding: 1.7rem 2rem;
  margin: 0 2rem;

  border-radius: 50%;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  svg {
    path {
      fill: ${(props) => `${props.bgColor}`};
    }
  }
`;
