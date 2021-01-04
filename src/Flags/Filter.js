import React from "react";

const Filter = (props) => {
  const regions = [
    { name: "Africa", value: "africa" },
    { name: "America", value: "americas" },
    { name: "Asia", value: "asia" },
    { name: "Europe", value: "europe" },
    { name: "Oceania", value: "oceania" },
  ];

  const changeHandler = ({ target }) => {
    props.onChange(target.value);
  };

  return (
    <div>
      <select
        onChange={changeHandler}
        className="bg-white dark:bg-dark-header dark:text-white font-medium 
        rounded-md mt-6 w-64 h-14 shadow"
      >
        <option key="10" defaultValue>
          Filter by Region
        </option>
        {regions.map((region, index) => (
          <option key={index} value={region.value}>
            {region.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
