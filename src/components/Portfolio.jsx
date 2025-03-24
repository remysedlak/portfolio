import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';
function Portfolio() {
    return (
        <>
        <div className="flex items-center justify-center flex-col text-center">
        <Title>Projects</Title>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map((project, index) => (
                    <PortfolioItem 
                        key={index} // Add a unique key prop
                        imgUrl={project.imgUrl} 
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
        </>
    );
}

export default Portfolio;