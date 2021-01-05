import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'
import React, { useState } from 'react'

const Heading = (props) => {

  const [ darkMode, setDarkMode ] = useState(false);

  const toggleMode = () => {
    if (!darkMode) {
      document.querySelector('html').classList.add('dark');
      document.body.classList.remove('bg-gray-50');
      document.body.classList.add('bg-dark-body');
      
      setDarkMode(true);
      props.isDark(darkMode);
      
    } else if (darkMode) {
      document.querySelector('html').classList.remove('dark');  
      document.body.classList.remove('bg-dark-body');
      document.body.classList.add('bg-gray-50');

      setDarkMode(false);
      props.isDark(darkMode);
    }
  }

  return (
      <div className="w-full flex flex-row justify-between items-center 
      bg-white dark:bg-dark-header shadow pr-6 pl-6">
          <h1 className="font-bold my-6 dark:text-white">Where in the world?</h1>
          <div className="flex flex-row items-center">
              <img src={ !darkMode ? moon : sun} alt="" className="w-auto h-6 mr-2" />
              <button className="font-medium dark:text-white" 
              onClick={toggleMode}>{ !darkMode ? 'Dark Mode' : 'Light Mode' }</button>
          </div>
      </div>
  );
}

export default Heading;