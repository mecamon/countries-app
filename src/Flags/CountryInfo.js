import leftArrow from '../assets/left-arrow.svg';

const CountryInfo = (props) => {

  const clickHandler = () => {
    props.onClick();
  }

  return (
    <div>
      <button className="btn mb-20 mt-12 cursor-pointer" onClick={clickHandler}>
        <img src={ leftArrow } className="w-4 h-auto mr-2" alt="arrow icon"/>
        Back
      </button>

      { props.selectedCountry && 
      <div className="flex flex-col bg-red">
        <img src={props.selectedCountry.flag} alt="Country flag" />
        <h2  className="font-bold mt-12 mb-10 text-xl">{props.selectedCountry.name}</h2>

        <span className="font-medium mb-4">
          Native Name: <span className="font-normal"> {props.selectedCountry.nativeName}</span>
        </span>

        <span className="font-medium mb-4">
          Population: <span className="font-normal">{props.selectedCountry.population}</span>
        </span>

        <span className="font-medium mb-4">
          Region: <span className="font-normal">{props.selectedCountry.region}</span>
        </span>

        <span className="font-medium mb-4">
          Sub Region: <span className="font-normal">{props.selectedCountry.subregion}</span>
        </span>

        <span className="font-medium mb-12 ">
          Capital: <span className="font-normal">{props.selectedCountry.capital}</span>
        </span>

        <span className="font-medium mb-4">
          Top Level Domain: <span className="font-normal"> {props.selectedCountry.topLevelDomain}</span>
        </span>

        <span className="font-medium mb-4">
          Currencies:
          {props.selectedCountry.currencies.map(({ name }, index) => (
            <span key={index} className="font-normal"> {name}</span>
          ))}
        </span>

        <span className="font-medium mb-4">
          Languages:
          {props.selectedCountry.languages.map(({ name }, index) => (
            <span key={index} className="font-normal"> {name}</span>
          ))}
        </span>

        <span className="font-medium text-lg">Border Countries:</span>
          <div className="w-full flex justify-start mt-4 mb-12">
          {props.selectedCountry.borders.map((border, index) => (
            <span key={index} className="font-normal btn  mr-2"> {border}</span>
          ))}
          </div>
      </div> }
    </div>
  );
};

export default CountryInfo;

