import React, { useEffect, useState } from "react";
import Heading from "../Flags/Heading";
import SearchBar from "../Flags/SearchBar";
import Filter from "../Flags/Filter";
import axios from "axios";
import CountryCard from "./CountryCard";

const Flags = () => {
  const [countries, setCountries] = useState(null);

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

  return (
    <div className="w-full h-screen flex flex-col bg-gray-50">
      <Heading />
      <div id="container" className="px-6">
        <SearchBar onInput={inputHandler} />
        <Filter onChange={changeFilter} />
        <CountryCard countries={countries} />
      </div>
    </div>
  );
};

export default Flags;
