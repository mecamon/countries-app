
const CountryCard = (props) => {

  const handleClick = (info) => {
    props.onClick(info)
  }

  return (
    <div className="w-full px-4 2xl:px-10 xl:px-10 lg:2xl:px-10 mt-10 flex flex-row flex-wrap">
      {props.countries &&
        props.countries.map((country, index) => (
          <div
            key={index}
            className="mb-6 w-full 2xl:w-1/5 2xl:mx-8 xl:w-1/4 xl:mx-8 lg:w-2/5 lg:mx-8 md:mx-20 md:max-w-md
                bg-white dark:bg-dark-header flex flex-col flex-grow flex-shrink rounded-lg shadow-md cursor-pointer"
            onClick={ () => handleClick(country) }
          >
            <img
              src={country.flag}
              alt="country flag"
              className="w-full h-auto rounded-lg rounded-b-none"
            />
            <h2 className="font-medium ml-6 mt-6 mb-4 dark:text-white text-xl"> {country.name}</h2>
            <span className="ml-6 mb-2 dark:text-white">
              <span className="font-medium dark:text-white">Population: </span>
               {country.population}
            </span>
            <span className="ml-6 mb-2 dark:text-white">
              <span className="font-medium dark:text-white">Region: </span>
               {country.region}
            </span>
            <span className="ml-6 mb-10 dark:text-white">
              <span className="font-medium dark:text-white">Capital: </span>
               {country.capital}
            </span>
          </div>
        ))}
    </div>
  );
};

export default CountryCard;
