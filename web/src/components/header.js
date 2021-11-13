import { Link } from "gatsby";
import React, { useRef, useState } from "react";

import Image from "gatsby-plugin-sanity-image";
// import Logo from "../assets/logo.svg";
import HamburgerIcon from "../assets/icons/menu-solid.svg";
import CloseIcon from "../assets/icons/close.svg";

import styled from "styled-components";
import { device } from "../styles/deviceSizes";

import ChevronDown from "../assets/icons/chevron-down.svg";
import ChevronUp from "../assets/icons/chevron-up.svg";

const HeaderStyles = styled.header`
  width: 100vw;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  /* padding: 2rem 4rem; */
  /* height: 40rem; */
  display: flex;

  /* flex-direction: column; */
  width: 100%;
  justify-content: space-between;
  padding: 0 15%;
  align-items: center;
  /* align-items: center; */
  z-index: 100;
  /* position: fixed; */
  top: 0;

  /* background: linear-gradient(183deg, #1c2238 24.5%, rgba(28, 34, 56, 0) 69.2%);
  opacity: 0.77; */

  color: #fff;
  z-index: 1000;

  @media ${device.tablet} {
    padding: 0 4rem;
    flex-direction: row;
    justify-content: space-between;
    svg {
      width: 3rem;
      z-index: 2000;
      g {
        fill: #fff;
      }
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      183.95deg,
      #1c2238 26.5%,
      rgba(35, 51, 60, 0) 68.2%
    );
    opacity: 0.66;
  }

  .logo {
    /* align-self: flex-start; */
    height: 100%;
    /* width: 65%; */
    /* margin: 0 15%; */
    margin-top: 2rem;
    margin-bottom: 2rem;
    /* border-bottom: 1px solid #fff; */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    @media ${device.tablet} {
      border: none;
      padding: 0;
      width: fit-content;
    }

    a {
      margin-bottom: 2rem;
      width: 8.6rem;
      height: 11.8rem;
      img {
        object-fit: contain;
      }
    }
  }

  .icon {
    display: none;
    @media ${device.tablet} {
      display: unset;
    }
  }

  nav {
    position: relative;

    transition: all 1s;

    .icon {
      position: absolute;
      top: 1.5rem;
      right: 3rem;
      width: 2rem;
    }

    svg {
      path {
        stroke: #fff;
      }
    }

    @media ${device.tablet} {
      padding: 0 2rem;
      background: var(--lightOrange);
      top: 0;
      right: 0;
      position: absolute;
      z-index: 10000;
      height: 100vh;
      width: 50vw;
      display: flex;
      justify-content: flex-start;
      /* align-items: center; */
      text-align: center;
      padding-top: 5rem;
      &.show {
        /* transform: translateX(0); */
        opacity: 1;
      }
      &.hide {
        /* transform: translateX(50vw); */
        opacity: 0;
        z-index: -100;
      }
      /* display: none; */
    }

    opacity: 1;
    font-size: 1.6rem;
    .nav-top-list {
      display: flex;
      gap: 6rem;

      @media ${device.tablet} {
        /* font-size: 2.6rem; */
        gap: 1rem;
        flex-direction: column;
        align-items: flex-start;
      }

      li {
        font-size: 1.6rem;

        display: flex;
        align-items: center;
        /* justify-content: space-between; */
        svg {
          margin-left: 1rem;
        }
        @media ${device.tablet} {
          min-width: 30vw;
        }
        /* position: relative; */
        &.selected {
          font-weight: bold;
        }
        p {
          color: #fff;
        }
        a {
          position: relative;
        }
      }
    }
  }
`;

const DropdownListStyles = styled.div`
  position: absolute;
  top: 15rem;
  left: 0;
  width: 100vw;
  height: calc(100vh - 10rem);
  background: #fff;
  color: #000;
  /* box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25); */
  /* margin-top: 2rem; */
  transition: all 0.4s;
  transition-timing-function: ease-in-out;
  opacity: 0;
  transform: translateY(-100vh);
  overflow: hidden;

  display: flex;

  z-index: -100;
  &.show {
    opacity: 1;
    transform: translateY(0);
    z-index: 2000;

    @media ${device.tablet} {
      margin-top: ${(props) => `${props.marginTop}rem`};
      overflow-x: hidden !important;
      width: 50vw;
      /* overflow-y: scroll; */
      height: 90vh;
    }

    .route,
    .image-container {
      transition: all 4s;
      opacity: 0;
      &.show {
        opacity: 1;
      }
    }
  }

  .route,
  .image-container {
    opacity: 0;
  }

  ul {
    min-width: 25vw;
  }

  .first-column {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    li {
      padding: 1.5rem;
      position: relative;
      width: fit-content;
      &.selected {
        &:after {
          content: "";
          background: var(--grey);
          width: calc(100% - 3rem);
          height: 1px;
          position: absolute;
          bottom: 1.2rem;
          left: 1.5rem;
        }
      }
    }
  }

  .second-column {
    background: var(--lightGrey);
    padding: 4rem;
    display: flex;
    flex-direction: column;
    /* gap: 2rem; */
    overflow-y: scroll;
    height: 100%;
    @media ${device.tablet} {
      grid-template-columns: 1fr;
      overflow-x: hidden;
    }
  }
  /* li {
    min-width: max-content;
  } */
  a {
    opacity: 0;
    padding: 1.5rem;
    /* border-bottom: 1px solid var(--grey); */
    word-break: keep-all;
    width: 100%;
    display: inline-block;
    /* width: 100%; */
  }
`;
export const Logo = ({ logo }) => (
  <div className="logo">
    <Link to="/">{logo && <Image {...logo} alt={logo.alt} />}</Link>
  </div>
);

