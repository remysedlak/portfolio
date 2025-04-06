import React, { useState, useEffect } from 'react';

const NavBar = () => {
    const [activeSection, setActiveSection] = useState(''); // Default to 'intro'

    useEffect(() => {
        const sections = document.querySelectorAll('div[id]');
        let hasScrolled = false; // Track if the user has scrolled

        const observer = new IntersectionObserver(
            (entries) => {
                if (!hasScrolled) return; // Skip updates until the user interacts
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        
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
        <nav className="hidden md:block bg-gray-200 dark:bg-gray-700 fixed top-0 left-0 w-48 p-4 pl-8 pt-8 mx-auto my-auto h-full flex flex-col justify-center font-garamond border-r-2 border-gray-300 dark:border-black">
            <img
                src="/assets/remysedlak_image.jpg"
                alt="Remy Sedlak"
                className="h-32 w-32 rounded-lg border-2 border-black"
            />
            <div className="justify-bottom position-bottom flex flex-col mt-2">
                <div className="text-lg xl:text-xl 2xl:text-2xl 3xl-text-xl text-black dark:text-gray-300 font-semibold">Remy Sedlak</div>
                <div className="flex flex-col text-gray-700 text:lg xl:text-xl 2xl:text-xl dark:text-gray-300 ">
                    <button
                        onClick={() =>
                            window.open('https://github.com/remysedlak', '_blank')
                        }
                        className="hover:text-blue-600 hover:underline text-left"
                    >
                        GitHub
                    </button>
                    <button
                        onClick={() =>
                            window.open('https://www.linkedin.com/in/remysedlak/', '_blank')
                        }
                        className="hover:text-blue-600 hover:underline text-left"
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
                        className="hover:text-blue-600 hover:underline text-left"
                    >
                        Resume
                    </button>
                </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-1 lg:space-y-4 justify-top h-1/3 text-left text-md md:text-lg lg:text-xl 2xl:text-2xl 2xl:mt-24 mt-8 md:mt-8 lg:mt-16">
                <button
                    onClick={() => scrollToSection('intro')}
                    className={`text-left ${
                        activeSection === 'intro' ? 'text-blue-700' : 'text-black dark:text-gray-300 '
                    } hover:text-gray-500 dark:hover:text-gray-400 `}
                >
                    Intro
                </button>
                <button
                    onClick={() => scrollToSection('portfolio')}
                    className={`text-left ${
                        activeSection === 'portfolio' ? 'text-blue-700' : 'text-black dark:text-gray-300 '
                    } hover:text-gray-500 dark:hover:text-gray-400 `}
                >
                    Portfolio
                </button>
                <button
                    onClick={() => scrollToSection('timeline')}
                    className={`text-left ${
                        activeSection === 'timeline' ? 'text-blue-700' : 'text-black dark:text-gray-300 '
                    } hover:text-gray-500 dark:hover:text-gray-400 `}
                >
                    Timeline
                </button>
                <button
                    onClick={() => scrollToSection('contact')}
                    className={`text-left ${
                        activeSection === 'contact' ? 'text-blue-700' : 'text-black dark:text-gray-300 '
                    } hover:text-gray-500 dark:hover:text-gray-400 `}
                >
                    Contact
                </button>
            </div>
        </nav>
    );
};

export default NavBar;