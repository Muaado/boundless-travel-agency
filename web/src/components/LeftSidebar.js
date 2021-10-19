import React, { useRef } from "react";
import styled from "styled-components";
import ChevronUp from "../assets/icons/chevron-up.svg";

const LeftSidebarStyles = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;

  justify-content: ${(props) => (props.list ? "space-between" : "flex-end")};
  width: fit-content;
  /* background: #fff; */
  position: fixed;
  left: 5rem;
  top: 30%;
  z-index: 100;
  li {
    color: var(--grey);
    margin-bottom: 2rem;
    a {
      text-transform: capitalize;
    }

    &.current {
      font-weight: bold;
      color: var(--brown);
      position: relative;

      &:before {
        content: "";
        width: 3rem;
        height: 0.5rem;
        background: var(--brown);
        position: absolute;
        left: -4rem;
        top: 0.8rem;
      }
    }
  }

  button {
    /* align-self: flex-end ; */
    border-radius: 50%;
    /* padding: 2rem; */
    width: 5rem;
    height: 5rem;
    background: var(--darkGreen);
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    svg {
      color: #fff;
      path {
        stroke: #fff;
      }
    }
  }
`;

const LeftSidebar = ({ list }) => {
  const navRef = useRef();

  const windowGlobal = typeof window !== "undefined";
  if (windowGlobal) {
    window.addEventListener("scroll", () => {
      let fromTop = window?.scrollY + 100;

      navRef.current?.childNodes?.[0]?.childNodes?.forEach((link) => {
        let section = document.querySelector(link.firstChild.hash);

        if (section)
          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            link.classList.add("current");
          } else {
            link.classList.remove("current");
          }
      });
    });
  }

  return (
    <LeftSidebarStyles list={list} ref={navRef} className="left-nav">
      {list && (
        <ul>
          {list.map((item) => (
            <li key={item}>
              <a href={`#${item}`}>{item.split("-").join(" ")}</a>
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        onClick={() => {
          const windowGlobal = typeof window !== "undefined";

          if (windowGlobal) {
            window.scrollTo(0, 0);
          }
        }}
      >
        <ChevronUp />
      </button>
    </LeftSidebarStyles>
  );
};

export default LeftSidebar;
