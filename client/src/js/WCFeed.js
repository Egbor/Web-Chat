import { AuthorizedReactComponent } from './common/AuthorizedReactComponent';
import { Navbar, Container, Nav, Button, Row, Col, Form } from 'react-bootstrap';

import WCRoomList from './WCRoomList';

import '../css/WCCommon.css';

class WCFeed extends AuthorizedReactComponent {
    constructor() {
        super();

        this.items = [ "/person.svg", "/person.svg", "/person.svg", "/person.svg", "/person.svg", "/person.svg", "/person.svg", "/person.svg" ];
        this.options = [ "/plus.svg", "/search.svg" ];
    }

    renderAuthorizedContent() {
        return (
            <div className="wc-main-wrapper">
                <Navbar bg="light" expand="lg">
                <Container className="wc-navbar-wrapper">
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
                
                <Container className="wc-context-wrapper mt-3">
                    <Row className="h-100">
                        <Col sm="auto">
                            <WCRoomList className="wc-room-list mb-3" items={ this.items } />
                            <WCRoomList className="wc-option-list" items={ this.options } />
                        </Col>
                        <Col className="wc-chat-wrapper">
                            <Container className="wc-chat-view-wrapper">

                            </Container>
                            <Container className="wc-chat-form-wrapper p-0">
                                <Form className="wc-chat-form d-flex flex-row justify-content-center align-items-center mx-5">
                                    <Form.Control className="wc-chat-textarea" as="textarea" />
                                    <Button className="wc-chat-send-button" type="submit" disabled>Send</Button>
                                </Form>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default WCFeed;