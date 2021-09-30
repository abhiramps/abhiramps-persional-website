import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
// import { Nav, Navbar, Container } from 'react-bootstrap'
function NavBar() {
    const [state, setstate] = useState({
        profile:false,
        resume:false,
        about:false,
        contact:false
    })

    const isActive=()=>{
        setstate(!state.profile)
    }
    return (
        <nav>
            <ul>
                <li className='brand'>
                    <a><Link onClick={isActive} style={{color:state.profile ? 'blue':'none'}} to='/profile'>ABHIRAM P S</Link></a>
                </li>
                <li className='list'>
                    <li className='listItems'>
                        <a> <Link to='/resume'>Resume</Link> </a>
                    </li>
                    <li className='listItems'>
                        <a><Link to='/about'>About</Link></a>
                    </li>
                    <li className='listItems'>
                        <a><Link to='/contact'>contact</Link></a>
                    </li>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar


{/* <Navbar bg="light" expand="lg">
<Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#" disabled>
                Link
            </Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Container>
</Navbar> */}
