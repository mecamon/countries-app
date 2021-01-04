import search from "../assets/search.svg";

const SearchBar = (props) => {

  const handleInput = ({ target }) => {
    props.onInput(target.value);
  }

  return (
    <div>
      <div className="w-full md:w-96 h-14 bg-white dark:bg-dark-header rounded-md mt-6 flex flex-row justify-start items-center shadow">
        <img src={search} alt="" className="w-6 ml-6 h-auto mr-4" />
        <input onInput={ handleInput }
          type="text"
          placeholder="Search for country"
          className="w-2/4 md:w-9/12 h-8 outline-none dark:bg-dark-header dark:text-white"
        />
      </div>
    </div>
  );
};

export default SearchBar;
