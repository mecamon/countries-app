import React, { useState } from 'react'

const Filter = () => {

    const [filter, setFilter] = useState('none');

    const regions = [
        {name:'Africa', value: 'africa'},
        {name:'America', value: 'america'},
        {name:'Asia', value: 'asia'},
        {name:'Europe', value: 'europa'},
        {name:'Oceania', value: 'oceania'}
    ];

    const changeHandler = ({ target }) => {

        setFilter(target.value);
    }

    return (
        <div>
            <select value={filter} onChange={ changeHandler }
            className="bg-white font-medium rounded-md mt-6 w-64 h-14 shadow"
                >
                    <option key="10" defaultValue>Filter by Region</option>
                {
                    regions.map((region, index) => (
                        <option key={index} 
                        value={region.value}>{ region.name }
                        </option>
                    ))
                }
            </select>
        </div>
    );
}

export default Filter;