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

  const updateAt = new Date().toLocaleString("pt-BR", {
    dateStyle: "short",
  });

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries/brazil")
      .then((response) => response.json())
      .then((data) => setCountryInfo(data));
  }, []);

  useEffect(() => {
    //https://disease.sh/v3/covid-19/countries
    //https://covid19-brazil-api.now.sh/api/report/v1
    const getCountries = async () => {
      await fetch(
        "https://brasil.io/api/dataset/covid19/caso/data/?format=json&state=AL"
      )
        .then((response) => response.json())
        .then((data) => {
          const dados = data["results"];

          const cidades = [];

          for (let i = 0; i < 103; i++) {
            const cidade = dados[i];

            if (i === 103) {
              break;
            } else {
              cidades.push({
                nome: cidade.city,
                value: cidade.city,
              });
            }
          }

          setCountries(cidades);
        });

      await fetch("https://covid19-brazil-api.now.sh/api/report/v1")
        .then((response) => response.json())
        .then((data) => {
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

    setCountry(countryCode);

    const url =
      countryCode === "Brasil"
        ? "https://disease.sh/v3/covid-19/countries/brazil"
        : `https://brasil.io/api/dataset/covid19/caso/data/?format=json&state=AL&city=${countryCode}`;

    countryCode === "Brasil"
      ? await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setCountryInfo(data);
          })
      : await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const dados = data["results"][0];

            setCountryInfo(dados);
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
          <h3>Casos Confirmados - Atual. {updateAt}</h3>
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
