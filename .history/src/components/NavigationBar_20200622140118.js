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
                        <NavDropdown.Item href="./Sorting/Bubble_Sort">Bubble Sort</NavDropdown.Item>
                        <NavDropdown.Item href="./Sorting/Selection_Sort">Selection Sort</NavDropdown.Item>
                        <NavDropdown.Item href="./Sorting/Insertion_Sort">Insertion Sort</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="./Sorting/Merge_Sort">Merge Sort</NavDropdown.Item>
                        <NavDropdown.Item href="./Quick_Sort">Quick Sort</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="MST" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="./MST/Prims">Prim's Algorithm</NavDropdown.Item>
                        <NavDropdown.Item href="./MST/Kruskals">Kruskal's Algorithm</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Shortest Path" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="./Shortest_Path/Dijkstra's">Dijkstra's</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Flow" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="./Flow/Ford_Fulkurson">Ford Fulkurson</NavDropdown.Item>
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
