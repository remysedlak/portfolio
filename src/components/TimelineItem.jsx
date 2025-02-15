import React from 'react';

function TimelineItem({ year, title, duration, details }) {
   return (
      <ol className="flex flex-col md:flex-row relative border-l border-gray-200 dark:border-stone-700">
         <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
            <div className="absolute top-0 left-0 h-full border-l-2 border-gray-200 dark:border-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-gray dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                  {year}
               </span>
               <h3 className="text-lg font-semibold text-gray-900 dark:text-gray">
                  {title}
               </h3>
               <div className="my-1 text-sm font-normal leading-none text-gray-400 dark:text-stone-500">
                  {duration}
               </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
               {details}
            </p>
         </li>
      </ol>
   )
}

export default TimelineItem;