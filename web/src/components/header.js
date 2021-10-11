import { Link } from "gatsby";
import React, { useState } from "react";

import Logo from "../assets/logo.svg";

import styled from "styled-components";
const HeaderStyles = styled.header`
  padding: 2rem 4rem;
  height: 18rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  /* position: fixed; */
  top: 0;

  color: #fff;

  .logo {
    align-self: flex-start;
    height: 100%;
  }

  nav {
    position: relative;
    /* margin-top: 15rem; */
    margin-left: -8rem;
    /* align-self: center;
    justify-self: center; */

    font-size: 1.6rem;
    ul {
      display: flex;
      gap: 6rem;
      li {
        &.selected {
          font-weight: bold;
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
        {list.nodes.map(
          (item) =>
            item.name && (
              <Link
                key={item.name}
                to={`/${item.name.toLowerCase().split(" ").join("-")}`}
              >
                <a>{item.name}</a>
              </Link>
            )
        )}
      </ul>
    </div>
  );
};

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, data }) => {
  const [showDropdown, setShowDropdown] = useState(0);
  const [list, setList] = useState([]);

  return (
    <HeaderStyles>
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
            <a
              onClick={() => {
                setShowDropdown(1);
                setList(data.resorts);
              }}
            >
              Resorts
              {showDropdown === 1 && <DropDown list={list} />}
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowDropdown(2);
                setList(data.villas);
              }}
            >
              Villas
              {showDropdown === 2 && <DropDown list={list} />}
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowDropdown(3);
                setList(data.resorts);
              }}
            >
              Holiday stays
              {showDropdown === 3 && <DropDown list={list} />}
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowDropdown(!showDropdown);
                setList(data.resorts);
              }}
            >
              Magazine
              {showDropdown === 4 && <DropDown list={list} />}
            </a>
          </li>
        </ul>
      </nav>

      <div></div>
    </HeaderStyles>
  );
};

export default Header;
