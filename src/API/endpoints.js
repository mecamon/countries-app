import axios from "axios";

const endpoints = {
  all: "https://restcountries.eu/rest/v2/all",
  name: "https://restcountries.eu/rest/v2/name/",
  region: "https://restcountries.eu/rest/v2/region/",
};

export class Endpoints {
  static async all() {
    try {
      return await axios.get(endpoints.all);
    } catch (error) {
      console.log('Country not found!');
    }
  }

  static async name(countryName) {
    try {
      return await axios.get(endpoints.name + countryName);
    } catch (error) {
      console.log('Country not found!');
    }
  }

  static async region(regionName) {
    try {
      return await axios.get(endpoints.region + regionName);
    } catch (error) {
      console.log('Country not found!');
    }
  }
}
