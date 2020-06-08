import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./MainNav.css";

class MainNav extends Component {
  render() {
    return (
      <div>
        <nav className="MainNav">
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              marginBlockStart: "2rem"
            }}
          >
            <li>
              <NavLink
                className="Main_L"
                to="/countries"
                activeStyle={{ display: "none" }}
              >
                Country List
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainNav;
