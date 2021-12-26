import React from 'react'
// import person from '../assets/img/person.jpg'
// import person from '../assets/img/Abhiram1.jpg'
import person from '../assets/img/abhi.jpeg'

import Typical from 'react-typical';
import resume from '../assets/Resume/Abhiramps-Resume.pdf'
import '../App.scss'
const Main = () => {
    return (
        <>

            <section id="home" className=' bg-gray-800 h-[100vh] py-[5rem]  flex lg:items-center'>
                <div className="container-sm  font-display text-white relative top-[1rem] flex
                    sm:top-[2rem] sm:block md:top-[4rem] lg:top-[-4rem]  ">

                    <div className="grid grid-cols-12 gap-y-4 items-center">
                        <div className=" col-span-12 sm:col-span-6  sm:order-2 z-0">
                            <div className="relative max-w-[300px] mx-auto">
                                <div className="ellipse-top absolute w-[170px] h-[170px] top-[-10%] right-0 rounded-[100px]
                                    bg-gradient-to-b from-[#4D4A45] to-[#292824] -z-10 sm:top-[-20%] ">
                                </div>
                                <div className="ellipse-bottom absolute w-[120px] h-[120px] bottom-[-5%] left-[5%] rounded-[100px]
                                    bg-gradient-to-b from-[#4D4A45] to-[#292824] -z-10 sm:bottom-[-10%]">
                                </div>

                                <img src={person} alt="person" 
                                className='mx-auto w-[300px] h-[300px] object-cover rounded-full outline outline-8 outline-brand 
                                sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:max-w-[400px] xl:mx-0 '
                                // className='h-[200px] object-cover w-[200px]'
                                />
                            </div>
                        </div>

                        <div className="col-span-12 sm:col-span-6 sm:order-1 sm:flex sm:flex-col">
                            <h1 className="text-3xl text-center font-bold mb-1 font-display
                                sm:text-4xl sm:mb-4 lg:text-left lg:text-5xl lg:mb-5 xl:text-7xl">
                                Hello,I'm Abhiram ps 
                            </h1>
                            <Typical className='text-center font-display  text-xl text-brand font-bold lg:text-left xl:text-2xl'
                                loop={Infinity}
                                steps={['ReactJs Dev ', 1000, 'MERN STACK Developer', 1000, ' cross platform ', 1000, 'Enthusiastic Dev ', 1000]}
                            />
                           
                            <p className="my-3 flex text-center sm:text-center sm:my-4 lg:text-left
                                lg:my-6 xl:text-xl font-serif">Knack of building applications with front and back end operations.
                            </p>
                            <div className='flex items-center justify-around max-w-[300px] mx-auto sm:max-w-[300px] sm:mx-0 lg:'>
                                <a href="#contactme" className="bg-brand font-display items-center hover:bg-brand-700 text-neutral-700 
                                    font-bold py-3 px-4  rounded xl:py-4 xl:px-4 lg:mr-5">
                                    Hire me
                                </a>
                                <a href={resume} download="Abhiramps_resume" className="font-display border-solid border-2 border-indigo-600 text-white items-center hover:bg-brand 
                                    hover:border-gray-800 hover:text-neutral-700 transition duration-300 delay-150 hover:delay-0  
                                    font-bold py-3 px-3 rounded xl:py-4 xl:px-4">
                                    Get Resume
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <hr className=' border-8 border-gray-900 ' /> */}
        </>
    )
}

export default Main
