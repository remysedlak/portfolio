import React from 'react';

function PortfolioItem({ imgUrl, title, stack, link }) {
    return (
        <div className="relative group border-2 rounded-lg overflow-hidden border-black">
            <img
                src={imgUrl}
                alt={title}
                className="w-full h-40 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gray-100 bg-opacity-100 text-black border-t-2 border-black text-center py-2">
                <h3 className="text-md">{title}</h3>
            </div>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm mb-4">{stack.join(', ')}</p>
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
