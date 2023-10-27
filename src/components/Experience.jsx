import React from 'react'
import c from "../assets/Experience/c.svg";
import python from "../assets/Experience/python.svg";
import html from "../assets/Experience/html.svg";
import css from "../assets/Experience/css.svg";
import tailwind_css from "../assets/Experience/tailwind_css.svg";
import sql from "../assets/Experience/sql.svg";
import react from "../assets/Experience/react.svg";
import github from "../assets/Experience/github.svg";

export const Experience = () => {
  const techs = [
    {
      id: 1,
      src: c,
      title: 'C',
      style: 'shadow-blue-500'
    },
    {
      id: 2,
      src: python,
      title: 'Python',
      style: 'shadow-yellow-500'
    },
    {
      id: 3,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 4,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-300'
    },
    {
      id: 5,
      src: tailwind_css,
      title: 'Tailwind',
      style: 'shadow-teal-400'
    },
    {
      id: 6,
      src: sql,
      title: 'Sql',
      style: 'shadow-blue-800'
    },
    {
      id: 7,
      src: react,
      title: 'React',
      style: 'shadow-cyan-300'
    },
    {
      id: 8,
      src: github,
      title: 'Github',
      style: 'shadow-gray-400'
    }
  ]
  return (
    <div name="experience" className=' bg-gradient-to-b from-gray-800 to-black w-full md:h-screen'>
      <div className='max-w-screen-lg p-10 mx-auto flex flex-col justify-center text-white h-full '>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Experience</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0' >
          {
            techs.map(({ id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 h-20 mx-auto'></img>
                <p className='mt-4'>{title}</p>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Experience;