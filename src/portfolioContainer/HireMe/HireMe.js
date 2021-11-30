import React, { useRef } from 'react'
import { Form, Row, Col,Container,Button } from 'react-bootstrap'
import emailjs from 'emailjs-com';
import './HireMe.css'

function HireMe() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_84kxoro', form.current, 'user_FJUXaGo5NtVXLwhQLoeRz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className='hireme'>
            <Container>
                <Row style={{ position: 'relative', top: '3rem' }}>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <label className='text-white-50' style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>please fill the Form and I'll try to get back to you as soon as I can.</label>
                        <Form className='form' ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-3 ">
                                <Form.Label className='text-white-50 '>Name</Form.Label>
                                <Form.Control type="text" className='bg-dark text-white' name='from_name' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='text-white-50'>Email address</Form.Label>
                                <Form.Control type="email" className='bg-dark text-white' name='email' placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='text-white-50'>Message</Form.Label>
                                <Form.Control as="textarea" className='bg-dark text-white' name='message' rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex align-items-center justify-content-center">
                                <Button type='submit' className='px-5'>
                                    submit
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={3}></Col>

                </Row>
            </Container>

        </div>

    );
}

export default HireMe
