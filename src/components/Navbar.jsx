import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavBar = () => {
    return ( 
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="./#home">
                    <img style={{maxHeight:"100px"}} src="https://i.postimg.cc/d3Gg39Vt/Picsart-23-03-30-00-05-31-692.jpg" alt="" />
                    {/* &nbsp;FullBelly */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    
                    {/* <Nav.Link href="#link">Link</Nav.Link> */}
                    
                </Nav>
                <Nav>
                    <Nav.Link href="./#home">Home</Nav.Link>
                    <Nav.Link eventKey={2} href="#gallery">
                    Gallery
                    </Nav.Link>
                    <Nav.Link href="./#blogs">Blogs</Nav.Link>
                    <Nav.Link href="./#hero">Get Involed</Nav.Link>
                    <Nav.Link href="./about">About Us</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/deliver">Logs</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavBar;