import leftArrow from '../assets/left-arrow.svg';
import whiteLeftArrow from '../assets/white-left-arrow.svg';

const CountryInfo = (props) => {

  const clickHandler = () => {
    props.onClick();
  }

  return (
    <div>
      <button className="btn mb-20 mt-12 cursor-pointer" onClick={clickHandler}>
        <img src={!props.isDark ? whiteLeftArrow : leftArrow} className="w-4 h-auto mr-2" alt="arrow icon"/>
        Back
      </button>

      { props.selectedCountry && 
      <div className="flex flex-col">
        <img src={props.selectedCountry.flag} alt="Country flag" />
        <h2  className="font-bold dark:text-white mt-12 mb-10 text-xl">{props.selectedCountry.name}</h2>

        <span className="font-medium mb-4 dark:text-white">
          Native Name: <span className="font-normal"> {props.selectedCountry.nativeName}</span>
        </span>

        <span className="font-medium mb-4 dark:text-white">
          Population: <span className="font-normal">{props.selectedCountry.population}</span>
        </span>

        <span className="font-medium mb-4 dark:text-white">
          Region: <span className="font-normal">{props.selectedCountry.region}</span>
        </span>

        <span className="font-medium mb-4 dark:text-white">
          Sub Region: <span className="font-normal">{props.selectedCountry.subregion}</span>
        </span>

        <span className="font-medium mb-12 dark:text-white">
          Capital: <span className="font-normal">{props.selectedCountry.capital}</span>
        </span>

        <span className="font-medium mb-4 dark:text-white">
          Top Level Domain: <span className="font-normal"> {props.selectedCountry.topLevelDomain}</span>
        </span>

        <span className="font-medium mb-4 dark:text-white">
          Currencies:
          {props.selectedCountry.currencies.map(({ name }, index) => (
            <span key={index} className="font-normal"> {name}</span>
          ))}
        </span>

        <span className="font-medium mb-4 dark:text-white">
          Languages:
          {props.selectedCountry.languages.map(({ name }, index) => (
            <span key={index} className="font-normal"> {name}</span>
          ))}
        </span>

        <span className="font-medium text-lg dark:text-white">Border Countries:</span>
          <div className="w-full flex flex-wrap justify-start mt-4 mb-12">
          {props.selectedCountry.borders.map((border, index) => (
            <span key={index} className="font-normal btn mr-2 mb-2"> {border}</span>
          ))}
          </div>
      </div> }
    </div>
  );
};

export default CountryInfo;

