import React, { useRef } from "react";
import styled from "styled-components";
import ChevronUp from "../assets/icons/chevron-up.svg";
import { device } from "../styles/deviceSizes";

const LeftSidebarStyles = styled.div`
  opacity: 0;
  height: max-content;
  display: flex;
  flex-direction: column;

  justify-content: ${(props) => (props.list ? "space-between" : "flex-end")};
  width: fit-content;
  /* background: #fff; */
  position: fixed;
  left: 2rem;
  /* top: 30%; */
  bottom: 2rem;
  z-index: 10000;

  transition: all 1s;

  &.show {
    opacity: 1;
  }

  @media ${device.mobileXL} {
    left: 1rem;
  }

  li {
    display: none;
    @media ${device.tablet} {
    }
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
      let fromTop = window?.scrollY + 50;

      // console.log();
      // console.log(fromTop - 100);

      if (navRef.current && window.innerHeight - 100 < fromTop) {
        navRef.current.classList.add("show");
      } else if (navRef.current) {
        navRef.current.classList.remove("show");
      }

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
