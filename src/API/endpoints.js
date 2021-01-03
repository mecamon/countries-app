import axios from 'axios';

const endpoints = {
    all: 'https://restcountries.eu/rest/v2/all',
    name: 'https://restcountries.eu/rest/v2/name/',
    region: 'https://restcountries.eu/rest/v2/region/'
}

export class CountriesEndpoints {
    static getAll() {
        axios.get(endpoints.all)
            .then(countries => {
                console.log(countries);
            }).catch(e => {console.log(e)});
    }

    static getByName(countryName) {
        axios.get(endpoints.name+countryName)
            .then(countries => {
                console.log(countries);
            }).catch(e => {console.log(e)});
    }

    static getByRegion(regionName) {
        axios.get(endpoints.region+regionName)
            .then(countries => {
                console.log(countries);
            }).catch(e => {console.log(e)});
    }
}