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
        <nav className="hidden sm:block bg-gray-300 shadow-lg fixed top-0 left-0 w-40 p-4 text-left shadow-lg h-full flex flex-col justify-top font-garamond">
            <img
                src="/assets/remysedlak_image.jpg"
                alt="Remy Sedlak"
                className="h-32 w-32 rounded-lg"
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
                            window.open('https://www.linkedin.com/in/remysedlak/', '_blank')
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
            <div className="flex flex-col space-y-3 lg:space-y-6 justify-center h-1/3 text-left mt-10 lg:mt-20">
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
    );
};

export default NavBar;