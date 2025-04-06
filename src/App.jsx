import React, { useState, useEffect } from 'react';
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
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage or default to false
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleSidebar = () => {
    setSideBar(!sideBar);
    if (sideBar) setButtonClass("opacity-50 hover:opacity-20");
    else setButtonClass("opacity-20 hover:opacity-50");
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem('theme');
    setIsDarkMode(stored ? stored === 'dark' : systemPrefersDark);
  }, []);

  return (
    <>
      <div className="font-garamond">
        {/* Sidebar */}
        {sideBar && <NavBar />}

        {/* Main Content */}
        <div className={`bg-${isDarkMode ? `gray-800` : `gray-100`} md:${sideBar ? 'ml-48' : ''}`}>
          <div className={`hidden md:block fixed top-4 left-4 ${sideBar ? 'ml-48' : ''}`}>
            <button onClick={toggleSidebar}>
              <img
                src={isDarkMode ? `./assets/sidebar-left-svgrepo-com(2).svg` : `./assets/sidebar-left-svgrepo-com(1).svg`}
                alt="Hide or Show Navigation"
                className={buttonClass + " w-10 h-10"}
              />
            </button>
          </div>
          <div className={`hidden md:block fixed top-4 opacity-30 hover:opacity-80 right-4 ${sideBar ? 'ml-48' : ''}`}>
            <button onClick={toggleDarkMode}>
              <img
                src={isDarkMode ? `./assets/sun-svgrepo-com(2).svg` : `./assets/moon3-svgrepo-com.svg`}
                alt="Light Mode"
                className={" w-10 h-10  text-white "}
              />
            </button>
          </div>
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
