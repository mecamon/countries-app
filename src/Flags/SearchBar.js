import search from "../assets/search.svg";

const SearchBar = (props) => {

  const handleInput = ({ target }) => {
    props.onInput(target.value);
  }

  return (
    <div>
      <div className="bg-white dark:bg-dark-header rounded-md mt-6 flex flex-row justify-center items-center w-full h-14 shadow">
        <img src={search} alt="" className="w-6 h-auto mr-4" />
        <input onInput={ handleInput }
          type="text"
          placeholder="Search for country"
          className="w-4/5 h-8 outline-none dark:bg-dark-header"
        />
      </div>
    </div>
  );
};

export default SearchBar;
