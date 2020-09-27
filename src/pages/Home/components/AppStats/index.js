import React from "react";
import numeral from "numeral";
import "./styles.css";

import { prettyPrintStat, printCases } from "../../util";

import InfoBox from "./components/InfoBox";

function AppStats({ data, updateCasesType }) {
  // { todayCases } = data.todayCases;

  return (
    <div className="app_stats">
      <InfoBox
        title="Casos confirmados"
        cases={printCases(data.todayCases)}
        total={printCases(data.cases)}
        onClick={(e) => updateCasesType("cases")}
      />

      {data.suspects ? (
        <InfoBox
          title="Suspeitos"
          cases={printCases(data.todayRecovered)}
          total={prettyPrintStat(data.suspects)}
          // onClick={(e) => updateCasesType("suspects")}
        />
      ) : (
        <InfoBox
          title="Recuperados"
          cases={printCases(data.todayRecovered)}
          total={prettyPrintStat(data.recovered)}
          onClick={(e) => updateCasesType("recovered")}
        />
      )}

      <InfoBox
        title="Mortes"
        cases={printCases(data.todayDeaths)}
        total={prettyPrintStat(data.deaths)}
        onClick={(e) => updateCasesType("deaths")}
      />
    </div>
  );
}

export default AppStats;
