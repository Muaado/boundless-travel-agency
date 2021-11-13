import React, { useState } from "react";
import Select from "react-select/async";
import { SearchBar } from "./Homepage/styles";
import { navigate } from "gatsby";
import { getResortUrl, getVillaUrl } from "../lib/helpers";

import SearchIcon from "../assets/icons/search-icon.svg";

const Search = ({ resorts, villas }) => {
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
    <SearchBar>
      <Select
        className="input"
        defaultOptions={options}
        loadOptions={loadOptions}
        placeholder="Where would you like to go?"
        isClearable
        value={search}
        onInputChange={(input) => {
          setSearch(input);
        }}
        onChange={(input) => {
          let route;
          if (input) {
            if (input?.type === "resort") {
              route = getResortUrl({ name: input.value });
            } else {
              route = getVillaUrl({
                name: input.value,
                resortName: input.resortName,
              });
            }
            navigate(route);
          }
        }}
      />
      <SearchIcon />

      {/* <button className="btn">SEARCH</button> */}
    </SearchBar>
  );
};

export default Search;
