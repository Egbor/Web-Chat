import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { FormChecker } from './common/FormChecker';

import '../css/WCCommon.css';
import '../css/WCAuthorization.css';

class WCProfile extends React.Component {
    componentDidMount() {
        let checker = new FormChecker();
        /*Check events*/
        checker.add("firstname", element => element.value !== "");
        checker.add("lastname", element => element.value !== "");
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
                    <div className="wc-fw-bold wcauth-subtitle-text">One more step</div>
                </div>
                <div className="mb-3">
                    <Form action="http://localhost:8000/profile/create" method="POST">
                        { this.errorDiv() }
                        <Form.Group className="mb-3">
                            <Form.Control id="firstname" placeholder="First name" name="profile[firstname]" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control id="lastname" placeholder="Last name" name="profile[lastname]" />
                        </Form.Group>
                        <div className="d-grid">
                            <Button id="btn-submit" type="submit" disabled>Complete</Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default WCProfile;