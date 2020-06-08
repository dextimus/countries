import React, { Component } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

import Country from "../Country/Country";
import "./Countries.css";
import SearchBox from "../SearchBox/SearchBox";
import Scroll from "../Scroll/Scroll";

class Countries extends Component {
  state = {
    countryList: [],
    searchfield: "",
    error: false,
  };

  componentDidMount() {
    axios
      .get("/all")
      .then((response) => {
        // console.log(response);
        const countriesData = response.data;
        const countries = countriesData.map((country) => {
          return { ...country };
        });
        this.setState({ countryList: countries });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  // countrySelectHandler = (alpha2Code) => {
  //   this.props.hostory.push({pathname: '/countries/' + alpha2Code });
  // }

  countrySelectHandler = (alpha2Code) => {
    this.setState({ selectedCountryId: alpha2Code });
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { countryList, searchfield } = this.state;
    const newList = countryList.filter((country) => {
      return country.name
        .toLowerCase()
        .includes(searchfield.toLocaleLowerCase());
    });

    const select = (
      <p
        style={{
          color: "black",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        Please, select a country!
      </p>
    );
    let countries = (
      <p style={{ marginInlineStart: "36%", color: "red", fontWeight: "bold" }}>
        Something went wrong!!!
      </p>
    );
    if (!this.state.error) {
      countries = newList.map((country) => {
        return (
          <Link
            to={"/countries/" + country.alpha2Code}
            key={country.alpha2Code}
          >
            <Country
              name={country.name}
              flag={country.flag}
              clicked={() => this.countrySelectHandler(country.alpha2Code)}
            />
          </Link>
        );
      });
    }

    return (
      <div>
        <div className="Home">
          <nav>
            <NavLink className="Link_Home" to="/">
              Back Home
            </NavLink>
          </nav>
        </div>
        <div className="SearchBox">
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <Scroll>
          {select}
          <div className="Countries">{countries}</div>
        </Scroll>
      </div>
    );
  }
}

export default Countries;
