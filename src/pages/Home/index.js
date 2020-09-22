import React from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";

import "./styles.css";

function Home() {
  return (
    <div className="app">
      <div className="app_header">
        <h1>COVID-19 TRACKER</h1>

        <FormControl className="app_dropdown">
          <Select variant="outlined" value="abc">
            <MenuItem value="worldwide">worldwide</MenuItem>
            <MenuItem value="worldwide">Option 2</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem>
            <MenuItem value="worldwide">YOOO</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Home;
