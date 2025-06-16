import React from 'react';
import Title from './Title';
function Contact(){
    return(
        <div className='flex flex-col mb-5 mx-4'>
            <div className='flex flex-col justify-center items-center relative'>
            
                <form
                    action="https://getform.io/f/awnqnymb"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12 z-50"
                    >
                        <Title>Contact </Title>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="p-2 bg-gray-100 dark:bg-gray-800 bg-opacity-80 dark:text-gray-300 border-2 border-black  dark:border-gray-400 -md focus:outline-none placeholder-gray-500 "
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email Address"
                            className="my-2 p-2 bg-gray-100 dark:bg-gray-800 bg-opacity-80 bg-transparent dark:text-gray-300 border-2 border-black dark:border-gray-400   -md focus:outline-none placeholder-gray-500 "
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            cols="30"
                            rows="10"
                            className="mb-4 bg-gray-100 dark:bg-gray-800 bg-opacity-80 p-2 bg-transparent border-2 -md focus:outline-none dark:text-gray-300 border-black dark:border-gray-400  placeholder-gray-500 "
                            >
                        </textarea>
                        <button type="submit" className="text-center inline-block  px-8 py-3 w-max text-base font-medium text-black -lg 
                        bg-blue-200 hover:bg-blue-300 dark:bg-gray-800 bg-opacity-80 border-2 dark:text-gray-300 dark:hover:bg-opacity-30 dark:hover:bg-gray-700 border-black dark:border-gray-400  focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
                            Send message
                        </button>
                </form>
            </div >
        </div>
    )
}
export default Contact;