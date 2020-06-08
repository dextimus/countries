import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import "./FullCountry.css";

class FullCountry extends Component {
  state = {
    loadedCountry: null
  };

  componentDidMount() {
    console.log(this.props);
    if (this.props.match.params.alpha2Code) {
      if (
        !this.state.loadedCountry ||
        (this.state.loadedCountry &&
          this.state.loadedCountry.alpha2Code !== this.props.alpha2Code)
      ) {
        axios
          .get("/alpha/" + this.props.match.params.alpha2Code)
          .then(response => {
            // console.log(response);
            this.setState({ loadedCountry: response.data });
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }

  render() {
    let country = (
      <p
        style={{
          color: "black",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}
      >
        Please, select a country!
      </p>
    );
    if (this.props.alpha2Code) {
      country = (
        <p
          style={{
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.2rem"
          }}
        >
          Loading...!
        </p>
      );
    }
    if (this.state.loadedCountry) {
      country = (
        <div className="FullCountry">
          <img
            alt="Flag"
            src={this.state.loadedCountry.flag}
            style={{ width: "250px" }}
          />
          <h1 style={{ fontSize: "2.2rem" }}>
            {this.state.loadedCountry.name}
          </h1>
          <p>
            <span>Region:</span> {this.state.loadedCountry.region}
          </p>
          <p>
            <span>Capital:</span> {this.state.loadedCountry.capital}
          </p>
          <p>
            <span>Country area:</span> {this.state.loadedCountry.area} sq.km
          </p>
          <p>
            <span>Population:</span> {this.state.loadedCountry.population}
          </p>
        </div>
      );
    }
    return (
      <div>
        <div className="Back">
          <nav>
            <NavLink className="Link" to="/countries">
              Back to Country List
            </NavLink>
          </nav>
        </div>
        {country};
      </div>
    );
  }
}

export default FullCountry;
