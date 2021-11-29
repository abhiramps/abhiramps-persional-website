import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
function NavBar() {


    const initialState = {
        profile: false,
        resume: false,
        about: false,
        contact: false
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'PROFILE':
                return { ...state, profile: true, resume: false, about: false, contact: false }
            case 'RESUME':
                return { ...state, profile: false, resume: true, about: false, contact: false }
            case 'ABOUT':
                return { ...state, profile: false, resume: false, about: true, contact: false }
            case 'CONTACT':
                return { ...state, profile: false, resume: false, about: false, contact: true }
            default: 
                return{state}    
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <nav>
            <ul className=''>
                <li className='brand '>
                    <Link className='text-decoration-none' style={state.profile ? { color: 'blue' } : { color: 'white' }} onClick={() => dispatch({ type: 'PROFILE' })} to='/profile'>ABHIRAM P S</Link>
                </li>
                <li className='list'>
                    <li className='listItems'>
                        <Link className='text-decoration-none' style={state.resume ? { color: 'blue' } : { color: 'white' }} onClick={() => dispatch({ type: 'RESUME' })} to='/resume'>Resume</Link>
                    </li>
                    <li className='listItems'>
                        <Link className='text-decoration-none' style={state.about ? { color: 'blue' } : { color: 'white' }} onClick={() => dispatch({ type: 'ABOUT' })} to='/about'>About</Link>
                    </li>
                    <li className='listItems'>
                        <Link className='text-decoration-none' style={state.contact ? { color: 'blue' } : { color: 'white' }} onClick={() => dispatch({ type: 'CONTACT' })} to='/contact'>contact</Link>
                    </li>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar



