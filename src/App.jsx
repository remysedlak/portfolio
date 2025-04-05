import React, { useState } from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './tailwind.css'; // Ensure Tailwind CSS is imported

function App() {
  const [sideBar, setSideBar] = useState(false);

  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <div className="font-garamond">
        {/* Sidebar */}
        {sideBar && <NavBar />}

        {/* Main Content */}
        <div className={`sm:${sideBar ? 'ml-40' : ''}`}>
          <div className={`hidden sm:block fixed top-4 left-4 ${sideBar ? 'ml-40' : ''}`}>
            <button onClick={toggleSidebar} className="">
              <img
                src="./public/assets/sidebar-svgrepo-com.svg"
                alt="Sidebar Icon"
                className="w-12 h-12 text-gray-500 opacity-50"
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