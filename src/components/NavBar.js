import React, { useState } from 'react'
import { Disclosure} from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import '../App.scss'
const NavBar = () => {
    const [state] = useState(
        [
            { name: 'Home', href: '#home', current: true },
            { name: 'About', href: '#about', current: false },
            { name: 'Resume', href: '#resume', current: false },
            { name: 'Contact Me', href: '#contactme', current: false },
        ]
    )

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
            <Disclosure as="nav" className="sm:px-8 font-display sticky top-0 z-10 bg-gray-800" >
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
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center sm:mr-auto ">
                                      
                                       <a href='#home'> <h1  className='text-white font-bold uppercase text-xl font-display md:text-3xl'>Abhiram </h1></a>
                                    </div>
                                    
                                    <div className="hidden sm:block ">
                                        <div className="flex md:space-x-1">
                                            {state.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    // className={classNames(
                                                    //     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    //     'px-3 py-2 rounded-md text-sm font-medium'
                                                    // )}
                                                    className='nav-link text-gray-300 hover:bg-gray-700 font-display
                                                     hover:text-white sm:px-3  py-2 rounded-md text-sm md:text-lg font-medium shrink-0'
                                                    // onClick={() => { updateArray(item.name, item) }}
                                                    // aria-current={item.current ? 'page' :undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
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
