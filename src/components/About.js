import React from 'react'
// import '../App.scss'
import graduation from '../assets/img/graduation.jpg';

const About = () => {
    return (
        <section id='about' className='container-sm pt-[5rem] md:py-10 '>
            <div className='flex flex-col justify-center items-center py-5
             md:py-10'>
                <span className='font-display uppercase text-4xl font-bold pb-4'>about me</span>
                <span className='font-display capitalize	font-light tracking-widest'>why choose me</span>
            </div>
            
            <div className='grid grid-cols-12 gap-x-6 gap-y-6 shadow-[0px_0px_44px_-9px_rgba(0,0,0,0.3)]'>
                <img src={graduation} alt='graduation-img' className='object-cover col-span-12 min-h-[400px] w-[100%] 
                    md:h-[100%] md:col-span-6' />
                <div className='col-span-12 p-4 md:p-3 md:col-span-6 lg:col-span-5'>
                    <p className='font-display text-justify tracking-wide capitalize font-light text-md leading-6 '>
                        full stack web developer with background knowledge of MERN stack and redux, along with a knack of building
                        applications with utmost efficiency.strong proffessional with BTECH in computer science willing to be asset for
                        an organization
                    </p>
                    <ul className='list-disc font-display px-4 py-7 text-xl capitalize text-brand'>
                        <li className='py-1'>full stack web development</li>
                        <li className='py-1'>interactive front end as per design </li>
                        <li className='py-1'>react and angular </li>
                        <li className='py-1'>redux for state management</li>
                        <li className='py-1'>building REST API</li>
                        <li className='py-1'>managing database</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About
