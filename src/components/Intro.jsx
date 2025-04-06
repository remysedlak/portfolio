import React, { useState, useEffect } from 'react';

function Intro() {
    const [text, setText] = useState(" ");
    const [showCursor, setShowCursor] = useState(true);
    const [left, setLeft] = useState(false);
    const fullText = "Heello, I'm Remy!";
    const typingSpeed = 90; // Adjust typing speed in ms

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            setText((prev) => prev + fullText[index]);
            index++;
            if (index === fullText.length -1) {
                clearInterval(typingInterval);
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval);
    }, []);

    useEffect(() => {
        const cursorBlinkInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500); // Cursor blink speed

        const hideCursorTimeout = setTimeout(() => {
            clearInterval(cursorBlinkInterval);
            setShowCursor(false);
            setLeft(true); // Trigger the shift back
        }, 3000); // Hide cursor after 3 seconds

        return () => {
            clearInterval(cursorBlinkInterval);
            clearTimeout(hideCursorTimeout);
        };
    }, []);

    return (
        <div className="flex items-center justify-center flex-col text-center text-black dark:text-gray-200 pt-8 transition-all duration-400">
            <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:6xl md:my-6 font-semibold items-center flex flex-row justify-center">
                <div
                    className={`flex items-center justify-center transition-all duration-500 ${
                        left ? 'pl-4  md:ml-10' : 'ml-15 md:ml-20'
                    }`}
                >
                    {text}
                </div>
                <span
                    className={`h-full text-black dark:text-white mb-2 transition-opacity duration-500 ${
                        showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    |
                </span>
            </h1>
            <img
                src="/assets/remysedlak_image.jpg"
                alt="Remy Sedlak"
                className="md:hidden block h-48 w-48 mt-8 rounded-full border-2 border-black dark:border-gray-100 dark:by-1er-gray-200"
            />
            <div className="text-center flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
                <div className="md:flex md:flex-col justify-around w-full rounded-md p-4 text-center ">
                    <h4 className="text-base text-xl md:text-2xl lg:text-2xl mt-2 max-w-3xl text-center">
                        Innovating at the crossroads of <b>psychology</b> and <b>technology</b> to create <b>impactful</b> digital experiences.
                        <p className="inline sm:block text-base text-lg md:text-2xl lg:text-2xl max-w-3xl text-center mt-1 md:mt-8"> I specialize in <b>AI</b>, <b>data analysis</b>, and <b>UX design</b>.</p>
                    </h4>
                    <div className="flex flex-col h-8 items-center sm:my-4 mb-4 md:my-10 my-8 md:my-16 lg:mt-20 xl:mt-20">
                        <p className="text-2xl font-semibold">My Stack:</p>
                        <div className="text-md lg:text-lg flex flex-wrap sm:flex-row md:flex-row lg:flex-grid justify-center my-4 gap-x-2 gap-y-2 md:gap-x-3 md:gap-y-3 lg:gap-x-4 lg:gap-y-4 w-full md:w-2/3 mx-auto">
                            <span className="border opacity-100 border-black dark:border-gray-100 px-6 py-2 bg-blue-100 dark:bg-blue-800 text-black dark:text-gray-300  font-semibold rounded-full">React</span>
                            <span className="border opacity-100 border-black dark:border-gray-100 px-6 py-2 bg-yellow-100 dark:bg-yellow-800 text-black dark:text-gray-300  font-semibold rounded-full">Vite</span>
                            <span className="border opacity-100 border-black dark:border-gray-100 px-6 py-2 bg-indigo-100 dark:bg-indigo-800 text-black dark:text-gray-300  font-semibold rounded-full">Tailwind</span>
                            <span className="border opacity-100 border-black dark:border-gray-100 px-6 py-2 bg-green-100 dark:bg-green-700 text-black dark:text-gray-300  font-semibold rounded-full">Django</span>
                            <span className="border opacity-100 border-black dark:border-gray-100 px-6 py-2 bg-purple-100 dark:bg-purple-700 text-black dark:text-gray-300  font-semibold rounded-full">Postgres</span>
                            <span className="border opacity-100 border-black dark:border-gray-100 px-6 py-2 bg-red-100 dark:bg-red-700 text-black dark:text-gray-300  font-semibold rounded-full">AWS</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8"></div>
            <div className="md:hidden block flex flex-row space-x-8 py-8 mt-8 items-center justify-center">
                <a
                    href="https://www.linkedin.com/in/remysedlak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        className="text-blue-500 hover:text-blue-600 transition-colors duration120 font-normal0 max-w-full"
                        viewBox="0 0 24 24"
                        title="LinkedIn"
                    >
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.79v2.34h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.66c0-1.83-.03-4.18-2.54-4.18-2.54 0-2.93 1.98-2.93 4.04V24h-5V8z" />
                    </svg>
                </a>
                <a
                    href="https://github.com/remysedlak"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        className="text-gray-600 hover:text-yellow-500 dark1te font-normalxt-gray-200 dark:hover:text-gray-500 transition-colors duration-200"
                        viewBox="0 0 24 24"
                        title="GitHub Link"
                    >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573 4.77-1.587 8.205-6.084 8.205-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
                <a
                    href="mailto:remysedlak@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        className="text-red-500 hover:text-red-600 transition-colors duration120 font-normal0 pt-1"
                        viewBox="0 0 24 24"
                        title="Email"
                    >
                        <path d="M12 12.713l-11.99-7.713h23.98l-11.99 7.713zm11.99-9.713h-23.98c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h23.98c1.105 0 2-.895 2-2v-14c0-1.105-.895-2-2-2zm-11.99 10.287l-11.99-7.287v12h23.98v-12l-11.99 7.287z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default Intro;
