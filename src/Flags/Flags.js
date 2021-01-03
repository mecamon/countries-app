import { CountriesEndpoints } from '../API/endpoints'
import React, { useEffect } from 'react'
import Heading from '../Flags/Heading'
import SearchBar from '../Flags/SearchBar'
import Filter from '../Flags/Filter'

const Flags = () => {

    // useEffect(() => {
    //     CountriesEndpoints.getByName('dominican');
    // }, [])

    return (
        <div className="w-full h-screen flex flex-col bg-gray-50">
            <Heading />
            <div id="container" className="px-6">
                <SearchBar />
                <Filter />
            </div>
        </div>
    );
}

export default Flags;