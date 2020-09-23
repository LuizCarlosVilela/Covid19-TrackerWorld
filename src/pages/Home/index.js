import React, { useState, useEffect } from "react";

import "./styles.css";

//Components
import Header from "../../components/Header";
import AppStats from "./components/AppStats";
import Map from "./components/Map";

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
      <div className="right"></div>
    </div>
  );
}

export default Home;
