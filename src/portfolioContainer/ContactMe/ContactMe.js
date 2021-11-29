import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import './ContactMe.css'

export default function ContactMe() {
    return (
        <div className='contactme text-white'>
            <Container>
                <Row className='contact pt-5'>
                    <Col sm={6} md={6} className='col-12 contactDetails d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='text-center pb-4' style={{color:'orange'}}>CONTACT</h2> 
                        <div className='contactDetailsDescription text-center '>
                            Let's Get In Touch
                            Hit me up if you have some question or want to work together
                            Email me at <span style={{color:'blue'}}>abhiramps776@gmail.com </span>
                            or Contact me at <span style={{color:'blue'}}>+971564451682</span>
                        </div>
                    </Col>
                    <Col sm={6} md={6} className='col-12 socialmedia pt-5 pt-sm-0'>
                        <h2 className='text-center' style={{color:'orange'}}>SOCIAL MEDIA</h2>
                        <div className='colz d-flex flex-row align-items-center justify-content-center pt-3 '>
                            <a href='https://www.linkedin.com/in/abhiram-p-s-947b92157/' className='fs-2 px-2 text-white'>
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href='https://www.instagram.com/abhi.ram_46/' className='fs-2 px-2 text-white'>
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href='https://twitter.com' className='fs-2 px-2 text-white'>
                                <i class="fab fa-twitter-square"></i>
                            </a>
                            <a href='https://github.com/abhiramps' className='fs-2 px-2 text-white'>
                                <i class="fab fa-github-square"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
