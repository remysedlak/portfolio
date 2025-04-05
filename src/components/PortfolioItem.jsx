import React from 'react';

function PortfolioItem({ imgUrl, title, stack, link }) {
    return (
        <div className="relative group border-2 rounded-lg overflow-hidden border-black">
             <div className="flex flex-row items-center justify-between absolute top-0 left-0 w-full bg-gray-100 bg-opacity-100 text-black border-b-2 border-black text-left pl-5 py-2">
                <div className="flex items-center gap-x-2">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>  
                </div>
                
                <h3 className="text-md mx-auto pr-5">{title}</h3>
            </div>
            <img
                src={imgUrl}
                alt={title}
                className="w-full h-40 object-cover"
            />
           
            <div className="absolute inset-0 bg-gray-300 bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-gray-900 p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {Array.isArray(stack) ? stack.map((item, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm border-2"
                        >
                            {item.trim()}
                        </span>
                    )) : null}
                </div>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400"
                >
                    GitHub Repo
                </a>
            </div>
        </div>
    );
}

export default PortfolioItem;
