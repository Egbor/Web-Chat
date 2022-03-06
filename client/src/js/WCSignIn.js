import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { FormChecker } from './common/FormChecker';

import '../css/WCCommon.css';
import '../css/WCAuthorization.css';

class WCSignIn extends React.Component {
    componentDidMount() {
        let checker = new FormChecker();
        /*Check events*/
        checker.add("login", element => element.value !== "");
        checker.add("password", element => element.value !== "");
        /*Check callbacks*/
        /*Callback functions will be called either if all check events successed or if one of them failed*/
        checker.addOnCheckSuccessedCallBack(() => document.getElementById("btn-submit").disabled = false);
        checker.addOnCheckFailedCallBack(() => document.getElementById("btn-submit").disabled = true);
    }

    errorDiv() {
        const queryParams = new URLSearchParams(window.location.search);
        const error = queryParams.get("error");

        if (error !== null) {
            return (<div className="mb-3 text-center text-danger">{ atob(error) }</div>);
        }
        return <div/>
    }

    render() {
        return(
            <div className="wcauth-wrapper">
                <div className="wcauth-title-wrapper">
                    <div className="wc-fw-bold wcauth-title-text">WebChat</div>
                </div>
                <div className="mb-3">
                    <Form action="http://localhost:8000/user" method="POST">
                        { this.errorDiv() }
                        <Form.Group className="mb-3">
                            <Form.Control id="login" placeholder="Login" name="user[login]" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control id="password" type="password" placeholder="Password" name="user[password]" />
                        </Form.Group>
                        <div className="d-grid">
                            <Button id="btn-submit" type="submit" disabled>Sign in</Button>
                        </div>
                    </Form>
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
}

export default WCSignIn;