import search from '../assets/search.svg'

const SearchBar = () => {

    return (
        <div>
            <div className="bg-white rounded-md mt-6 flex flex-row justify-center items-center w-full h-14 shadow">
                <img src={ search } alt="" className="w-6 h-auto mr-4" />
                <input type="text" placeholder="Search for country" className="w-4/5 h-8 outline-none"/>
            </div>
        </div>
    );
}

export default SearchBar;