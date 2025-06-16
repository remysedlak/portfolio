import React, { useState, useEffect } from 'react';
import github from '/assets/github-mark.svg';

const NavBar = ({ sideBar, toggleDarkMode, isDarkMode }) => {
    const [activeSection, setActiveSection] = useState('intro'); // Default to 'intro'
    
    useEffect(() => {
        const sections = document.querySelectorAll('div[id]');
        let hasScrolled = false; // Track if the user has scrolled

        const observer = new IntersectionObserver(
            (entries) => {
                if (!hasScrolled) return; // Skip updates until the user interacts
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id); // Update active section
                    }
                });
            },
            { threshold: 0.2 } // Adjust threshold as needed
        );

        sections.forEach((section) => observer.observe(section));

        const handleScroll = () => {
            hasScrolled = true; // Mark as scrolled on first interaction
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="justify-center items-center text-center text-black hidden md:block bg-gray-300 dark:bg-gray-700  fixed top-0 left-0 w-40 p-4  mx-auto my-auto h-full flex flex-col justify-center font-garamond border-r-2 border-gray-500  dark:border-black transition-colors duration-100 ease-in-out">
            <div
            style={{ backgroundImage: `url(/assets/vertical-cloth.png)`}}
            className="absolute inset-0 bg-repeat opacity-20 transition-opacity duration-500 ease-in-out transition-all duration-100 mix-blend-multiply pointer-events-none z-0"
          />
            
            
            <div className="justify-bottom position-bottom flex flex-col mt-16">
                
                {/* <div className="text-lg xl:text-xl 2xl:text-xl 3xl-text-xl text-black  dark:text-gray-200 font-semibold">Remy Sedlak</div> */}
                <div className="flex flex-col text-gray-700 text:md  xl:text-xl 2xl:text-xl">
                    <button
                        onClick={() =>
                            window.open('https://github.com/remysedlak', '_blank')
                        }
                        className=" flex flex-row items-center justify-center hover:text-blue-600 hover:underline text-black dark:text-gray-300 dark:hover:text-blue-500"
                    >
                        <p >GitHub</p>
                        {/*  <img src={github} className="w-5 h-5"></img> */}
                    </button>
                    <button
                        onClick={() =>
                            window.open('https://www.linkedin.com/in/remysedlak/', '_blank')
                        }
                        className="hover:text-blue-600 hover:underline  text-black dark:text-gray-300 dark:hover:text-blue-500"
                    >
                        LinkedIn
                    </button>
                    <a href="mailto:remysedlak@gmail.com" className="hover:text-blue-600 hover:underline text-black dark:text-gray-300 dark:hover:text-blue-500">Email</a>
                    <button
                        onClick={() =>
                            window.open(
                                'https://drive.google.com/file/d/1-gW3kevUAv6ImxSWIZgw-VO9A38-KFCk/view',
                                '_blank'
                            )
                        }
                        className="hover:text-blue-600 hover:underline  text-black dark:text-gray-300 dark:hover:text-blue-500"
                    >
                        Resume
                    </button>
                </div>
            </div>
            <div className={`hidden md:block mt-8 md:mt-4 lg:mt-12 2xl:mt-24 mx-auto text-center items-center justify-center${sideBar ? '' : 'ml-48'}`}>
            <button onClick={toggleDarkMode}>
                <img
                    src={isDarkMode ? `./assets/sun.svg` : `./assets/moon.svg`}
                    alt="Light Mode"
                    className={" w-10 h-10 dark:w-13 stroke-2 dark:h-13 text-black text-center opacity-70 hover:opacity-100 "}
                />
            </button>
          </div>
            <div className="flex flex-col md:space-y-1 lg:space-y-2 justify-top h-1/3 text-md md:text-md lg:text-xl 2xl:text-2xl 2xl:mt-24 mt-4 md:mt-4 lg:mt-12">
                <button
                    onClick={() => scrollToSection('intro')}
                    className={`text-left ${
                        activeSection === 'intro' ? 'font-semibold dark:text-gray-200 text-center' : ' text-black  text-center dark:text-gray-200 '
                    } hover:text-gray-500 dark:hover:text-gray-400 `}
                >
                    Intro
                </button>
                <button
                    onClick={() => scrollToSection('portfolio')}
                    className={`text-left ${
                        activeSection === 'portfolio' ? 'font-semibold dark:text-gray-200 text-center' : ' text-black text-center  dark:text-gray-200 '
                    } hover:text-gray-500 dark:hover:text-gray-400 `}
                >
                    Portfolio
                </button>
                <button
                    onClick={() => scrollToSection('timeline')}
                    className={`text-left ${
                        activeSection === 'timeline' ? 'font-semibold dark:text-gray-200 text-center' : ' text-black text-center   dark:text-gray-200 '
                    } hover:text-gray-500 dark:hover:text-gray-400 `}
                >
                    Timeline
                </button>
                <button
                    onClick={() => scrollToSection('contact')}
                    className={`text-left ${
                        activeSection === 'contact' ? 'font-semibold dark:text-gray-200 text-center' : ' text-black text-center  dark:text-gray-200 '
                    } hover:text-gray-500 dark:hover:text-gray-400 `}
                >
                    Contact
                </button>
            </div>
        </nav>
    );
};

export default NavBar;