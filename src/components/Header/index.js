import React from "react";
import "./styles.css";
import logo from "./assets/logo.png";

import { FormControl, Select, MenuItem } from "@material-ui/core";

function Header(props) {
  return (
    <div className="app_header">
      {/* <h1>COVID-19 Tracker</h1> */}
      <img src={logo} />
      <FormControl className="app_dropdown">
        <Select
          variant="outlined"
          value={props.country}
          onChange={props.onCountryChange}
        >
          <MenuItem value="Brasil">Brasil</MenuItem>
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
