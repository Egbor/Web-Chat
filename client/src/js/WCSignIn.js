import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import '../css/WCCommon.css';
import '../css/WCAuthorization.css';

function WCSignIn() {
    return(
        <div className="wcauth-wrapper">
            <div className="wcauth-title-wrapper">
                <div className="wc-fw-bold wcauth-title-text">WebChat</div>
            </div>
            <div className="mb-3">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control placeholder="Login"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                </Form>
                <div className="d-grid">
                    <Button  type="submit">Sign in</Button>
                </div>
            </div>
            <div className="wcauth-split-wrapper">
                <div className="wcauth-split-line"></div>
                <div className="wcauth-split-text">or</div>
                 <div className="wcauth-split-line"></div>
            </div>
            <div className="wcauth-alt-wrapper">
                <a className="wcauth-alt-link" href="/account/create">Sign up</a>
            </div>
        </div>
    );
}

export default WCSignIn;