import React from "react";

import "./search-box.style.css";

const searchBox = ({ placeholder, handleChanger }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChanger}
  />
);

export default searchBox;
