import React, { useState } from 'react';
import Title from './Title';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Name is required';
        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!form.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.name]: true });
        setErrors(validate());
    };

    const handleSubmit = (e) => {
        const validationErrors = validate();
        setErrors(validationErrors);
        setTouched({ name: true, email: true, message: true });
        if (Object.keys(validationErrors).length > 0) {
            e.preventDefault();
        }
    };

    return (
        <div className='flex flex-col mb-5 mx-4'>
            <div className='flex flex-col justify-center items-center relative'>
                <form
                    action="https://getform.io/f/awnqnymb"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12 z-50"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <Title>Contact </Title>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`p-2 bg-gray-100 dark:bg-gray-800 bg-opacity-100 dark:text-gray-300 border border-black dark:border-gray-400 -md focus:outline-none placeholder-gray-500 ${errors.name && touched.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && touched.name && (
                        <span className="text-red-500 text-sm mb-1">{errors.name}</span>
                    )}
                    <input
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`my-2 p-2 bg-gray-100 dark:bg-gray-800 bg-opacity-100 bg-transparent dark:text-gray-300 border border-black dark:border-gray-400 -md focus:outline-none placeholder-gray-500 ${errors.email && touched.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && touched.email && (
                        <span className="text-red-500 text-sm mb-1">{errors.email}</span>
                    )}
                    <textarea
                        name="message"
                        placeholder="Message"
                        cols="30"
                        rows="10"
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`mb-4 bg-gray-100 dark:bg-gray-800 bg-opacity-100 p-2 bg-transparent border -md focus:outline-none dark:text-gray-300 border-black dark:border-gray-400 placeholder-gray-500 ${errors.message && touched.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && touched.message && (
                        <span className="text-red-500 text-sm mb-1">{errors.message}</span>
                    )}
                    <button
                        type="submit"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium text-black -lg 
                        bg-blue-200 hover:bg-blue-300 dark:bg-gray-800 bg-opacity-100 border dark:text-gray-300 dark:hover:bg-opacity-30 dark:hover:bg-gray-700 border-black dark:border-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;