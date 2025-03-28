import React from 'react';

function Title({ children, id }) {
   return (
      <h1 id={id && id}
         className="text-2xl font-bold 
         underline-offset-8 decoration-4 my-5
         text-gray-900 dark:text-gray-900">
         {children}
      </h1>
   )
}

export default Title;