const DropDown = ({ lists, marginTop, className, headerDropdownImage }) => {
  const [selectedList, setSelectedList] = useState("resorts");

  const list = selectedList === "resorts" ? lists.resorts : lists.collections;

  return (
    <DropdownListStyles
      // className={}
      marginTop={marginTop}
      className={`dropdown ${className}`}
    >
      <ul className="first-column">
        <li
          className={`${selectedList === "resorts" ? "selected" : ""} clickable
          ${className}
          route 
          `}
          onClick={() => setSelectedList("resorts")}
        >
          Resorts
        </li>
        <li
          className={`${
            selectedList === "collections" ? "selected" : ""
          } clickable
          route
            ${className}`}
          onClick={() => setSelectedList("collections")}
        >
          Holiday stays
        </li>
      </ul>
      <ul className="second-column">
        {list?.map(
          (item) =>
            item &&
            item.url && (
              <Link
                className={`${className} clickable route`}
                key={item.url}
                to={item.url}
                onClick={() => {
                  document.body.style.overflow = "unset";
                }}
              >
                {item.name}
              </Link>
            )
        )}
      </ul>

      <div className={`${className} image-container`}>
        <Image {...headerDropdownImage} />
      </div>
    </DropdownListStyles>
  );
};

const Header = ({
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  navData,
  logo,
  location,
  headerDropdownImage,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [list, setList] = useState([]);

  // const [marginTop, setMarginTop] = useState(2);
  const handleOpenDropDown = (list, index) => {
    if (!showDropdown) {
      setShowDropdown(true);
      setList(list);
      document.body.style.overflow = "hidden";
    } else {
      setShowDropdown(false);
      document.body.style.overflow = "unset";
    }
  };

  // const headerRef = useRef();
  const windowGlobal = typeof window !== "undefined";
  // if (windowGlobal) {
  //   if (window.innerWidth <= 805) {
  //     headerRef.current.classes.remove("mobile-header");
  //   }
  // }

  return (
    <HeaderStyles
      // ref={headerRef}
      // className="disappear-on-scroll"
      pathname={location?.pathname}
    >
      <Logo logo={logo} />
      {/* <button
        onClick={() => {
          onShowNav();
          console.log("cliked");
        }}
      > */}
      <HamburgerIcon
        className="icon"
        onClick={() => {
          if (!showNav) {
            onShowNav();
          } else {
            onHideNav();
          }
        }}
      />
      {/* </button> */}

      <nav
        className={`${showNav ? "show" : "hide"} ${
          windowGlobal && window.innerWidth > 805 ? "show" : ""
        }`}
      >
        <CloseIcon
          className="icon"
          onClick={() => {
            if (!showNav) {
              onShowNav();
            } else {
              onHideNav();
            }
          }}
        />
        <ul className="nav-top-list">
          <li
            className="clickable"
            onClick={() => {
              handleOpenDropDown({
                resorts: navData.resorts,
                collections: navData.collections,
              });
            }}
          >
            Resorts {showDropdown === 1 ? <ChevronUp /> : <ChevronDown />}
            {/* {showDropdown === 1 && ( */}
            {/* )} */}
          </li>
          {/* <li
            className="clickable"
            onClick={() => {
              handleOpenDropDown(navData.villas, 2);
            }}
          >
            Villas
            {showDropdown === 2 && <DropDown marginTop={9} list={list} />}
          </li> */}
          <li
            className="clickable"
            onClick={() => {
              handleOpenDropDown(navData.collections, 3);
            }}
          >
            {/* <p
              
            > */}
            Holiday stays
            {showDropdown === 3 && <DropDown marginTop={12} list={list} />}
            {/* </p> */}
          </li>
          <li>
            <Link
              to="/magazine"
              className="clickable"
              // onClick={() => {
              //   setShowDropdown(!showDropdown);
              //   setList(navData.resorts);
              // }}
            >
              Magazine
              {showDropdown === 4 && <DropDown list={list} />}
            </Link>
          </li>
        </ul>
      </nav>
      <DropDown
        className={showDropdown ? "show" : ""}
        marginTop={6}
        lists={list}
        headerDropdownImage={headerDropdownImage}
      />
      {/* )} */}
      {/* <div></div> */}
    </HeaderStyles>
  );
};

export default Header;
