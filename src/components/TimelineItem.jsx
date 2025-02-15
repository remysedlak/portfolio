import React from 'react';

function TimelineItem({ year, title, duration, details }) {
    return (
        <li className="mb-10 ml-4 relative px-10">
            <div className="absolute w-3 h-3 border-black rounded-full mt-1.5 -left-1.5 border border-black dark:border-white"></div>
            <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                <span className="inline-block px-2 py-1 font-semibold text-white bg-black rounded-md">
                    {year}
                </span>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                    {title}
                </h3>
                <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                    {duration}
                </div>
            </div>
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
                {details}
            </p>
        </li>
    );
}

export default TimelineItem;