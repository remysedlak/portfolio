import React, { useState, useEffect } from 'react';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './tailwind.css'; // Ensure Tailwind CSS is imported

function App() {
  const [sideBar, setSideBar] = useState(true);
 const [isDarkMode, setIsDarkMode] = useState(() => {
         // Check localStorage or default to false
         return localStorage.getItem('theme') === 'dark';
       });
     
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

  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>

    <div>
      <div
        className="font-garamond dark:bg-gray-800 bg-gray-200 transition-colors duration-400 ease-in-out"
        id="app"
      >
        
        {/* Sidebar */}
          {sideBar && (
            
            <NavBar
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode} // Pass the setIsDarkMode function to NavBar
              sideBar={sideBar}
            />
          )}

          {/* Sidebar Toggle */}
          <div className={`hidden md:block fixed top-4 left-4 z-50 ${sideBar ? 'md:left-52' : 'md:left-4 transition-all duration-100'}`}>
            <button onClick={toggleSidebar}>
              <img
                src={
                  isDarkMode
                    ? `./assets/sidebar-lcharcoal.svg`
                    : `./assets/sidebar-lcharcoal.svg`
                }
                alt="Hide or Show Navigation"
                className={`w-10 h-10 ${
                  isDarkMode ? 'opacity-30 hover:opacity-20' : 'opacity-60 hover:opacity-90'
                }`}
              />
            </button>
          </div>

          {/* Main Content */}
        <div
          className={`relative md:${sideBar ? 'ml-48' : ''} transition-colors duration-100 ease-in-out`}
          style={{ opacity: isDarkMode ? 1 : 0.9 }}
        >
          
          <div
            style={{ backgroundImage: `url(/assets/cartographer.png)`}}
            className="absolute inset-0 bg-repeat opacity-10 transition-opacity duration-500 ease-in-out transition-all duration-100 mix-blend-multiply pointer-events-none z-0"
          />

          <div id="intro">
           
            <Intro isDarkMode={isDarkMode}/>
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
      </div>
    </>
  );
}
export default App;