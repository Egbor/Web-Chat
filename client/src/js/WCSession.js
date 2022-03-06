import { Navigate } from 'react-router-dom';

class WCSession extends React.Component {
    componentDidMount() {
        const queryParams = new URLSearchParams(window.location.search);
        const token = atob(queryParams.get("token"));
        const date = new Date();

        sessionStorage.setItem("token", JSON.stringify({ "token": token, "date": date }));
    }

    render() {
        return <Navigate to="/account/feed" />;
    }
}

export default WCSession;