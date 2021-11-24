import React, { useState } from "react";
import Select from "react-select/async";
// import { SearchBar } from "./Homepage/styles";
import { navigate } from "gatsby";
import { getResortUrl, getVillaUrl } from "../lib/helpers";

import SearchIcon from "../assets/icons/search-icon.svg";
import styled from "styled-components";
import { device } from "../styles/deviceSizes";
import { useEffect } from "react";

export const SearchBar = styled.form`
  &.homepage-search {
    padding: 1rem 2rem;
    position: absolute;
    top: -3.5rem;

    background: #fff;
    align-self: center;

    display: flex;
    align-items: center;
    /* width: 80%; */
    justify-content: space-between;
    width: 40vw;

    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25));
    @media ${device.laptop} {
      width: 60vw;
    }
    @media ${device.tablet} {
      padding: 0.2rem 2rem;
      width: 80vw;
      border-bottom: 1px solid var(--grey);
      filter: unset;
    }
    @media ${device.mobileXL} {
      width: 100vw;
    }
  }

  &.enquire-search {
    .magnifying-glass {
      display: none;
    }

    .input {
      padding: 0;
      border: none;

      margin: 0;
    }
  }

  .input {
    /* z-index: 10000 !important; */
    width: 100% !important;
    display: flex !important;
    outline: none !important;
    margin-right: 1rem;

    &__label {
      display: flex;
      justify-content: space-between;
    }
    &__type {
      font-size: 1.8rem;
      color: #000;
      margin-left: 3rem;
    }

    #react-select-1-listbox,
    #react-select-2-listbox,
    #react-select-3-listbox,
    #react-select-4-listbox,
    #react-select-5-listbox,
    #react-select-5-listbox {
      & > div {
        width: 100%;
      }
      /* z-index: 1000; */
      /* position: absolute; */
      /* height: 70vh; */
      /* max-height: unset !important; */
    }

    & > div {
      /* padding: 1rem; */

      display: flex !important;
      flex-direction: row !important;
      border: none !important;
      width: 100%;

      svg {
        outline: none !important;
      }
    }

    width: 20%;

    &[name="location"] {
      width: 60%;
    }
    &:focus {
      outline: none;
    }
    &:not(:last-of-type) {
      border-right: 1px solid #000;
    }
  }

  svg {
    width: 3rem;
    height: 3rem;
    path {
      fill: var(--darkRed);
    }
  }

  button {
    border-radius: 2px;
  }
`;

const Search = ({
  selectedRecord,
  name,
  className,
  resorts,
  villas,
  placeholder,
  onChange,
  value,
}) => {
  const [search, setSearch] = useState();

  const options = [
    ...resorts.map(({ name }) => {
      return {
        value: name,
        label: (
          <p className="input__label">
            {name} <span className="input__type">Resort</span>{" "}
          </p>
        ),
        type: "resort",
      };
    }),
    ...villas.map(({ name, resort }) => {
      // console.log(resort);
      return {
        value: name,
        label: (
          <p className="input__label">
            {name}
            <span className="input__type">Villa</span>
          </p>
        ),
        type: "villa",
        resortName: resort?.name,
      };
    }),
  ];

  useEffect(() => {
    if (!search && selectedRecord) {
      const selected = options.find((item) => {
        console.log(item);
        console.log(selectedRecord);
        return (
          item.value === selectedRecord?.split("=")[1]?.split("%20").join(" ")
        );
      });
      console.log(selected);
      setSearch(selected);
    }
  }, [selectedRecord]);
  const loadOptions = (search, callback) => {
    const newSearchOptions = options.filter((option) => {
      return (
        option?.value.toLowerCase().includes(search.toLowerCase()) ||
        option.resortName?.toLowerCase().includes(search.toLowerCase())
      );
    });
    callback(newSearchOptions);
  };

  return (
    <SearchBar className={className}>
      <Select
        name="name"
        className="input"
        defaultOptions={options}
        loadOptions={loadOptions}
        // menuIsOpen
        placeholder={placeholder}
        isClearable
        value={search || value}
        onInputChange={(input) => {
          setSearch(input);
        }}
        onChange={(input) => {
          onChange(input);
        }}
      />
      {/* <SearchIcon className="magnifying-glass" /> */}

      {/* <button className="btn">SEARCH</button> */}
    </SearchBar>
  );
};

export default Search;
