import React, { useState } from "react";
import styled from "styled-components";

import ChevronDown from "../../assets/icons/chevron-down.svg";
import ChevronUp from "../../assets/icons/chevron-up.svg";
import { device } from "../../styles/deviceSizes";

const FaqStyles = styled.div`
  margin-bottom: 10rem;
  text-align: center;

  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptopL} {
    padding: 0 10%;
  }
  @media ${device.tablet} {
    margin-bottom: 5rem;
  }

  h2 {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  .description {
    width: 40rem;
    margin-bottom: 5rem;
    font-size: 1.8rem;
    color: var(--grey);

    @media ${device.tablet} {
      width: unset;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 7rem;

    li {
      padding: 3rem;
      text-align: left;
      width: 100%;
      border: 1px solid var(--grey);
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;

      &.selected {
        box-shadow: 0px 59px 107px rgba(0, 0, 0, 0.05);
        border: none;
      }

      &:not(:last-of-type) {
        margin-bottom: 3rem;
      }

      .question {
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .answer {
        margin-top: 5rem;
        color: var(--grey);
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          width: 2.5rem;
        }
      }
    }
  }

  .btn {
    padding: 1.5rem 5rem;
  }
`;

const Faq = ({ faq }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(-1);

  return (
    <FaqStyles>
      <h2>Frequently Asked Questions (FAQ)</h2>
      <p className="description">
        Browse our FAQ's below, if you can not find the answer you're looking
        for please contact us
      </p>

      <ul>
        {faq.slice(0, 5).map(({ question, answer }, index) => (
          <li
            className={`clickable ${
              selectedQuestion === index ? "selected" : ""
            }`}
            key={question}
            onClick={() => {
              if (selectedQuestion !== index) {
                setSelectedQuestion(index);
              } else {
                setSelectedQuestion(-1);
              }
            }}
          >
            <p className="question">
              {question} {selectedQuestion !== index ? <ChevronDown /> : ""}
            </p>

            {selectedQuestion === index && (
              <p className="answer">
                {" "}
                {answer} <ChevronUp />
              </p>
            )}
          </li>
        ))}
      </ul>

      <button className="btn">View more...</button>
    </FaqStyles>
  );
};

export default Faq;
