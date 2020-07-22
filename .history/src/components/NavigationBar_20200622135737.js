import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

function NavigationBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Algorithms</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                    <NavDropdown title="Sorting" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Bubble Sort</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Selection Sort</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Insertion Sort</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Merge Sort</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Quick Sort</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="MST" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Prim's</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Kruskal's</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Shortest Path" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Dijkstra's</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Flow" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Ford Fulkurson</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar;
