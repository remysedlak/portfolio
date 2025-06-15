import React, { useState, useEffect } from 'react';
import Stack from './Stack';

function Intro(isDarkMode) {
    const [text, setText] = useState(" ");
    const [showCursor, setShowCursor] = useState(true);
    const [left, setLeft] = useState(false);
    const fullText = "Heello, I am Remy!";
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
        <div className="relative flex  justify-center flex-col text-center text-black dark:text-gray-200 pt-8 transition-all duration-400">
            
            <h1 className="text-2xl  xs:text-4xl sm:text-4xl md:text-5xl lg:6xl md:my-6 font-base items-center flex flex-row justify-center">
                <div
                    className={`flex items-center font-semibold justify-center transition-all duration-500 ${
                        left ? 'ml-8' : 'ml-8'
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
            <div className="text-center flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
                <div className="md:flex md:flex-col justify-around w-full rounded-md p-4 text-center ">
                    
                    <h4 className=" text-base text-md md:text-2xl lg:text-2xl mt-2 max-w-lg md:max-w-3xl mx-auto text-center md:text-left  rounded-lg p-6 ">
                        <div className="flex flex-col md:flex-row gap-x-5 items-center justify-between"> <img
                src="/assets/remysedlak_image.jpg"
                alt="Remy Sedlak"
                className=" z-100 block h-48 w-48 md:h-40 md:w-40 md:mr-4 mb-auto shadow-lg border border-gray-500 dark:border-gray-100 dark:by-1er-gray-200"
            />             <div className="flex flex-col">
                        <p className="md:mt-0 mt-8">
                        <b>Computer Science</b> and <b>Interactive Design</b> undergraduate at the <b>University of Pittsburgh</b>, with a passion for <b>software development</b> and <b>human-computer interaction</b>.
                        </p>  
                        
                        </div>
                    </div>
                    {/* <p className="inline sm:block text-base text-lg md:text-2xl lg:text-2xl max-w-3xl text-left mt-1 md:mt-8"> I specialize in Data Engineering, AI, and User Design.</p> */}
                    </h4>
                    
                    
                
                    <Stack></Stack>
                </div>
                
            </div>
            
            <div className="mt-16  md:mt-16"></div>
            
        </div>
    );
}

export default Intro;
