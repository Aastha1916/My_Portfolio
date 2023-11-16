import React from 'react'
import {FaGithub} from 'react-icons/fa';
import CollegeVerification from '../assets/Projects/CollegeVerification.png';
import WebScrapper from '../assets/Projects/WebScrapper.png';
import FaceMaskDetector from '../assets/Projects/FaceMaskDetector.png';
export const Projects = () => {
    const projects = [
        {
            id: 1,
            src: CollegeVerification,
            title: "College Verification Portal",
            description: "Our project serves as a platform empowering users to verify a college's accreditation status with the University Grants Commission (UGC).",
            href: "https://github.com/Aastha1916/SIH-2022"

        },
        {
            id: 2,
            src: WebScrapper,
            title: "Web Scrapper Bot",
            description: "Developed during my third year of graduation, this project is a fundamental web scraping program.It extracts data from Amazon's website and saves it in a CSV file.",
            href:"https://github.com/Aastha1916/WebScrapperBot"

        },
        {
            id: 3,
            src: FaceMaskDetector,
            title:"Face Mask Detector",
            description:"Created during my first year of BTech, this Python project delves into Computer Vision. It centers on face detection for mask presence, a vital need stemming from the COVID-19 pandemic.",
            href:"https://github.com/Aastha1916/Face_Detection_OpenCv"

        }
    ]
    return (
        <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-10 mx-auto flex flex-col justify-center h-full'>
                <div >
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>Check out some of my work right here :</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:px-0'>
                {
                    projects.map(({ id, src,href ,title,description}) => (
                            <div key={id}  className='-mx-2 shadow-md shadow-gray-600 rounded-lg w-[65%] sm:w-auto '>
                                <img src={src} alt="" className='rounded-md hover:scale-105 hover:duration-300'></img>
                                <div className='flex flex-col items-center justify-center px-4'>
                                    <div className='sm:h-60 md:h-64'>
                                    <h1 className=' py-4 font-bold text-xl md:h-20'>{title}</h1>
                                    <p className='text-justify'>{description}</p>
                                    </div>
                                <a href={href} className='flex px-32 py-3 m-4 hover:scale-105  justify-around items-center w-full text-white text-xl lg:px-16 md:px-8 sm:px-14 hover:bg-slate-500 hover:rounded-xl hover:duration-500 ' target='_blank' rel="noreferrer">
                                Code <FaGithub size={30}></FaGithub>
                                </a> 
                                    {/* <button className='w-1/2 px-6 py-3 m-4 duartion-200 hover:scale-105'>Code</button> */}
                                </div>
                            </div>
                        
                    ))
                }
                </div>
            </div>
        </div>

    )
}
export default Projects;
