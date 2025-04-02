import React from 'react';

function TimelineItem({ year, title, duration, details }) {
   return (
      <ol className="flex flex-col md:flex-row relative border-l border-black">
         <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-black" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-1 py-1 font-semibold text-gray rounded-md">
                  {year}
               </span>
               <h3 className="text-lg font-semibold text-gray-900">
                  {title}
               </h3>
               <div className="my-1 text-sm font-normal leading-none text-gray-400">
                  {duration}
               </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-500">
               {details}
            </p>
         </li>
      </ol>
   )
}

export default TimelineItem;