import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link }) {
    return (
        <div className="border-2 border-stone-900 rounded-md overflow-hidden cursor-pointer">
            <a href={link} target="_blank" rel="noopener noreferrer">
                        
                    
            <img 
                src={imgUrl} 
                alt={title}
                className="w-full h-36 md:h-38 object-cover"
            />
            </a>
            
            <div className="w-full p-4">
                <h3 className="text-lg text-center md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center 
                    justify-center text-xs md:text-sm">
                    {stack.map((item, index) => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md"
                            key={index}>
                            {item}
                        </span>
                    ))}
                </p>
                <div className="flex justify-center mt-4">
                </div>
            </div>
        </div>
    );
}

export default PortfolioItem;