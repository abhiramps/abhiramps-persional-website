import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import bootstrap from '../assets/img/bootstrap-4.svg'
import html from '../assets/img/html.svg'
import css from '../assets/img/css.svg'
import reactjs from '../assets/img/react-js.svg'
import tailwindcss from '../assets/img/tailwind-css.svg'

const Works = () => {
    return (
        <>
            <section id="works">
                <div className="container font-display mx-auto pt-[5rem]">
                    <div className='flex flex-col justify-center items-center '>
                        <span className='uppercase text-4xl font-bold pb-4'>my works</span>
                        <span className='capitalize	font-light tracking-widest'>checkout my works</span>
                    </div>

                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <div className="max-w-6xl mx-auto px-5 py-24 ">
                            <div className="flex flex-wrap -m-4">
                                <div className="xl:w-1/3 md:w-1/2 p-4 w-96">
                                    <div className="border border-yellow-300 p-6 rounded-lg shadow-[0px_0px_25px_-9px_rgba(0,0,0,0.3)]">
                                        <div className="w-10 h-10 flex rounded-full  text-indigo-500 mb-4">
                                            <img alt='icons' src={reactjs} className='px-2' />
                                            <img alt='icons' src={bootstrap} className='px-2' />
                                        </div>
                                        <h2 className="text-2xl font-bold title-font pt-2">DIGILab</h2>
                                        <h4 className='font-thin text-gray-500 pb-5'>static website</h4>
                                        <p className="leading-relaxed text-base">
                                            <a href='https://digelab.herokuapp.com/' className='text-white bg-brand px-3 py-2 rounded'>
                                                <button>view</button>
                                            </a>
                                        </p>
                                        <div className="text-center mt-2 leading-none flex justify-between w-full pt-2">
                                            <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                                                <svg className=" fill-current w-4 h-4 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" /></svg>
                                                3 days
                                            </span>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="xl:w-1/3 md:w-1/2 p-4 w-96">
                                    <div className="border border-yellow-300 p-6 rounded-lg shadow-[0px_0px_25px_-9px_rgba(0,0,0,0.3)]">
                                        <div className="w-10 h-10 flex rounded-full  text-indigo-500 mb-4">
                                            <img alt='icons' src={reactjs} className='px-2' />
                                            <img alt='icons' src={css} className='px-2' />
                                            <img alt='icons' src={html} className='px-2' />

                                            <img alt='icons' src={bootstrap} className='px-2' />
                                        </div>
                                        <h2 className="text-2xl font-bold title-font pt-2">Amazon-clone</h2>
                                        <h4 className='font-thin text-gray-500 pb-5'>E-commerce website</h4>
                                        <p className="leading-relaxed text-base">
                                            <a href='https://e-com-webs.herokuapp.com/' className='text-white bg-brand px-3 py-2 rounded'>
                                                <button>view</button>
                                            </a>
                                        </p>
                                        <div className="text-center mt-2 leading-none flex justify-between w-full pt-2">
                                            <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                                                <svg className=" fill-current w-4 h-4 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" /></svg>
                                                3 days
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 md:w-1/2 p-4 w-96">
                                    <div className="border border-yellow-300 p-6 rounded-lg shadow-[0px_0px_25px_-9px_rgba(0,0,0,0.3)]">
                                        <div className="w-10 h-10 flex rounded-full  text-indigo-500 mb-4">
                                            <img alt='icons' src={html} className='px-2' />
                                            <img alt='icons' src={css} className='px-2' />
                                            <img alt='icons' src={bootstrap} className='px-2' />
                                        </div>
                                        <h2 className="text-2xl font-bold title-font pt-2">Growth plug</h2>
                                        <h4 className='font-thin text-gray-500 pb-5'>static website</h4>
                                        <p className="leading-relaxed text-base">
                                            <a href='https://abhiramps.github.io/growthplug-website-responsive/' className='text-white bg-brand px-3 py-2 rounded'>
                                                <button>view</button>
                                            </a>
                                        </p>
                                        <div className="text-center mt-2 leading-none flex justify-between w-full pt-2">
                                            <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                                                <svg className=" fill-current w-4 h-4 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" /></svg>
                                                2 days
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 md:w-1/2 p-4 w-96">
                                    <div className="border border-yellow-300 p-6 rounded-lg shadow-[0px_0px_25px_-9px_rgba(0,0,0,0.3)]">
                                        <div className="w-10 h-10 flex rounded-full  text-indigo-500 mb-4">
                                            <img alt='icons' src={html} className='px-2' />
                                            <img alt='icons' src={reactjs} className='px-2' />
                                            <img alt='icons' src={tailwindcss} className='px-2' />
                                            <img alt='icons' src={css} className='px-2' />
                                            <img alt='icons' src={bootstrap} className='px-2' />
                                        </div>
                                        <h2 className="text-2xl font-bold title-font pt-2 pb-10">other works</h2>
                                        {/* <h4 className='font-thin text-gray-500 pb-5'>static website</h4> */}
                                        <p className="leading-relaxed text-base">
                                            <a href='https://github.com/abhiramps' className='text-white bg-brand px-3 py-2 rounded'>
                                                <button>view</button>
                                            </a>
                                        </p>
                                        <div className="text-center mt-2 leading-none flex justify-between w-full pt-2">
                                            <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                                                <svg className=" fill-current w-4 h-4 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" /></svg>
                                                {/* 2 days */}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

        </>
    )
}

export default Works
