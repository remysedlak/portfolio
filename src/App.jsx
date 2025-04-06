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
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <div
        className={`font-garamond dark:bg-gray-800 bg-gray-200 transition-colors duration-120 ease-in-out`}
      >
        {/* Sidebar */}
        {sideBar && (
          <NavBar
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            sideBar={sideBar}
          />
        )}

        {/* Sidebar Toggle */}
        <div className={`hidden md:block pl-4 pt-2 ${sideBar ? 'ml-48' : ``}`}>
          <button onClick={toggleSidebar}>
            <img
              src={
                isDarkMode
                  ? `./assets/sidebar-black.svg`
                  : `./assets/sidebar-black.svg`
              }
              alt="Hide or Show Navigation"
              className={
                'opacity-25 hover:opacity-40 dark:opacity-10 dark:hover:fill-white w-10 h-10'
              }
            />
          </button>
        </div>

        {/* Main Content */}
        <div
          className={`md:${sideBar ? 'ml-48' : ''} transition-opacity duration-500 ease-in-out`}
          style={{ opacity: isDarkMode ? 1 : 0.9 }}
        >
          <div id="intro">
            <Intro />
          </div>
          <div id="portfolio">
            <Portfolio />
          </div>
          <div id="timeline">
            <Timeline />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;