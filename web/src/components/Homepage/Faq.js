import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";

import ChevronDown from "../../assets/icons/chevron-down.svg";
import ChevronUp from "../../assets/icons/chevron-up.svg";
import { device } from "../../styles/deviceSizes";

const FaqStyles = styled.div`
  text-align: center;

  padding: 10rem 15% 10rem 15%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptopL} {
    padding: 10rem 15% 10rem 15%;
  }
  @media ${device.tablet} {
    margin-bottom: 5rem;
    padding: 5rem 1.5rem;
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

      transition: all 1s;
      box-shadow: none;
      min-height: 10rem;
      max-height: 15rem;
      outline: none;

      &.selected {
        box-shadow: 0px 59px 107px rgba(0, 0, 0, 0.05);
        border-color: #fff;
        min-height: 15rem;
        max-height: 60rem;
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
      svg {
        width: 2rem;
        height: 2rem;
      }

      .answer {
        margin-top: 5rem;
        color: var(--grey);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  .btn {
    padding: 1.5rem 5rem;
  }
`;

const Faq = (props) => {
  const [selectedQuestion, setSelectedQuestion] = useState(-1);
  const { faq, path, onClick, slice, className } = props;

  return (
    faq && (
      <FaqStyles
        className={`faq__section ${className}`}
        // data-aos="fade-up"
        // data-aos-delay="50"
        // data-aos-dution="1000"
        // data-aos-easing="ease-in-out"
      >
        <h2>{faq.name}</h2>
        <p className="description">
          Browse our FAQ's below, if you can not find the answer you're looking
          for please contact us
        </p>

        <ul>
          {faq?.faqQuestionsAnswers
            .slice(0, slice ? slice : 4)
            .map(({ question, answer }, index) => (
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
                  {question}{" "}
                  {selectedQuestion !== index ? <ChevronDown /> : <ChevronUp />}
                </p>

                {/* {selectedQuestion === index && (
                <p className="answer"> {answer}</p>
              )} */}
              </li>
            ))}
        </ul>

        {!slice && path === "/" ? (
          <Link to="/faq">
            <button className="btn">View more...</button>
          </Link>
        ) : slice < 100 && path === "/resort" ? (
          <button className="btn" onClick={onClick}>
            View more...
          </button>
        ) : (
          ""
        )}
      </FaqStyles>
    )
  );
};

export default Faq;
