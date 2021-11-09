import { Link } from "gatsby";
import React, { useRef, useState } from "react";

import Image from "gatsby-plugin-sanity-image";
// import Logo from "../assets/logo.svg";
import HamburgerIcon from "../assets/icons/menu-solid.svg";
import CloseIcon from "../assets/icons/close.svg";

import styled from "styled-components";
import { device } from "../styles/deviceSizes";
const HeaderStyles = styled.header`
  width: 100vw;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  /* padding: 2rem 4rem; */
  /* height: 40rem; */
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
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
    width: 65%;
    /* margin: 0 15%; */
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #fff;
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
    /* margin-top: 12rem; */
    /* margin-left: -8rem;/ */
    /* align-self: center;
    justify-self: center; */
    transition: all 1s;

    .icon {
      position: absolute;
      top: 1.5rem;
      right: 3rem;
      width: 2rem;
    }

    @media ${device.tablet} {
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

      background: var(--darkGreen);
      top: 0;
      right: 0;
      position: absolute;
      z-index: 10000;
      height: 100vh;
      width: 50vw;
      display: flex;
      justify-content: center;
      /* align-items: center; */
      text-align: center;
      padding-top: 5rem;
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
      }

      li {
        font-size: 1.6rem;
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
  top: 2rem;
  left: 0;
  background: #fff;
  color: #000;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  margin-top: 2rem;
  padding: 2rem 3rem;

  z-index: 2000;

  @media ${device.tablet} {
    margin-top: ${(props) => `${props.marginTop}rem`};
    overflow-x: hidden !important;
    width: 50vw;
    overflow-y: scroll;
    height: 70vh;
  }

  ul {
    display: grid;
    grid-template-columns: max-content max-content;
    gap: 2rem;

    @media ${device.tablet} {
      grid-template-columns: 1fr;
      overflow-x: hidden;
    }
  }
  li {
    min-width: max-content;
  }
  a {
    word-break: keep-all;
    width: max-content;
    display: inline-block;
    /* width: 100%; */
  }
`;
export const Logo = ({ logo }) => (
  <div className="logo">
    <Link to="/">{logo && <Image {...logo} alt={logo.alt} />}</Link>
  </div>
);

const DropDown = ({ list, marginTop }) => {
  return (
    <DropdownListStyles marginTop={marginTop} className="dropdown">
      <ul>
        {list.map(
          (item) =>
            item &&
            item.url && (
              <Link key={item.url} to={item.url}>
                {item.name}
              </Link>
            )
        )}
      </ul>
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
}) => {
  const [showDropdown, setShowDropdown] = useState(0);
  const [list, setList] = useState([]);

  // const [marginTop, setMarginTop] = useState(2);
  const handleOpenDropDown = (list, index) => {
    if (showDropdown !== index) {
      setShowDropdown(index);
      setList(list);
    } else {
      setShowDropdown(-1);
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
      className="disappear-on-scroll"
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
          console.log("panelija", showNav);
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
            console.log("panelija", showNav);
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
              handleOpenDropDown(navData.resorts, 1);
            }}
          >
            Resorts
            {showDropdown === 1 && <DropDown marginTop={6} list={list} />}
          </li>
          <li
            className="clickable"
            onClick={() => {
              handleOpenDropDown(navData.villas, 2);
            }}
          >
            Villas
            {showDropdown === 2 && <DropDown marginTop={9} list={list} />}
          </li>
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
      {/* )} */}
      {/* <div></div> */}
    </HeaderStyles>
  );
};

export default Header;
