import React, { useState, useEffect } from "react";

import "./styles.css";

//Components
import Header from "../../components/Header";

import AppStats from "./components/AppStats";
import Map from "./components/Map";
import Table from "./components/Table";
import LineGraph from "./components/LineGraph";

import { sortData } from "./util";

import { Card, CardContent } from "@material-ui/core";

function Home() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Brasil");

  const [countryInfo, setCountryInfo] = useState({});

  const [tableData, setTableData] = useState([]);

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

  return (
    <div className="container">
      <div className="left">
        <Header
          country={country}
          onCountryChange={onCountryChange}
          countries={countries}
        />
        <AppStats data={countryInfo} />

        <Map />
      </div>

      <Card className="right">
        <CardContent>
          <h3>Casos Confirmados</h3>
          <Table countries={tableData} />

          <h3>Novos Casos No Mundo</h3>
          <LineGraph />
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
