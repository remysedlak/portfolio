import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';
function Portfolio() {
    return (
        <>
        <div className="">
            <div className="flex items-center justify-center flex-col text-center px-4">
            <Title>Projects</Title>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mx-8">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    {portfolio.map((project, index) => (
                        <PortfolioItem 
                            key={index} // Add a unique key prop
                            imgUrl={project.imgUrl} 
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                            desc={project.desc}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default Portfolio;