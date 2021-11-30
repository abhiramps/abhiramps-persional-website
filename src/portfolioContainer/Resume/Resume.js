import React from 'react'
// import NavBar from '../NavBar/NavBar'
import './Resume.css'
import myResume from './Abhiramps-Resume.pdf'

function Resume() {

    return (
        <div >
            {/* <NavBar></NavBar> */}
            <div className='resume container'>
                <label>You can download the Resume from here!</label>
                
                <div className='downloadBtn'>
                    <a href={myResume} download="Abhiramps-Resume.pdf">
                        <i className="fas fa-download"></i>
                        <label>download</label>
                    </a>
                </div>
            </div>
        </div>
    )
} 
export default Resume
