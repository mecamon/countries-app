import moon from '../assets/icon-moon.svg'
// import sun from '../assets/icon-sun.svg'

const Heading = () => {

    return (
        <div className="w-full flex flex-row justify-between items-center bg-white shadow h-16  pr-6 pl-6">
            <h1 className="font-bold">Where in the world?</h1>
            <div className="flex flex-row">
                <img src={ moon } alt="" className="w-4 h-auto mr-2" />
                <h2 className="font-medium">Dark Mode</h2>
            </div>
        </div>
    );
}

export default Heading;