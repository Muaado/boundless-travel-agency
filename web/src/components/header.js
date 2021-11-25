import { Link } from "gatsby";
import React, { useEffect, useRef, useState } from "react";

import Image from "gatsby-plugin-sanity-image";
// import Logo from "../assets/logo.svg";
import HamburgerIcon from "../assets/icons/menu-solid.svg";
import CloseIcon from "../assets/icons/close.svg";

import styled from "styled-components";
import { device } from "../styles/deviceSizes";

import ChevronDown from "../assets/icons/chevron-down.svg";
import ChevronUp from "../assets/icons/chevron-up.svg";
import PlusIcon from "../assets/icons/plus-icon.svg";
import MinusIcon from "../assets/icons/minus-icon.svg";

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

    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr; */
    /* direction: rtl; */
    flex-direction: row-reverse;
    justify-content: space-between;
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

  .mobile-nav {
    z-index: 30000;
    padding: 0 3rem;
    background: #fff;
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

    transition: all 1s;

    .close-icon {
      display: none;
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      width: 2rem;
      height: 2rem;

      path {
        fill: #000;
        stroke: #000;
      }

      @media ${device.tablet} {
        display: unset;
        padding: 0;
      }
    }
    &.show {
      transform: translateX(0);
    }
    &.hide {
      transform: translateX(-100vw);
    }

    ul {
      color: #000;
      text-align: left;
      width: 100%;
      li {
        margin-bottom: 1rem;
        padding: 1rem 0;
        border-bottom: 1px solid var(--lightGrey);
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        font-size: 2rem;

        /* color: var(--primary;) */
        svg {
          width: 1.5rem;
          height: 1.5rem;
          path {
            fill: var(--primary);
          }
        }
      }
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
        padding: 0;
      }
    }

    svg {
      path {
        stroke: #000;
      }
    }

    @media ${device.tablet} {
      display: none;
      padding: 0 1.5rem;
      background: #fff;
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
        /* opacity: 1; */
      }
      &.hide {
        transform: translateX(-100vw);
        /* opacity: 0; */
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
        /* flex-direction: row-reverse; */
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: max-content;
      }

      li {
        font-size: 1.6rem;

        display: flex;
        align-items: center;
        /* justify-content: space-between; */

        svg {
          path {
            stroke: #fff;
            @media ${device.tablet} {
              stroke: #000;
            }
          }
          margin-left: 1rem;
        }
        @media ${device.tablet} {
          /* background: #eeee; */
          color: #000;
          padding: 0.5rem 0;
          text-align: center;
          /* border-radius: 15px; */

          &.selected {
            /* background: var(--darkGreen); */
            /* color: #fff; */
            font-weight: bold;
          }

          /* svg {
            display: none;
          } */
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
  /* opacity: 0; */
  /* transform: translateY(-100vh); */
  overflow: hidden;

  display: flex;
  z-index: -100;
  height: 0px;

  @media ${device.tablet} {
    top: 10rem;

    &.collections {
      top: 16rem;
    }
  }

  &.show {
    /* opacity: 1; */
    /* transform: translateY(0); */
    height: 90vh;
    z-index: 200000;

    @media ${device.tablet} {
      /* margin-top: ${(props) => `${props.marginTop}rem`}; */
      overflow-x: hidden !important;
      /* width: 50vw; */
      /* overflow-y: scroll; */
      height: 90vh;
    }

    .route {
      /* .image-container { */
      transition: all 4s;
      /* opacity: 0; */
      &.show {
        /* opacity: 1; */
      }
    }
  }

  .route {
    /* .image-container { */
    /* opacity: 0; */
  }

  ul {
    min-width: 25vw;

    @media ${device.tablet} {
      min-width: 50vw;
      direction: ltr;
      padding: 0 3rem !important;
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

    @media ${device.tablet} {
      background: #fff;
      padding: 0;
      /* height: 90vh; */
    }

    &::-webkit-scrollbar {
      /* display: none; */
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
    /* opacity: 0; */
    color: var(--darkGrey);
    padding: 1.5rem 0;
    /* border-bottom: 1px solid var(--grey); */
    word-break: keep-all;
    width: 100%;
    display: inline-block;

    font-size: 1.6rem;

    @media ${device.tablet} {
      border-bottom: 1px solid var(--lightGrey3);
    }
    /* width: 100%; */
  }

  .dropdown-close-icon {
    position: absolute;
    right: 0;
    top: 0;
    width: 5rem;
    height: 5rem;
    background: #fff;
    padding: 1.5rem;
    border: 1px solid #eeee;
    opacity: 0.7;

    @media ${device.tablet} {
      display: none;
    }
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
  // handleOpenDropDown,
  setShowDropdown,
  selectedList,
  setSelectedList,
}) => {
  return (
    <DropdownListStyles
      // className={}
      marginTop={marginTop}
      className={`dropdown ${className} ${
        selectedList === "collections" ? "collections" : ""
      }`}
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
        {/* <MouseScroll /> */}
      </ul>

      <div className={`${className} image-container`}>
        {headerDropdownImage && headerDropdownImage.asset && (
          <Image {...headerDropdownImage} />
        )}
      </div>
      <CloseIcon
        className="dropdown-close-icon"
        onClick={() => {
          // handleOpenDropDown([], false);
          setSelectedList("");
          setShowDropdown(false);
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

  const [showMobileDropDown, setShowMobileDropDown] = useState(Number);
  let lists = { resorts: navData?.resorts, collections: navData?.collections };
  const dropdownLists =
    selectedList === "resorts" ? lists.resorts : lists.collections;

  const windowGlobal = typeof window !== "undefined";

  useEffect(() => {
    if (showDropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showDropdown, showNav]);
  return (
    <HeaderStyles
      // ref={headerRef}
      className={showNav ? "show-header" : ""}
      pathname={location?.pathname}
    >
      {/* <div className="contact-us">
        <a href="#contact-us">
          <CustomerService />
          Contact Us
        </a>
      </div> */}
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
        className={
          // `${showNav ? "show" : "hide"} ${
          windowGlobal && window.innerWidth > 805 ? "show" : "hide"
          // }`
        }
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
              setSelectedList("resorts");
              if (!showDropdown || selectedList !== "resorts") {
                setShowDropdown(true);
              } else {
                setShowDropdown(false);
                setSelectedList("");
              }

              if (windowGlobal && window.innerWidth > 805) {
                if (showDropdown) {
                  setSelectedList("");
                  setShowDropdown(false);
                }
              }
            }}
          >
            Resorts
            {showDropdown && selectedList === "resorts" ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
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
              setSelectedList("collections");
              if (!showDropdown || selectedList !== "collections") {
                setShowDropdown(true);
              } else {
                setShowDropdown(false);
                setSelectedList("");
              }
            }}
          >
            {/* <p
              
            > */}
            Holiday stays
            {showDropdown && selectedList === "collections" ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
            {/* {showDropdown === 3 && <DropDown marginTop={12} list={list} />} */}
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

      <div
        // className="mobile-nav"
        className={`mobile-nav ${showNav ? "show" : "hide"} ${
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
        <ul>
          <li
            className={` ${
              selectedList === "resorts" ? "selected" : ""
            } clickable`}
            onClick={() => {
              if (showMobileDropDown === 2) {
                setShowMobileDropDown(0);
                setTimeout(() => {
                  if (showMobileDropDown !== 1) {
                    setShowMobileDropDown(1);
                  } else {
                    setShowMobileDropDown(0);
                  }
                }, 700);
              } else {
                if (showMobileDropDown !== 1) {
                  setShowMobileDropDown(1);
                } else {
                  setShowMobileDropDown(0);
                }
              }
            }}
          >
            Resorts {showMobileDropDown === 1 ? <MinusIcon /> : <PlusIcon />}
            {/* {showMobileDropDown === 1 && ( */}
            <DropDown
              className={showMobileDropDown === 1 ? "show resorts" : ""}
              lists={lists.resorts}
              // headerDropdownImage={headerDropdownImage}
              setShowDropdown={setShowDropdown}
              // handleOpenDropDown={handleOpenDropDown}
              selectedList={selectedList}
              setSelectedList={setSelectedList}
            />
            {/* )} */}
          </li>

          <li
            className={` ${
              selectedList === "collections" ? "selected" : ""
            } clickable`}
            onClick={() => {
              if (showMobileDropDown !== 2) {
                setShowMobileDropDown(2);
              } else {
                setShowMobileDropDown(0);
              }
              // setSelectedList("collections");
              // if (!showDropdown || selectedList !== "collections") {
              //   setShowDropdown(true);
              // } else {
              //   setShowDropdown(false);
              //   setSelectedList("");
              // }
            }}
          >
            {/* <p
              
            > */}
            Holiday stays
            {showMobileDropDown == 2 ? <MinusIcon /> : <PlusIcon />}
            <DropDown
              className={`collections ${
                showMobileDropDown === 2 ? "show collections" : ""
              }`}
              lists={lists.collections}
              // headerDropdownImage={headerDropdownImage}
              setShowDropdown={setShowDropdown}
              // handleOpenDropDown={handleOpenDropDown}
              selectedList={selectedList}
              setSelectedList={setSelectedList}
            />
            {/* {showDropdown === 3 && <DropDown marginTop={12} list={list} />} */}
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
      </div>
      <DropDown
        className={
          showDropdown && windowGlobal && window.innerWidth > 805 ? "show" : ""
        }
        lists={dropdownLists}
        headerDropdownImage={headerDropdownImage}
        setShowDropdown={setShowDropdown}
        // handleOpenDropDown={handleOpenDropDown}
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
    </HeaderStyles>
  );
};

export default Header;
