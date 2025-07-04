import React from 'react';

function TimelineItem({ year, title, duration, details }) {
   const modifyLinks = (htmlString) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, 'text/html');
      doc.querySelectorAll('a').forEach((a) => {
         a.classList.add("text-blue-800");
         a.classList.add("hover:text-blue-500");
         a.classList.add("dark:text-blue-500");
         a.classList.add("dark:hover:text-blue-400");
         a.classList.add("underline");
      });
      return doc.body.innerHTML;
   };

   return (
      <ol className="flex flex-col md:flex-row relative border-l border-black dark:border-gray-600">
         {/* <li className="mb-10 ml-4 bg-gray-300 p-2 rounded-lg shadow-lg"> */}
         <li className="mb-10 ml-4 bg-gray-100 dark:bg-gray-800  bg-opacity-100 p-2 shadow-lg border dark:border-gray-600 border-black">
            <div  
            className=" absolute w-3 h-3 bg-gray-200 dark:bg-gray-800  rounded-full mt-1.5 -left-1.5 border border-black dark:border-gray-300" />
            <div className="border-b border-gray-500 flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm ">
               <span className=" inline-block px-1 py-1 font-semibold text-gray dark:text-white rounded-md">
                  {year}
               </span>
               <p className="text-xl font-semibold text-gray-900 dark:text-gray-300">
                  {title}
               </p>
               <p className="my-1 text-sm font-normal leading-none text-gray-500">
                  {duration}
               </p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: modifyLinks(details) }} />
         </li>
      </ol>
   );
}

export default TimelineItem;