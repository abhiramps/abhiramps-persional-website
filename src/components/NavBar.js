import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import '../App.scss'
import useDarkMode from '../DarkMode/useDarkMode'
const NavBar = () => {
    const [state] = useState(
        [
            { name: 'Home', href: '#home', current: true },
            { name: 'About', href: '#about', current: false },
            { name: 'Resume', href: '#resume', current: false },
            { name: 'My Works', href: '#works', current: false },
            { name: 'Contact Me', href: '#contactme', current: false },
        ]
    )

    const [colorTheme,setThemes]=useDarkMode()
    // const updateArray = (name) => {
    //     let updatedList = state.map(item => {
    //         if (item.name === name) {
    //             return { ...item, current: !item.current }; //gets everything that was already in item, and updates "done"
    //         }
    //         return {...item,current:false}; // else return unmodified item 
    //     });
    //     // console.log(updatedList)
    //     setstate(updatedList);
    // }


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <>
            <Disclosure as="nav" className="md:px-8 font-display sticky top-0 z-10 bg-gray-800 dark:bg-dark1 transition duration-500" >
                {({ open }) => (
                    <>
                        <div className="max-w-[90rem] mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className=" flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center sm:mr-5 sm_l:mr-auto ">

                                        <a href='#home'> <h1 className='text-white font-bold uppercase text-xl font-display md:text-3xl'>Abhiram </h1></a>
                                    </div>

                                    <div className="hidden sm:block ">
                                        <div className="flex  md:space-x-1">
                                            {state.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    // className={classNames(
                                                    //     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    //     'px-3 py-2 rounded-md text-sm font-medium'
                                                    // )}
                                                    className='nav-link text-gray-300 hover:bg-gray-700 font-display
                                                     hover:text-white sm:px-1 sm_l:px-5   py-2 rounded-md text-sm md:text-lg font-medium shrink-0'
                                                // onClick={() => { updateArray(item.name, item) }}
                                                // aria-current={item.current ? 'page' :undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                    {/* dark mode toggler */}
                                    <div className='absolute right-0 h-10 flex items-center justify-center  sm:-right-5 md:-right-10'>
                                        <span onClick={()=>setThemes(colorTheme)} className='w-8 h-8 md:w-10 md:h-10 bg-indigo-500 rounded-full shadow-lg cursor-pointer
                                        text-white flex items-center justify-center'>
                                            {colorTheme==='light'?
                                            (<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>)
                                            :
                                           ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                            </svg>)
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {state.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}

export default NavBar
