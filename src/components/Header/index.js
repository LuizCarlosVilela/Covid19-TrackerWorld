import React from "react";
import "./styles.css";

import logo from "./assets/logo.png";
// import cinfo from "./assets/icon_CINFO.png";
import brazil from "./assets/brazil.png";

import { FormControl, Select, MenuItem } from "@material-ui/core";

function Header(props) {
  return (
    <div className="app_header">
      {/* <h1>COVID-19 Tracker</h1> */}
      <img src={logo} />
      <FormControl className="app_dropdown">
        <Select
          // variant="outlined"
          value={props.country}
          onChange={props.onCountryChange}
        >
          <MenuItem value="Brasil">
            <div className="ItemMenu">
              <div>Brasil</div>
              <img src={brazil} alt={"País"} className="ImagemItem" />
            </div>
          </MenuItem>
          {props.countries.map((country, index) => (
            <MenuItem key={index} value={country.value}>
              {country.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Header;
