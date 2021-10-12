import styled from "styled-components";
import { device } from "../styles/deviceSizes";
const VillaStyles = styled.div`
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

  .villa {
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
  }
`;
export default VillaStyles;
