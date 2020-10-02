import React from "react";
import "./styles.css";

import { prettyPrintStat, printCases } from "../../util";

import InfoBox from "./components/InfoBox";

function AppStats({ data, updateCasesType, casesType }) {
  // { todayCases } = data.todayCases;

  return (
    <div className="app_stats">
      {data.city_ibge_code ? (
        <>
          <InfoBox
            isRed
            active={casesType === "cases"}
            title="Casos confirmados"
            cases={printCases(data.todayCases)}
            total={printCases(data.confirmed)}
            onClick={(e) => updateCasesType("cases")}
          />
          <InfoBox
            active={casesType === "recovered"}
            title="AL - Cidade Habitantes"
            cases={data.city}
            total={printCases(data.estimated_population_2019)}
            // onClick={(e) => updateCasesType("suspects")}
          />
        </>
      ) : (
        <>
          <InfoBox
            isRed
            active={casesType === "cases"}
            title="Casos confirmados"
            cases={printCases(data.todayCases)}
            total={printCases(data.cases)}
            onClick={(e) => updateCasesType("cases")}
          />

          <InfoBox
            active={casesType === "recovered"}
            title="Recuperados"
            cases={printCases(data.todayRecovered)}
            total={prettyPrintStat(data.recovered)}
            onClick={(e) => updateCasesType("recovered")}
          />
        </>
      )}

      <InfoBox
        isRed
        active={casesType === "deaths"}
        title="Mortes"
        cases={printCases(data.todayDeaths)}
        total={prettyPrintStat(data.deaths)}
        onClick={(e) => updateCasesType("deaths")}
      />
    </div>
  );
}

export default AppStats;
