import React from 'react';

function Title({ children, id }) {
   return (
      <h1 id={id && id}
         className="text-3xl font-semibold 
         underline-offset-8 decoration-4 my-5
         text-gray-900 text-center">
         {children}
      </h1>
   )
}

export default Title;