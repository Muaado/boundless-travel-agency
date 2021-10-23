import { Link } from "gatsby";
import React, { useState } from "react";

import Logo from "../assets/logo.svg";

import styled from "styled-components";
import { device } from "../styles/deviceSizes";
const HeaderStyles = styled.header`
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

  background: linear-gradient(
    188.95deg,
    #1c2238 24.5%,
    rgba(28, 34, 56, 0) 59.2%
  );
  opacity: 0.77;

  color: #fff;
  z-index: 1000;

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

    a {
      margin-bottom: 2rem;
    }
  }

  nav {
    position: relative;
    /* margin-top: 12rem; */
    /* margin-left: -8rem;/ */
    /* align-self: center;
    justify-self: center; */
    @media ${device.tablet} {
      display: none;
    }

    font-size: 1.6rem;
    ul {
      display: flex;
      gap: 6rem;

      li {
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

  .dropdown {
    position: absolute;
    top: 2rem;
    left: 0;
    background: #fff;
    color: #000;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    padding: 2rem 3rem;
    margin-top: 2rem;

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    a {
      word-break: keep-all;
      width: max-content;
    }
  }
`;

const DropDown = ({ list }) => {
  return (
    <div className="dropdown">
      <ul>
        {list.map(
          (item) =>
            item.url && (
              <Link key={item} to={item.url}>
                <a>{item.name}</a>
              </Link>
            )
        )}
      </ul>
    </div>
  );
};

const Header = ({
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  navData,
  location,
}) => {
  const [showDropdown, setShowDropdown] = useState(0);
  const [list, setList] = useState([]);

  const handleOpenDropDown = (list, index) => {
    if (showDropdown !== index) {
      setShowDropdown(index);
      setList(list);
    } else {
      setShowDropdown(-1);
    }
  };

  return (
    <HeaderStyles className="disappear-on-scroll" pathname={location?.pathname}>
      <div className="logo">
        <Link to="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <p
              className="clickable"
              onClick={() => {
                handleOpenDropDown(navData.resorts, 1);
              }}
            >
              Resorts
              {showDropdown === 1 && <DropDown list={list} />}
            </p>
          </li>
          <li>
            <p
              className="clickable"
              onClick={() => {
                handleOpenDropDown(navData.villas, 2);
              }}
            >
              Villas
              {showDropdown === 2 && <DropDown list={list} />}
            </p>
          </li>
          <li>
            <p
              className="clickable"
              onClick={() => {
                handleOpenDropDown(navData.collections, 3);
              }}
            >
              Holiday stays
              {showDropdown === 3 && <DropDown list={list} />}
            </p>
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

      {/* <div></div> */}
    </HeaderStyles>
  );
};

export default Header;
