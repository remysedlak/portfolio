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

  const toggleSidebar = () => {
    setSideBar(!sideBar);
    if(sideBar)
      setButtonClass("opacity-50 hover:opacity-20")
    else
      setButtonClass("opacity-20 hover:opacity-50")
  };

  return (
    <>
      <div className="font-garamond">
        {/* Sidebar */}
        {sideBar && <NavBar />}

        {/* Main Content */}
        <div className={`sm:${sideBar ? 'ml-40' : ''}`}>
          <div className={`hidden sm:block fixed top-4 left-4 ${sideBar ? 'ml-40' : ''}`}>
            <button onClick={toggleSidebar}>
              <img
                src="./assets/sidebar-svgrepo-com.svg"
                alt="Hide or Show Navigation"
                className={buttonClass+" w-8 h-8 md:w-10 md:h-10  xl:w-12 xl:h-12 "}
              />
            </button>
          </div>
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