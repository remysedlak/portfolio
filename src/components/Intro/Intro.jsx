import React, { useState, useEffect } from 'react';
import Stack from './Stack';

function Intro(isDarkMode) {
    const [text, setText] = useState(" ");
    const [showCursor, setShowCursor] = useState(true);
    const [left, setLeft] = useState(false);
    const fullText = "Heello, I am Remy Sedlak!";
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
        <div className="relative flex flex-col justify-center text-center text-black dark:text-gray-300  pt-8 transition-all duration-400">
            <h1 className="md:hidden font-semibold text-5xl mt-8 md:mt-0">Remy Sedlak</h1>
            <h1 className="md:hidden font-medium text-xl mt-2">Pittsburgh, PA</h1>
            <h1 className="md:hidden font-medium text-xl">remysedlak@gmail.com</h1>
            {/* Typing out name for big displays */}
            <h1 className="hidden md:inline text-3xl  xs:text-4xl sm:text-4xl md:text-5xl lg:6xl md:my-6 font-base items-center flex flex-row justify-center">
                <div
                    className={`flex items-center font-semibold justify-center transition-all duration-500 ${
                        left ? 'ml-8' : 'ml-8'
                    }`}
                >
                    {text}
                    <span
                    className={`text-blue-500 mb-2 transition-opacity duration-500 ${
                        showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    |
                </span>
                </div>
                
            </h1>
            {/* Section with picture and text */}
            <div className="text-center flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
                <div className="justify-around w-full rounded-md p-4 ">
                    
                    <h4 className="shadow-lg border-2 border-gray-500 dark:bg-gray-800 bg-gray-100 bg-opacity-80  text-base text-lg md:text-2xl lg:text-2xl mt-2 max-w-lg md:max-w-3xl mx-auto text-left md:text-left p-2 ">
                        <div className="md:flex-row gap-x-8 items-center justify-between"> 
                            <img
                                src="/assets/remysedlak_image.jpg"
                                alt="Remy Sedlak"
                                className="float-right ml-4 mb-4 md:mb-0 rounded-lg  z-100 block h-40 w-40 md:h-48 md:w-48 md:mr-4 mb-auto shadow-lg border-2  border-gray-500 dark:by-1er-gray-200"
                            />             
                            <p className="md:mt-0 ">
                                <b>Computer Science</b> and <b>Interactive Design</b> student at the <b>University of Pittsburgh</b>, with a passion for <b>software development</b>, <b>audio processing</b>, and <b>human-computer interaction</b>.
                            </p>  
                        </div>
                    </h4>
                    <Stack></Stack>
                </div>
                
            </div>
            
            <div className="mt-16  md:mt-16"></div>
            
        </div>
    );
}

export default Intro;
