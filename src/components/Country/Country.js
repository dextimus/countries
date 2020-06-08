import React from "react";

import "./Country.css";

const country = props => (
  <div className="Country" onClick={props.clicked}>
    <h2>{props.name}</h2>
    <img alt="Flag" src={props.flag} style={{ width: "80px" }}></img>
  </div>
);

export default country;
