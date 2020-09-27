import React from "react";
import numeral from "numeral";

import "./styles.css";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ state, cases }, index) => (
        <tr key={index}>
          <td>
            {index + 1}° {state}
          </td>
          <td>
            <strong>{numeral(cases).format()}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
