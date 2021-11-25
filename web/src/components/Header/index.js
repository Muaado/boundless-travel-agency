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
import Phone from "../assets/icons/phone.svg";
import CustomerService from "../assets/icons/customer-service.svg";
import { MouseScroll } from "./Ui/MouseScroll";

const HeaderStyles = styled.header`
  width: 100vw;

  position: absolute;
  top: 0;
  left: 0;
  /* transform: translate(-50%, 0); */
  /* padding: 2rem 4rem; */
  /* height: 40rem; */
  display: flex;

  /* flex-direction: column; */
  /* width: 100%; */
  justify-content: space-between;
  padding: 0 15%;
  align-items: center;
  /* align-items: center; */
  z-index: 100;
  /* overflow-x: hidden;
  overflow-y: visible; */
  /* position: fixed; */
  top: 0;

  /* background: linear-gradient(183deg, #1c2238 24.5%, rgba(28, 34, 56, 0) 69.2%);
  opacity: 0.77; */

  color: #fff;
  z-index: 1000;
  /* height: 100vh; */
  &.show {
    height: 100vh;

    .logo,
    .icon {
      opacity: 0;
    }
  }

  @media ${device.tablet} {
    padding: 0 4rem;
    /* flex-direction: row-reverse;
    justify-content: space-between; */

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    direction: rtl;
    justify-content: flex-start;
    justify-items: flex-end;
    width: 100%;

    &.show-header {
      /* direction: ltr; */
      display: flex;

      .contact-us,
      .logo,
      .hamburger-icon {
        display: none;
      }
    }
    .logo {
      justify-self: center;
    }

    .contact-us {
      justify-self: start;
    }

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
    /* margin-bottom: 2rem; */
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
    z-index: 100000;

    transition: all 1s;

    .close-icon {
      display: none;
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      width: 2rem;
      height: 2rem;

      @media ${device.tablet} {
        display: unset;
      }
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
      /* z-index: 10000; */
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: flex-start;

      /* align-items: center; */
      text-align: center;
      padding-top: 5rem;
      &.show {
        transform: translateX(0);
        opacity: 1;
      }
      &.hide {
        transform: translateX(-100vw);
        opacity: 0;
        /* z-index: -100; */
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
        flex-direction: row-reverse;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
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
          background: #eeee;
          color: #000;
          padding: 0.5rem 1rem;
          text-align: center;
          border-radius: 15px;

          &.selected {
            background: var(--darkGreen);
            color: #fff;
          }

          svg {
            display: none;
          }
          /* min-width: 30vw; */
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

  .contact-us {
    display: none;

    @media ${device.tablet} {
      display: unset;
    }
    a {
      flex-direction: column;
      align-items: center;
      @media ${device.tablet} {
        display: flex;
        svg {
          margin-bottom: 1rem;
          path {
            fill: var(--primary);
          }
        }
      }
    }
  }
`;

const DropdownListStyles = styled.div`
  position: absolute;
  top: 10rem;
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
    z-index: 200000;

    @media ${device.tablet} {
      /* margin-top: ${(props) => `${props.marginTop}rem`}; */
      overflow-x: hidden !important;
      /* width: 50vw; */
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

    @media ${device.tablet} {
      min-width: 50vw;
      direction: ltr;
    }
  }

  .image-container {
    @media ${device.tablet} {
      display: none;
    }
  }

  .first-column {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    @media ${device.tablet} {
      display: none;
    }
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
    position: relative;

    &::-webkit-scrollbar {
      display: none;
    }

    .mouse_scroll {
      position: absolute;
      right: 4rem;
      left: unset !important;
      bottom: 8rem;
    }
    height: 100%;
    @media ${device.tablet} {
      grid-template-columns: 1fr;
      width: 100vw;
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

  .close-icon {
    position: absolute;
    right: 0;
    top: 0;
    width: 5rem;
    height: 5rem;
    background: #fff;
    padding: 1.5rem;
    border: 1px solid #eeee;
    opacity: 0.7;

    g {
      fill: #000;
    }
  }
`;
export const Logo = ({ logo }) => (
  <div className="logo">
    <Link to="/">
      {logo && logo.asset && <Image {...logo} alt={logo.alt} />}
    </Link>
  </div>
);

const DropDown = ({
  lists,
  marginTop,
  className,
  headerDropdownImage,
  handleOpenDropDown,
  selectedList,
  setSelectedList,
}) => {
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
        {lists?.map(
          (item) =>
            item &&
            item.url && (
              <Link
                className={`${className} clickable route`}
                key={item.url}
                to={item.url}
                onClick={() => {
                  document.body.style.overflow = "unset";
                  // handleOpenDropDown([], false);
                }}
              >
                {item.name}
              </Link>
            )
        )}
        <MouseScroll />
      </ul>

      <div className={`${className} image-container`}>
        {headerDropdownImage && headerDropdownImage.asset && (
          <Image {...headerDropdownImage} />
        )}
      </div>
      <CloseIcon
        className="close-icon"
        onClick={() => {
          // handleOpenDropDown([], false);
          setSelectedList("");
        }}
      />
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

  const [selectedList, setSelectedList] = useState("");
  let lists = { resorts: navData?.resorts, collections: navData?.collections };
  const dropdownLists =
    selectedList === "resorts" ? lists.resorts : lists.collections;

  // // const [marginTop, setMarginTop] = useState(2);
  const handleOpenDropDown = (list, condition) => {
    if (!showDropdown) {
      setShowDropdown(condition || true);
      setList(list);
      document.body.style.overflow = "hidden";
    } else {
      setShowDropdown(condition || false);
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
      className={showNav ? "show-header" : ""}
      pathname={location?.pathname}
    >
      <div className="contact-us">
        <a href="#contact-us">
          <CustomerService />
          Contact Us
        </a>
      </div>
      <Logo logo={logo} />
      {/* <button
        onClick={() => {
          onShowNav();
          console.log("cliked");
        }}
      > */}
      <HamburgerIcon
        className="icon hamburger-icon"
        onClick={() => {
          if (!showNav) {
            onShowNav();
            setShowDropdown(false);
          } else {
            onHideNav();
            setShowDropdown(false);
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
          className="close-icon"
          onClick={() => {
            if (!showNav) {
              onShowNav();
            } else {
              setTimeout(() => {
                onHideNav();
              }, 200);
            }
            setShowDropdown(false);
          }}
        />
        <ul className="nav-top-list">
          <li
            className={` ${
              selectedList === "resorts" ? "selected" : ""
            } clickable`}
            onClick={() => {
              // handleOpenDropDown({
              //   resorts: navData.resorts,
              //   collections: navData.collections,
              // });
              if (!showDropdown || selectedList !== "resorts") {
                setShowDropdown(true);
                setSelectedList("resorts");
              } else {
                setSelectedList("");
              }
            }}
          >
            Resorts {showDropdown ? <ChevronUp /> : <ChevronDown />}
            {/* {showDropdown === 1 && ( */}
            {/* )} */}
          </li>

          <li
            className={` ${
              selectedList === "collections" ? "selected" : ""
            } clickable`}
            onClick={() => {
              // handleOpenDropDown({
              //   resorts: navData.resorts,
              //   collections: navData.collections,
              // });
              if (!showDropdown) {
                setSelectedList("collections");
              } else {
                setSelectedList("");
              }
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
        lists={dropdownLists}
        headerDropdownImage={headerDropdownImage}
        handleOpenDropDown={handleOpenDropDown}
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
    </HeaderStyles>
  );
};

export default Header;
