import React from 'react';

function PortfolioItem({ imgUrl, title, stack, link, desc }) {
    return (
        <div className="relative group border-2 rounded-lg overflow-hidden border-black">
            <div className="flex flex-row items-center justify-between absolute top-0 left-0 w-full bg-gray-100 bg-opacity-100 text-black border-b-2 border-black text-left pl-5 py-1">
                <div className="flex items-center gap-x-2">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                </div>

                <h3 className="text-md lg:text-lg mx-auto pr-5 font-semibold">{title}</h3>
            </div>
            <img
                src={imgUrl}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gray-200 bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center text-gray-900 text-center">
                <div className="flex flex-col h-full w-full px-2">
                    <div className="items-center py-1">
                        <h3 className="text-xl font-semibold underline">
                            <a href={link} className="mx-auto text-blue-800 hover:text-blue-700">
                                {title}
                            </a>
                        </h3>
                    </div>
                    <div className="flex-grow">
                        <p className="text-base xs:text-base sm:text-base md:text-md lg:text-base text-gray-900 font-medium justify-center items-center mt-2">
                            {desc}
                        </p>
                    </div>
                    <div className="md:mt-auto flex flex-row gap-2 items-center justify-center pb-2">
                        {Array.isArray(stack) ? stack.map((item, index) => (
                            <span
                                key={index}
                                className="font-medium text-gray-800 text-xs md:text-xs lg:text-sm border rounded-lg bg-gray-100 p-1 border-black"
                            >
                                {item.trim()}
                            </span>
                        )) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioItem;
