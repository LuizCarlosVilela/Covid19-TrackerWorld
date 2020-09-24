import React from "react";

import "./styles.css";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ state, cases }, index) => (
        <tr>
          <td>
            {index + 1}° {state}
          </td>
          <td>
            <strong>{cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
