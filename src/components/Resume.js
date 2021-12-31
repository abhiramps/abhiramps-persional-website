import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../App.scss'
import ScrollAnimation from 'react-animate-on-scroll';

const Resume = () => {
    const [state] = useState([
        {
            school: 'Apj abdul kalam technological university,india',
            course: 'bachelor of technology , computer science',
            year: '2016-2020'
        },
        {
            school: ' GHSS cherpu,india',
            course: 'higher secondary ,computer science',
            year: '2014-2016'
        },
        {
            school: 'GVHSS cherpu,india',
            course: 'highschool',
            year: '2014-2016'
        }
    ])
    const [Skills] = useState([
        {
            skills: 'Reactjs',
            rating: 4
        },
        {
            skills: 'Angular',
            rating: 3
        },
        {
            skills: 'NodeJs',
            rating: 4
        },
        {
            skills: 'javascript',
            rating: 4
        },
        {
            skills: 'typescript',
            rating: 4
        },
        {
            skills: 'Redux',
            rating: 3
        },
        {
            skills: 'mongoDb',
            rating: 4
        },
        {
            skills: 'tailwind css',
            rating: 4
        },
        {
            skills: 'bootstrap',
            rating: 4
        }

    ])
    const [tabList] = useState([
        {
            listitem: 'education',
            icon: 'fa-user-graduate'
        },
        {
            listitem: 'work history',
            icon: 'fa-history'
        },
        {
            listitem: 'programming skills',
            icon: 'fa-laptop-code'
        },
        {
            listitem: 'projects',
            icon: 'fa-tasks'
        },
        {
            listitem: 'interests',
            icon: 'fa-futbol'
        }
    ])



    return (
        <section id='resume' className='dark:bg-dark1 dark:text-white transition duration-500 '>
            <div className='font-display mx-auto  pt-[5rem] container'>
                <div className='flex flex-col justify-center items-center '>
                    <span className='text-4xl uppercase font-bold pb-4'>Resume</span>
                    <span className='capitalize	font-light tracking-widest'>my normal bio details</span>
                </div>

                <ScrollAnimation animateIn="fadeIn" >
                    <Tabs className='container react-tabs grid grid-cols-12 justify-around sm:px-0 sm:justify-around'>
                        <TabList className='col-span-12 md:col-span-4 w-[100%] shadow-[0px_5px_5px_-3px_rgba(0,0,0,0.3)]  sm:w-auto min-w-[20%] 
                    md:shadow-[4px_0px_4px_-3px_rgba(0,0,0,0.3)] '>
                            {
                                tabList.map(item => (
                                    <Tab className='react-tabs__tab-list py-4 rounded-r-full mr-1 ease-in-out duration-200 lg:py-5'>
                                        <div className='text-md lg:text-lg'>
                                            <i className={`fas ${item.icon} ml-1 sm:ml-2`} ></i>
                                            <span className='pl-1 sm:pl-4'>{item.listitem}</span>
                                        </div>
                                    </Tab>
                                ))
                            }
                        </TabList>
                        <TabPanel className='container col-span-12 md:col-span-8 react-tabs__tab-panel mt-10 ml-2 md:ml-5 md:mt-0'>
                            <ScrollAnimation animateIn="fadeIn" >
                                <div className="panel-content">
                                    <ul className='list-disc'>
                                        {
                                            state.map(item => (
                                                <li className='text-brand'>
                                                    <div className='flex justify-between flex-row p-1 md:my-4'>
                                                        <div className='pb-3'>
                                                            <span className='capitalize font-bold text-md 
                                                    leading-3 sm:text-md md:text-lg lg:text-xl'>
                                                                {item.school}
                                                            </span>
                                                            <p className='text-gray-600 uppercase text-xs font-extralight mt-1 
                                                sm:mt-3 md:text-sm lg:text-md'>
                                                                {item.course}
                                                            </p>
                                                        </div>
                                                        <label className='self-start py-1 text-md px-4 mb-2
                                                rounded-full text-white  bg-brand flex-none
                                                sm:py-2 sm:px-3 md:text-md md:py-3 md:px-4 
                                                lg:text-lg'>
                                                            {item.year}
                                                        </label>
                                                    </div>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </TabPanel>

                        <TabPanel className='container col-span-12 md:col-span-8 react-tabs__tab-panel mt-10 ml-2 md:ml-5 md:mt-0'>
                            <ScrollAnimation animateIn="fadeIn" >
                                <div className="panel-content">
                                    <ul className='list-disc'>
                                        <li className='text-brand'>
                                            <div className='flex flex-row justify-between p-1 md:my-4'>
                                                <div className='pb-3'>
                                                    <span className='capitalize font-bold text-md 
                                        leading-3 sm:text-md md:text-lg lg:text-xl'>
                                                        enfin technologies
                                                    </span>
                                                    <p className='text-gray-600 uppercase text-xs font-extralight mt-1 
                                            sm:mt-3 md:text-sm lg:text-md'>
                                                        full stack developer</p>
                                                </div>
                                                <label className='self-start py-1 text-md px-4 mb-2
                                        rounded-full text-white  bg-brand flex-none
                                        sm:py-2 sm:px-3 md:text-md md:py-3 md:px-4 
                                        lg:text-lg'>
                                                    2021-
                                                </label>
                                            </div>
                                        </li>
                                        <li className='text-brand'>
                                            <div className='flex flex-row justify-between p-1 md:my-4'>
                                                <div className='pb-3'>
                                                    <span className='capitalize font-bold text-md 
                                        leading-3 sm:text-md md:text-lg lg:text-xl'>
                                                        luminar technolab</span>
                                                    <p className='text-gray-600 uppercase text-xs font-extralight mt-1 
                                            sm:mt-3 md:text-sm lg:text-md'>
                                                        software developer trainee</p>
                                                </div>
                                                <label className='self-start py-1 text-md px-4 mb-2
                                        rounded-full text-white  bg-brand flex-none
                                        sm:py-2 sm:px-3 md:text-md md:py-3 md:px-4 
                                        lg:text-lg'>
                                                    2020-2021
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </TabPanel>

                        <TabPanel className='container col-span-12 md:col-span-8 react-tabs__tab-panel mt-10 ml-2 md:ml-5 md:mt-0'>
                            <ScrollAnimation animateIn="fadeIn" >
                                <div className="panel-content my-5 md:my-5 md:flex  md:justify-start">
                                    <ul className='list-disc w-[100%] lg:w-[90%] grid grid-cols-12 gap-3 md:gap-6 lg:gap-x-10'>
                                        {
                                            Skills.map(item => (
                                                <li className='text-brand col-span-12  sm:col-span-6 md:col-span-6 lg:py-2'>
                                                    <div className='flex justify-between sm:justify-around  md:justify-between'>
                                                        <span className='lg:text-xl md:font-bold capitalize flex-none'>{item.skills}</span>
                                                        <ul className="flex  px-1 ">
                                                            {
                                                                Array(item.rating).fill().map((_, i) => (

                                                                    <li className=''>
                                                                        <i className="fas fa-star fa-sm text-yellow-500 mr-1"></i>
                                                                    </li>
                                                                ))
                                                            }

                                                        </ul>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </TabPanel>

                        <TabPanel className='container col-span-12 md:col-span-8 react-tabs__tab-panel mt-10 ml-2 md:ml-5 md:mt-0'>
                            <ScrollAnimation animateIn="fadeIn" >
                                <div className="panel-content py-2">
                                    <ul className='list-disc'>
                                        <li className='text-brand'>
                                            <div className='flex flex-row justify-between p-1 md:my-4'>
                                                <div className='pb-3'>
                                                    <span className='capitalize font-bold text-md 
                                        leading-3 sm:text-md md:text-lg lg:text-xl'>
                                                        secure ehr using blockchain
                                                    </span>
                                                    <p className='text-gray-600 uppercase text-xs font-extralight mt-1 
                                            sm:mt-3 md:text-sm lg:text-md'>
                                                        final year collage project
                                                    </p>
                                                </div>
                                                <label className='self-start py-1 text-md px-4 mb-2
                                        rounded-full text-white  bg-brand flex-none
                                        sm:py-2 sm:px-3 md:text-md md:py-3 md:px-4 
                                        lg:text-lg'>
                                                    4 months(2020)
                                                </label>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </TabPanel>

                        <TabPanel className='container col-span-12 md:col-span-8 react-tabs__tab-panel mt-10 ml-2 md:ml-5 md:mt-0'>
                            <ScrollAnimation animateIn="fadeIn" >
                                <div className="panel-content">
                                    <ul className='list-disc text-brand  sm:py-4'>
                                        <li className=' py-1 md:my-2'>
                                            <span className='lg:text-xl md:font-bold capitalize flex-none'>stock market</span>
                                        </li>
                                        <li className=' py-1 md:my-2'>
                                            <span className=' lg:text-xl md:font-bold capitalize flex-none'>crypto trading</span>
                                        </li>
                                        <li className=' py-1 md:my-2'>
                                            <span className='lg:text-xl md:font-bold capitalize flex-none'>football</span>
                                        </li>
                                        <li className=' py-1 md:my-2'>
                                            <span className=' lg:text-xl md:font-bold capitalize flex-none'>cricket</span>
                                        </li>
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </TabPanel>

                    </Tabs>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default Resume
