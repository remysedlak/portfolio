import React from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './tailwind.css'; // Ensure Tailwind CSS is imported

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView('smooth' || 'auto');
  };

  return (
    <>
      <div className="text-xl p-2 rounded-md width-screen bg-gray-200 scroll-smooth font-garamond">
        <div className="width-full mx-auto scroll-smooth">
          <nav className="hidden lg:flex justify-between items-center p-4 scroll-smooth mx-4 border rounded-md">
            <div className="text-3xl text-gray-800 font-bold">Remy Sedlak</div>
            <div className="flex space-x-4">
              <button onClick={() => window.open('https://drive.google.com/file/d/1-gW3kevUAv6ImxSWIZgw-VO9A38-KFCk/view', '_blank')} className="text-gray-800 hover:text-gray-600">Resume</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-800 hover:text-gray-600 scroll-smooth">Portfolio</button>
              <button onClick={() => scrollToSection('timeline')} className="text-gray-800 hover:text-gray-600 scroll-smooth">Timeline</button>
              {/* <a href="https://remymane.com/" className="text-gray-800 hover:text-gray-600">My Music</a> */}
              <button onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-gray-600 scroll-smooth">Contact</button>
            </div>
          </nav>

          <Intro/>

          
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