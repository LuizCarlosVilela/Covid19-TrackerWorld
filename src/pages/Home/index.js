import React, { useState, useEffect } from "react";
// import { FormControl, Select, MenuItem } from "@material-ui/core";

import Header from "../../components/Header";

import InfoBox from "./components/InfoBox";

import "./styles.css";

function Home() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    //https://disease.sh/v3/covid-19/countries

    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };

    getCountries();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <Header
        country={country}
        onCountryChange={onCountryChange}
        countries={countries}
      />

      <div className="app_stats">
        <InfoBox title="Coronavirus casos" cases={2000} total={2000} />

        <InfoBox title="Recuperados" cases={2000} total={2000} />

        <InfoBox title="Mortes" cases={2000} total={2000} />
      </div>
    </div>
  );
}

export default Home;
