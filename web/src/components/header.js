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
    /* margin-top: 15rem; */
    margin-left: -8rem;
    /* align-self: center;
    justify-self: center; */

    font-size: 1.6rem;
    ul {
      display: flex;
      gap: 2rem;
      li {
        &.selected {
          font-weight: bold;
        }
      }
    }
  }
`;

const DropDown = ({ list }) => {
  console.log(list);
  return (
    <div>
      <ul>
        {list.nodes.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, data }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [list, setList] = useState(false);

  return (
    <HeaderStyles>
      <div className="logo">
        <Link to="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>

      {console.log(data, "header")}
      <nav>
        <ul>
          <li>
            <a
              onClick={() => {
                setShowDropdown(!showDropdown);
                setList(data.resorts);
              }}
            >
              Resorts
            </a>
          </li>
          <li>
            <Link to="/villas">Villas</Link>
          </li>
          <li>
            <Link to="/holiday">Holiday styles</Link>
          </li>
          <li>
            <Link to="/magazine">Magazine</Link>
          </li>
        </ul>
        {showDropdown && <DropDown list={list} />}
      </nav>
      <div></div>
    </HeaderStyles>
  );
};

export default Header;
