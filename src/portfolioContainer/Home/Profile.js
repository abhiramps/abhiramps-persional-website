import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
import { Link } from 'react-router-dom';
import myResume from '../Resume/Abhiramps_resume.pdf'
import { Button, Container, Col, Row } from 'react-bootstrap';
export default function Profile() {

    return (
        <div className="text-white">
            <Container>
                <Row className='main'>
                    <Col sm={6} className='col-12 contents d-flex flex-column align-items-center justify-content-center'>
                        <span className='text-center fs-1 w-100 pt-4'>Hello,I'm <label className='text-danger'>Abhiram</label></span>
                        
                        <Typical className='designation fs-4'
                            // style={{color:'orange'}}
                            loop={Infinity}
                            steps={['ReactJs Dev ', 1000, 'MERN STACK Developer', 1000, ' cross platform ', 1000, 'Enthusiastic Dev ', 1000]}
                        />
                        <label className='text-center pt-3 pb-sm-5 pb-4 fs-5'>Knack of building applications with front and back end operations.</label>

                        <div className='buttons d-flex flex-row align-items-center justify-content-around pb-5'>
                            <Link className='hireme-link' to='/hireme'>
                                <Button size='sm' className='hireme-link-btn rounded-pill px-4 me-sm-2 py-2 text-uppercase' variant="outline-primary" > Hire me </Button>
                            </Link>
                            <a className='get-resume' href={myResume} download="Abhiramps_resume">
                                <Button size='sm' className='get-resume-btn rounded-pill px-4 py-2 text-uppercase' variant="primary" >
                                    Get Resume
                                </Button>
                            </a>
                        </div>
                    </Col>

                    <Col sm={6} className='col-12 image'>
                        <img src='assets/imgnew1.png' alt='banner' className='' />
                    </Col>
                </Row>
            </Container>


        </div>
    )
}
