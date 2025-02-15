import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center 
                flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-3 
                    md:mb-6 font-bold">Remy Sedlak</h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                A passionate developer with a love for creating amazing web experiences.
            </p>
            <p className="text-base md:text-lg mb-3 max-w-xl">
                Currently pursuing a degree in Computer Science at XYZ University. 
                I have a strong interest in web development, particularly in building 
                responsive and interactive user interfaces. My coursework has provided 
                me with a solid foundation in programming principles, algorithms, and 
                software engineering practices.
            </p>
        </div>
    );
}

export default Intro;