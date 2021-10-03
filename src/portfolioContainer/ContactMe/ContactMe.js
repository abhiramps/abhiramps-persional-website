import React from 'react'
// import NavBar from '../NavBar/NavBar'
import { Row, Col, Container } from "react-bootstrap";
import './ContactMe.css'
export default function ContactMe() {
    return (
        <div>
            {/* <NavBar></NavBar> */}
            <Container>
                <Row className='contact'>
                    <Col md={6} className='contactDetails'>
                        <h2>CONTACT</h2> 
                        <div className='contactDetailsDescription'>
                            Let's Get In Touch
                            Hit me up if you have some question or want to work together
                            Email me at <span style={{color:'blue'}}>abhiramps776@gmail.com </span>
                            or Contact me at <span style={{color:'blue'}}>+971564451682</span>
                        </div>
                    </Col>
                    <Col md={6} className='socialmedia'>
                        <h2>SOCIAL MEDIA</h2>
                        <div className='colz'>
                            <a href='https://www.linkedin.com/in/abhiram-p-s-947b92157/'>
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href='https://www.instagram.com/abhi.ram_46/'>
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href='https://twitter.com'>
                                <i class="fab fa-twitter-square"></i>
                            </a>
                            <a href='https://github.com/abhiramps'>
                                <i class="fab fa-github-square"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
