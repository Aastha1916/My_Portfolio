import React from 'react'

export const Contact = () => {
  return (
    <div name="contact" className='w-full md:h-screen bg-gradient-to-b  from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-10 mx-auto flex flex-col justify-center h-full'>
            <div>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='text-md py-8'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/ede286cd-912f-4192-bed5-021b47a6ad59' method="post" className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outine-none'></input>
                    <input type='text' name="email" placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outine-none'></input>
                    <textarea name='message' rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outine-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk!</button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default Contact;