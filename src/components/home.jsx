import React from 'react'
import My_image from '../assets/my_image1.png';
import {HiArrowNarrowRight} from "react-icons/hi"

const home = () => {
  return (
    <div name="home" className=' pt-20 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8  md:flex-row'>
        <div className='flex flex-col justify-center h-full ml-auto'>
          <h2 className='text-4xl sm:text-6xl font-bold text-white'>Hi, I am Aastha Agarwal.</h2>
          <p className='text-gray-500 py-4 max-w-md'>Aspiring Software Engineer Seeking To Craft Innovative Solutions . . .</p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor cursor-pointer '>
              <a href='/Aastha_agarwal_resume.pdf' download={true} >Portfolio</a>
              <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight size={20} className='ml-1'/></span>
            </button>
          </div>
        </div>
        <div>
          <img src={My_image} alt="my profile" className=' rounded-full h-auto mx-auto my-auto w-3/5 md:w-3/5 sm:w-1/3'></img>
        </div>
      </div> 
    </div>
  )
}

export default home;