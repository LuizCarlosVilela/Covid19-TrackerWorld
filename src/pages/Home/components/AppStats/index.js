import React from "react";
import "./styles.css";

import InfoBox from "../InfoBox";

function AppStats() {
  return (
    <div className="app_stats">
      <InfoBox title="Coronavirus casos" cases={2000} total={2000} />

      <InfoBox title="Recuperados" cases={2000} total={2000} />

      <InfoBox title="Mortes" cases={2000} total={2000} />
    </div>
  );
}

export default AppStats;
