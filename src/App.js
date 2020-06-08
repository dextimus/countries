import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./containers/main";
import MainNav from "./components/MainNav/MainNav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1 className="World">World countries</h1>
          <MainNav />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
