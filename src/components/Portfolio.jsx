import React from 'react'
import About_Me_old from '../assets/portfolio/About_Me_old.jpg';
import homepageimage from '../assets/portfolio/homepageimage.svg';
import one from '../assets/portfolio/one.svg';
import two from '../assets/portfolio/two.svg';
import three from '../assets/portfolio/three.svg';
import four from '../assets/portfolio/four.svg';
import five from '../assets/portfolio/five.svg';
import six from '../assets/portfolio/six.svg';

export const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: About_Me_old

        },
        {
            id: 2,
            src: homepageimage

        },
        {
            id: 3,
            src: one

        },
        {
            id: 4,
            src: two

        },
        {
            id: 5,
            src: three

        },
        {
            id: 6,
            src: four

        },
        {
            id: 7,
            src: five

        },
        {
            id: 8,
            src: six

        }
    ]
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-10 mx-auto flex flex-col justify-center h-full'>
                <div >
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:px-0'>
                {
                    portfolios.map(({ id, src }) => (
                            <div key={id}  className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'></img>
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duartion-200 hover:scale-105'>Demo</button>
                                    <button className='w-1/2 px-6 py-3 m-4 duartion-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        
                    ))
                }
                </div>
            </div>
        </div>

    )
}
export default Portfolio;
