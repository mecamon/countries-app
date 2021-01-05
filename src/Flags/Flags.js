import React, { useEffect, useState } from "react";
import Heading from "../Flags/Heading";
import SearchBar from "../Flags/SearchBar";
import Filter from "../Flags/Filter";
import CountryCard from "./CountryCard";
import CountryInfo from "./CountryInfo";
import { Endpoints } from "../API/endpoints";

const Flags = () => {
  const [countries, setCountries] = useState(null);
  const [country, setCountry] = useState(null);
  const [countryIsVisible, setCountryIsVisible] = useState(null);
  const [countriesIsVisible, setCountriesIsVisible] = useState(true);
  const [isDark, setIsDark] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await Endpoints.all();

      setCountries(data);
      } catch (error) {
        return
      }
    })();
  }, []);

  const changeFilter = (value) => {
    (async function () {
      try {
        
        const { data } = await Endpoints.region(value);

        setCountries(data);
      } catch (error) {
        return
      }
    })();
  };

  const inputHandler = (value) => {
    (async function () {
      try {

        let currentSearch = null

        if(!value) {
          const { data } = await Endpoints.all();

          currentSearch = data;
        } else {
          const { data } = await Endpoints.name(value);

          currentSearch = data;
        }
        setCountries(currentSearch);
      } catch (error) {
        return
      }
    })();
  };

  const clickHandler = (value) => {
    
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
      <div id="container" className="px-6 pb-20">
        { countriesIsVisible &&  
        <div className="flex flex-col md:flex-row md:justify-between">
          <SearchBar onInput={inputHandler} />
          <Filter onChange={changeFilter} />
        </div>}
        { countriesIsVisible && <CountryCard countries={countries} onClick={ clickHandler } /> }
        <div className="flex justify-center">
        { countryIsVisible && <CountryInfo selectedCountry={country} 
          onClick={ countryInfoClickHandler } isDark={isDark} /> }
        </div>
      </div>
    </div>
  );
};

export default Flags;
