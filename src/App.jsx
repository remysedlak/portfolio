import React, { useState } from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './tailwind.css'; // Ensure Tailwind CSS is imported

function App() {
  const [sideBar, setSideBar] = useState(true);
  const [buttonClass, setButtonClass] = useState("opacity-20 hover:opacity-50");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleSidebar = () => {
    setSideBar(!sideBar);
    if (sideBar){
      setButtonClass("opacity-50 hover:opacity-20");
    } 
    else setButtonClass("opacity-20 hover:opacity-50");
  };

  return (
    <>
      <div className={`font-garamond dark:bg-gray-800 bg-gray-200`}>
        {/* Sidebar */}
        {sideBar && (
          <NavBar
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            sideBar={sideBar}
          />
        )}
        <div className={`hidden md:block pl-2 pt-2 ${sideBar ? 'ml-48' : ``}`}>
          <button onClick={toggleSidebar}>
            <img
              src={isDarkMode ? `./assets/sidebar-left-svgrepo-com(1).svg` : `./assets/sidebar-left-svgrepo-com(2).svg`}
              alt="Hide or Show Navigation"
              className={buttonClass + " w-10 h-10"}
            />
          </button>
        </div>

        {/* Main Content */}
        <div className={`md:${sideBar ? 'ml-48' : ''}`}>
          <div id="intro">
            <Intro darkMode={isDarkMode} />
          </div>
          <div id="portfolio">
            <Portfolio darkMode={isDarkMode} />
          </div>
          <div id="timeline">
            <Timeline darkMode={isDarkMode} />
          </div>
          <div id="contact">
            <Contact darkMode={isDarkMode} />
          </div>
          <Footer darkMode={isDarkMode} />
        </div>
        </div>
    </>
  );
}

export default App;
