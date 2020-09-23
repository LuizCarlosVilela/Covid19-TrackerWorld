import React, { useState, useEffect } from "react";

import "./styles.css";

//Components
import Header from "../../components/Header";
import AppStats from "./components/AppStats";
import Map from "./components/Map";

import { Card, CardContent } from "@material-ui/core";

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

    //https://disease.sh/v3/covid-19/all
    //https://disease.sh/v3/covid-19/countries/{COUNTRY_CODE}
  };

  return (
    <div className="container">
      <div className="left">
        <Header
          country={country}
          onCountryChange={onCountryChange}
          countries={countries}
        />
        <AppStats />
        <Map />
      </div>
      <Card className="right">
        <CardContent>
          <h3>Lve Case By Country</h3>
          <h3>Wordwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
