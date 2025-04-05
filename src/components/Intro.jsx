import React, { useState, useEffect } from 'react';

import Title from './Title';


    function Intro() {
        const [text, setText] = useState("");
        const fullText = "Heello, I'm Remy!";
        const typingSpeed = 100; // Adjust typing speed in ms

        useEffect(() => {
            let index = 0;
            const interval = setInterval(() => {
                setText((prev) => prev + fullText[index]);
                index++;
                if (index === fullText.length-1) {
                    clearInterval(interval);
                }
            }, typingSpeed);

            return () => clearInterval(interval);
        }, []);

        return (
            <div className="flex items-center justify-center flex-col text-center lg:py-10">
                {/* <h1 className="block lg:hidden text-5xl md:text-7xl my-3 md:my-6 font-semibold">Remy Sedlak</h1> */}
                <h1 className="text-4xl md:text-5xl lg:6xl my-3 md:my-6 font-semibold">{text}</h1>
                <img
            src="/assets/remysedlak_image.jpg"
            alt="Remy Sedlak"
            className="sm:hidden block  h-48 w-48 mt-4 rounded-full"
          />
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">

                    <div className="flex flex-col justify-around w-full rounded-md p-4">
                        <p className="text-base md:text-lg mb-3 font-medium text-center md:text-left max-w-xl ">
                        Currently pursuing a B.S. in Computer Science and 
                            Psychology at the University of Pittsburgh.<br/> I 
                            specialize in AI, data analysis, and UX design.
                        </p>
                        <p className="text-base md:text-ml mb-1 max-w-xl text-center md:text-left">
                        Innovating at the crossroads of psychology and technology 
                        to create impactful digital experiences.
                        <br/>
                            I’ve developed applications that enhance mental health 
                            journaling, analyzed deepfake detection models, and 
                            engineered full-stack solutions that improve user 
                            engagement.
                        </p>
                    </div>
                    
                </div>
                <div className="sm:hidden block flex flex-row space-x-6 py-8">
                        <a
                            href="https://www.linkedin.com/in/your-linkedin-profile/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 0-2.155 1.459-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.559 2.841-1.559 3.037 0 3.6 2.001 3.6 4.604v5.588z" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/your-github-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573 4.77-1.587 8.205-6.084 8.205-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href="mailto:your-email@example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 12.713l-11.99-7.713h23.98l-11.99 7.713zm11.99-9.713h-23.98c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h23.98c1.105 0 2-.895 2-2v-14c0-1.105-.895-2-2-2zm-11.99 10.287l-11.99-7.287v12h23.98v-12l-11.99 7.287z" />
                            </svg>
                        </a>

                    </div>
            </div>
        );
    }




export default Intro;