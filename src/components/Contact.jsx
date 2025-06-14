import React from 'react';
import Title from './Title';
function Contact(){
    return(
        <div className='flex flex-col mb-5 mx-4'>
            <div className='flex flex-col justify-center items-center relative'>
            <div className="p-4 mb-16">
            <h1 className="block font-medium text-2xl pb-4 dark:text-gray-300 text-gray-800 ">Let's connect!</h1>
            <div className=" block flex flex-row space-x-8 items-center justify-center">
                <a
                    href="https://www.linkedin.com/in/remysedlak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        className="text-blue-500 hover:text-blue-600 transition-colors duration120 font-normal0 max-w-full"
                        viewBox="0 0 24 24"
                        title="LinkedIn"
                    >
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.79v2.34h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.66c0-1.83-.03-4.18-2.54-4.18-2.54 0-2.93 1.98-2.93 4.04V24h-5V8z" />
                    </svg>
                </a>
                <a
                    href="https://github.com/remysedlak"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        className="text-gray-600 hover:text-yellow-500 font-normal dark:text-gray-200 dark:hover:text-gray-500 transition-colors duration-200"
                        viewBox="0 0 24 24"
                        title="GitHub Link"
                    >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.573 4.77-1.587 8.205-6.084 8.205-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
                <a
                    href="mailto:remysedlak@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        className="text-red-500 hover:text-red-600 transition-colors duration120 font-normal0 pt-1"
                        viewBox="0 0 24 24"
                        title="Email"
                    >
                        <path d="M12 12.713l-11.99-7.713h23.98l-11.99 7.713zm11.99-9.713h-23.98c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h23.98c1.105 0 2-.895 2-2v-14c0-1.105-.895-2-2-2zm-11.99 10.287l-11.99-7.287v12h23.98v-12l-11.99 7.287z" />
                    </svg>
                </a>
            </div>
            </div>
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
                            className="p-2 bg-gray-300 dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-40 dark:text-gray-300 border-2 border-black  dark:border-gray-400 rounded-md focus:outline-none placeholder-gray-500 "
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email Address"
                            className="my-2 p-2 bg-gray-300 dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-40 bg-transparent dark:text-gray-300 border-2 border-black dark:border-gray-400   rounded-md focus:outline-none placeholder-gray-500 "
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            cols="30"
                            rows="10"
                            className="mb-4 bg-gray-300 dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-40 p-2 bg-transparent border-2 rounded-md focus:outline-none dark:text-gray-300 border-black dark:border-gray-400  placeholder-gray-500 "
                            >
                        </textarea>
                        <button type="submit" className="text-center inline-block  px-8 py-3 w-max text-base font-medium text-black rounded-lg 
                        bg-gray-300 hover:bg-gray-200 dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-40 border-2 dark:text-gray-300 dark:hover:bg-opacity-30 dark:hover:bg-gray-700 border-black dark:border-gray-400  focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
                            Send message
                        </button>
                </form>
            </div >
        </div>
    )
}
export default Contact;