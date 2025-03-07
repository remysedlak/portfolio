import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center 
                flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-3 
                    md:mb-6 font-bold">Remy Sedlak</h1>
            <p className="text-base md:text-xl mb-3 font-medium">
            Innovating at the crossroads of psychology and technology 
            <br/>to create impactful digital experiences.
            </p>
            <p className="text-base md:text-lg mb-3 max-w-xl">
            Currently pursuing a B.S. in Computer Science and 
            Psychology at the University of Pittsburgh, I 
            specialize in AI, data analysis, and UX design. 
            I’ve developed applications that enhance mental health 
            journaling, analyzed deepfake detection models, and 
            engineered full-stack solutions that improve user 
            engagement.
            </p>
        </div>
    );
}

export default Intro;