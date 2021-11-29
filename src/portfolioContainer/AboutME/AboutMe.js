import React, { useState } from 'react'
// import NavBar from '../NavBar/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutMe.css'
import BadgeItem from './Badge'
function AboutMe() {

    const [SkillSet] = useState([
        {
            skillName: 'ReactJs',
            imgUrl: 'assets/react-js.png'
        },
        {
            skillName: 'ANGULAR',
            imgUrl: 'assets/angular.png'
        },
        {
            skillName: 'JAVASCRIPT',
            imgUrl: 'assets/javascript.png'
        },
        {
            skillName: 'TYPESCRIPT',
            imgUrl: 'assets/typescript.png'
        },
        {
            skillName: 'HTML5',
            imgUrl: 'assets/html.png'
        },
        {
            skillName: 'CSS3',
            imgUrl: 'assets/css.png'
        },
        {
            skillName: 'bootstrap',
            imgUrl: 'assets/bootstrap-4.png'
        },
    ])

    return (
        <div className='about'>
            {/* <NavBar></NavBar> */}
            <Container className='text-white'>
                <Row className='aboutme pt-4'>
                    <Col sm={6} className='aboutContents d-flex flex-column align-items-center'>
                        <label className='fs-1 py-4' style={{color:'orange'}}>ABOUT</label>
                        <p className='pb-3'>
                            Hello, My name is  Abhiram P S.
                            I'm a Software Engineer from Kerala, India.
                            Currently, I'm working as a React Developer. I like to build highly efficient applications that provide users with an awesome experience.
                        </p>
                    </Col>
                    <Col sm={6} className='skills d-flex flex-column align-items-center justify-content-center'>
                        <label className='fs-1 py-4' style={{color:'orange'}}>SKILLS</label>
                        <Container>
                            <Row className='gy-3'>

                                {
                                    SkillSet.map(item => (
                                        <Col sm={6} md={4} lg={3} className='col-6 d-flex flex-column align-items-center justify-content-center py-3 py-sm-0'>
                                            <BadgeItem className='item' skill={item.skillName} Url={item.imgUrl}></BadgeItem>
                                        </Col>
                                    ))
                                }

                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default AboutMe
