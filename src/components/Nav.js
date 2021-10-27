import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export function NavComponent() {
    return (
        <Navbar
            className="fixed-top"
            collapseOnSelect
            expand="md"
            bg="primary"
            variant="light"
        >
            <Container>
                <Navbar.Brand>
                    <Link to="/">COVID DATA DAILY</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse
                    className="align-items-end"
                    id="responsive-navbar-nav"
                >
                    <Nav className="ms-auto">
                        <Link className="px-4 links" to="/about">
                            About
                        </Link>
                        <Link className="px-4 links" to="#">
                            Blog
                        </Link>
                        <a
                            className="px-4 links"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/mariocrrt"
                        >
                            <Github></Github>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
