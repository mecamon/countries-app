import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'
import React, { useState } from 'react'

const Heading = (props) => {

  const [ darkMode, setDarkMode ] = useState(false);

  const toggleMode = () => {
    if (!darkMode) {
      document.querySelector('html').classList.add('dark');
      setDarkMode(true);
      props.isDark(darkMode);
    } else if (darkMode) {
      document.querySelector('html').classList.remove('dark');
      setDarkMode(false);
      props.isDark(darkMode);
    }
  }

  return (
      <div className="w-full flex flex-row justify-between items-center 
      bg-white dark:bg-dark-header shadow pr-6 pl-6">
          <h1 className="font-bold my-6 dark:text-white">Where in the world?</h1>
          <div className="flex flex-row">
              <img src={ !darkMode ? moon : sun} alt="" className="w-4 h-auto mr-2" />
              <button className="font-medium dark:text-white" 
              onClick={toggleMode}>{ !darkMode ? 'Dark Mode' : 'Light Mode' }</button>
          </div>
      </div>
  );
}

export default Heading;