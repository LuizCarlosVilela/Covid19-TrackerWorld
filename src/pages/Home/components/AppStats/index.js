import React from "react";
import "./styles.css";

import InfoBox from "../InfoBox";

function AppStats({ data }) {
  // { todayCases } = data.todayCases;

  return (
    <div className="app_stats">
      <InfoBox
        title="Coronavirus casos"
        cases={data.todayCases}
        total={data.cases}
      />

      <InfoBox
        title="Recuperados"
        cases={data.todayRecovered}
        total={data.recovered}
      />

      <InfoBox title="Mortes" cases={data.todayDeaths} total={data.deaths} />
    </div>
  );
}

export default AppStats;
