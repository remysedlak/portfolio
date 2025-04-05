import React, { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './tailwind.css'; // Ensure Tailwind CSS is imported

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('div[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="text-garamond">
        {/* Sidebar */}
        <nav className="hidden sm:block bg-gray-300 shadow-lg fixed top-0 left-0 w-40 p-4 text-left shadow-lg h-full flex flex-col justify-top font-garamond">
          <img
            src="/assets/remysedlak_image.jpg"
            alt="Remy Sedlak"
            className="h-32 w-32 mt-4 rounded-lg"
          />
          <div className="justify-bottom position-bottom flex flex-col mt-4">
            <div className="text-lg text-black font-semibold mb-1">Remy Sedlak</div>
            <div className="flex flex-col text-black underline">
              <button
                onClick={() =>
                  window.open('https://github.com/remysedlak', '_blank')
                }
                className="hover:text-blue-700 text-left"
              >
                GitHub
              </button>
              <button
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/remysedlak/',
                    '_blank'
                  )
                }
                className="hover:text-blue-700 text-left"
              >
                LinkedIn
              </button>
              <button
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/1-gW3kevUAv6ImxSWIZgw-VO9A38-KFCk/view',
                    '_blank'
                  )
                }
                className="hover:text-blue-700 text-left"
              >
                Resume
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-3 lg:space-y-6 justify-left h-1/3 text-left mt-10 lg:mt-20">
            <button
              onClick={() => scrollToSection('intro')}
              className={`text-left ${
                activeSection === 'intro' ? 'text-blue-700' : 'text-gray-800'
              } hover:text-gray-500`}
            >
              Intro
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`text-left ${
                activeSection === 'portfolio' ? 'text-blue-700' : 'text-gray-800'
              } hover:text-gray-500`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('timeline')}
              className={`text-left ${
                activeSection === 'timeline' ? 'text-blue-700' : 'text-gray-800'
              } hover:text-gray-500`}
            >
              Timeline
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-left ${
                activeSection === 'contact' ? 'text-blue-700' : 'text-gray-800'
              } hover:text-gray-500`}
            >
              Contact
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="sm:ml-40 flex-1 text-xl p-2 rounded-md bg-gray-200 scroll-smooth font-garamond">
          <div className="width-full mx-auto scroll-smooth">
            <div id="intro" className="">
              <Intro />
            </div>
            <div id="portfolio" className="">
              <Portfolio />
            </div>
            <div id="timeline" className="">
              <Timeline />
            </div>
            <div id="contact" className="">
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