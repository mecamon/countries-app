
const CountryCard = (props) => {

  const handleClick = (info) => {
    props.onClick(info)
  }

  return (
    <div className="w-full px-10 mt-10">
      {props.countries &&
        props.countries.map((country, index) => (
          <div
            key={index}
            className="w-full md:min-w-0 mb-6 bg-white 
                flex flex-col flex-grow rounded-lg shadow-md cursor-pointer"
            onClick={ () => handleClick(country) }
          >
            <img
              src={country.flag}
              alt="country flag"
              className="w-full h-auto rounded-lg rounded-b-none"
            />
            <h2 className="font-medium ml-6 mt-6">{country.name}</h2>
            <span className="ml-6">
              <span className="font-medium">Population:</span>
              {country.population}
            </span>
            <span className="ml-6">
              <span className="font-medium">Region:</span>
              {country.region}
            </span>
            <span className="ml-6 mb-6">
              <span className="font-medium">Capital:</span>
              {country.capital}
            </span>
          </div>
        ))}
    </div>
  );
};

export default CountryCard;
