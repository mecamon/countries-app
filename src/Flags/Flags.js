import React, { useEffect, useState } from "react";
import Heading from "../Flags/Heading";
import SearchBar from "../Flags/SearchBar";
import Filter from "../Flags/Filter";
import axios from "axios";
import CountryCard from "./CountryCard";
import CountryInfo from "./CountryInfo";

const Flags = () => {
  const [countries, setCountries] = useState(null);
  const [country, setCountry] = useState(null);
  const [countryIsVisible, setCountryIsVisible] = useState(null);
  const [countriesIsVisible, setCountriesIsVisible] = useState(true);
  const [isDark, setIsDark] = useState(null);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");

      setCountries(data);
    })();
  }, []);

  const changeFilter = (value) => {
    (async function () {
      const { data } = await axios.get(
        "https://restcountries.eu/rest/v2/region/" + value
      );

      setCountries(data);
    })();
  };

  const inputHandler = (value) => {
    (async function () {
      const { data } = await axios.get(
        "https://restcountries.eu/rest/v2/name/" + value
      );

      setCountries(data);
    })();
  };

  const clickHandler = (value) => {
    // console.log(value);
    setCountry(value);
    setCountriesIsVisible(false);
    setCountryIsVisible(true);
  };

  const countryInfoClickHandler = () => {

    setCountry(null);
    setCountriesIsVisible(true);
    setCountryIsVisible(false);
  }

  const darkMode = (value) => {
    setIsDark(value);
  }

  return (
    <div className="w-full flex flex-col bg-gray-50 dark:bg-dark-body">
      <Heading isDark={darkMode} />
      <div id="container" className="px-6">
        { countriesIsVisible &&  <SearchBar onInput={inputHandler} />}
        { countriesIsVisible &&  <Filter onChange={changeFilter} />}
        { countriesIsVisible && <CountryCard countries={countries} onClick={ clickHandler } /> }
        { countryIsVisible && <CountryInfo selectedCountry={country} 
          onClick={ countryInfoClickHandler } isDark={isDark} /> }
      </div>
    </div>
  );
};

export default Flags;
