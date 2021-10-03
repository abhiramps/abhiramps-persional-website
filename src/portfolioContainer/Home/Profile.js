import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
// import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom';
import myResume from '../Resume/Abhiramps_resume.pdf'
import { Button, Container } from 'react-bootstrap';
// import { useState } from 'react';
export default function Profile() {
    // const [state, setstate] = useState({
    //     show: false
    // })

    return (
        <div className="profile-container">
            {/* <NavBar></NavBar> */}
            <Container>
                <div className='main'>
                    <div className='contents'>
                        <span>Hello,I'm <label> Abhiram</label></span>
                        <Typical className='designation'
                            loop={Infinity}
                            steps={['ReactJs Dev ', 1000, 'MERN STACK Developer', 1000, ' cross platform ', 1000, 'Enthusiastic Dev ', 1000]}
                        />
                        <div className='discription'>
                            <h6>Knack of building applications with front and back end operations.</h6>
                        </div>

                        <div className='buttons'>
                            <Link className='hireme-link' to='/hireme'>
                                <Button size='sm' className='hireme-link-btn' variant="outline-primary" > Hire me </Button>
                            </Link>

                            <a className='get-resume' href={myResume} download="Abhiramps_resume">
                                <Button size='sm' className='get-resume-btn' variant="primary" >
                                    Get Resume
                                </Button>
                            </a>

                            {/* <MDBBtn className='MDBBtn' outline rounded>
                            <Link style={{background:'none'}} className='link' to='/hireme'> Hire me</Link>
                        </MDBBtn>
                        <MDBBtn className='MDBBtn' rounded>
                            <a style={{background:'none',color:'white'}} href={myResume} download="Abhiramps_resume">
                                Get Resume
                            </a>
                        </MDBBtn> */}
                        </div>
                    </div>
                    <div className='image'>
                        <img src='assets/imgnew1.png' alt='banner'/>
                    </div>
                </div>
            </Container>


        </div>
    )
}
