import React from "react";

import "./SearchBox.css";

const searchBox = props => {
  return (
    <div>
      <input
        className="Input"
        type="search"
        placeholder="Search for the country"
        onChange={props.searchChange}
      />
    </div>
  );
};

export default searchBox;
