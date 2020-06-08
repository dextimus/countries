import React from "react";
import { Route} from "react-router-dom";

import Countries from "../components/Countries/Countries";
import FullCountry from "../containers/FullCountry/FullCountry";
// import CountryList from '../components/CountryList/CountryList';

const main = () => {
    return (
        <div>
        <Route path="/countries" exact component={Countries} />
        <Route path="/countries/:alpha2Code" component={FullCountry} />
      </div>
    );
  }

export default main;
