import React from 'react';

function PortfolioItem({ imgUrl, title, stack, link, desc }) {
    return (
        <div className="relative group border-2 rounded-lg overflow-hidden border-black">
            <div className="flex flex-row items-center justify-between top-0 left-0 w-full bg-gray-100 dark:bg-gray-300 bg-opacity-100 text-black border-b-2 border-black text-left py-1">
                <div className="flex items-center gap-x-2 pl-4">
                    <div className="h-3 w-3 bg-red-500 rounded-full border border-black"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full border border-black"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full border border-black"></div>
                </div>
                <h3 className="text-lg font-semibold pr-9">{title}</h3>
                <div className="w-6"></div> {/* Placeholder to balance the layout */}
            </div>
            <img
                src={imgUrl}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gray-200 bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-170 flex flex-col items-center text-gray-900 text-center">
                <div className="flex flex-col h-full w-full px-2">
                    <div className="items-center py-1">
                        <h3 className="text-xl font-semibold underline">
                            <a href={link} className="mx-auto text-blue-700 hover:text-blue-500">
                                {title}
                            </a>
                        </h3>
                    </div>
                    <div className="flex-grow">
                        <p className={(window.innerWidth < 500 ? "text-md " : "text-md") + "xs:text-base sm:text-lg md:text-lg lg:text-lg text-gray-900 font-medium justify-center items-center md:mt-2"}>
                            {desc}
                        </p>
                    </div>
                    <div className="md:mt-auto flex flex-row gap-2 items-center justify-center pb-2">
                        {Array.isArray(stack) ? stack.map((item, index) => (
                            <span
                                key={index}
                                className="font-medium text-gray-800 text-sm md:text-md lg:text-md border rounded-lg p-1 border-black"
                                style={{
                                    backgroundColor: `${item.color}4D` // Adding 30% opacity to the color
                                }}
                            >
                                {item.name.trim()}
                            </span>
                        )) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioItem;
