import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-10 pb-6">
            <h1 className="block lg:hidden text-4xl md:text-7xl mb-3 md:mb-6 font-bold">Remy Sedlak</h1>
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
                <img src="/assets/me.jpg" alt="Remy Sedlak" className="w-48 h-48 rounded-full mr-10 ml-10" />
                <div className="flex flex-col justify-around pr-5 w-full ml-10">
                    <p className="text-base md:text-xl mb-3 font-medium text-center md:text-left">
                        Innovating at the crossroads of psychology and technology 
                        <br/>to create impactful digital experiences.
                    </p>
                    <p className="text-base md:text-lg mb-3 max-w-xl text-center md:text-left">
                        Currently pursuing a B.S. in Computer Science and 
                        Psychology at the University of Pittsburgh, I 
                        specialize in AI, data analysis, and UX design. 
                        I’ve developed applications that enhance mental health 
                        journaling, analyzed deepfake detection models, and 
                        engineered full-stack solutions that improve user 
                        engagement.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Intro;