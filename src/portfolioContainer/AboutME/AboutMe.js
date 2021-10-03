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
        <div>
            {/* <NavBar></NavBar> */}
            <Container fluid className='d-flex'>
                <Row className='aboutme'>
                    <Col sm={6} className='aboutContents'>
                        <div className='heading'>
                            <h2>
                                ABOUT
                            </h2>
                        </div>
                        <div className='description'>
                            <p>
                                Hello, My name is  Abhiram P S.
                                I'm a Software Engineer from Kerala, India.
                                Currently, I'm working as a React Developer. I like to build highly efficient applications that provide users with an awesome experience.
                            </p>
                        </div>
                    </Col>

                    <Col sm={6} className='skills'>
                        <h2>SKILLS</h2>
                        <Container>
                            <Row >
                                <Col>
                                    {
                                        SkillSet.map(item => (
                                            <BadgeItem className='item' skill={item.skillName} Url={item.imgUrl}></BadgeItem>
                                        ))
                                    }
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default AboutMe
