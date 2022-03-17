import { AuthorizedReactComponent } from './common/AuthorizedReactComponent';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import '../css/WCCommon.css';

class WCFeed extends AuthorizedReactComponent {
    renderAuthorizedContent() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className="wc-title-font-family font-weight-bold">WebChat</Navbar.Brand>
                    <Navbar.Toggle aria-controls="webchat-navbar" />
                    <Navbar.Collapse id="webchat-navbar">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#">Link1</Nav.Link>
                            <Nav.Link href="#">Link2</Nav.Link>
                            <Nav.Link href="#">Link3</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Nav.Link className="mx-2">{ JSON.parse(sessionStorage.getItem("login")).data }</Nav.Link>
                            <Button>Sign out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default WCFeed;