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
            Currently studying Computer Science and Psychology at the University of Pittsburgh. 
            I'm passionate about problem-solving at the intersection of technology and human behavior, 
            with a strong focus on AI, data analysis, and user experience design. 
            I enjoy tackling complex challenges and building innovative applications that improve people's lives.
            </p>
        </div>
    );
}

export default Intro;