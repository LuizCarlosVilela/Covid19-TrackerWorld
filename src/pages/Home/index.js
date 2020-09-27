import React, { useState, useEffect } from "react";

import "./styles.css";

//Components
import Header from "../../components/Header";

import AppStats from "./components/AppStats";
import Map from "./components/Map";
import Table from "./components/Table";
import LineGraph from "./components/LineGraph";

import "leaflet/dist/leaflet.css";

import { sortData } from "./util";

import { Card, CardContent } from "@material-ui/core";

function Home() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Brasil");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  // Latitude: -10.911111111111°
  // Longitude: -37.071666666667
  const [mapCenter] = useState({
    lat: -15.779722222222,
    lng: -47.929722222222,
  });
  const [mapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries/brazil")
      .then((response) => response.json())
      .then((data) => setCountryInfo(data));
  }, []);

  useEffect(() => {
    //https://disease.sh/v3/covid-19/countries
    //https://covid19-brazil-api.now.sh/api/report/v1
    const getCountries = async () => {
      await fetch("https://covid19-brazil-api.now.sh/api/report/v1")
        .then((response) => response.json())
        .then((data) => {
          const estados = data["data"].map((estado) => ({
            nome: estado.state,
            value: estado.uf,
          }));
          setCountries(estados);
          const sortedData = sortData(data["data"]);
          setTableData(sortedData);
        });

      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          setMapCountries(data);
        });
    };

    getCountries();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log(countryCode);

    setCountry(countryCode);

    const url =
      countryCode === "Brasil"
        ? "https://disease.sh/v3/covid-19/countries/brazil"
        : `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  };

  const updateCasesType = (type) => {
    setCasesType(type);
  };

  return (
    <div className="container">
      <div className="left">
        <Header
          country={country}
          onCountryChange={onCountryChange}
          countries={countries}
        />
        <AppStats
          data={countryInfo}
          updateCasesType={updateCasesType}
          casesType={casesType}
        />

        <Map
          casesType={casesType}
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>

      <Card className="right">
        <CardContent>
          <h3>Casos Confirmados</h3>
          <Table countries={tableData} />

          <h3 className="graphTitle">
            Dados de
            {casesType === "cases"
              ? " casos "
              : casesType === "recovered"
              ? " recuperados "
              : " mortes "}
            no Mundo
          </h3>
          <LineGraph className="app_graph" casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
