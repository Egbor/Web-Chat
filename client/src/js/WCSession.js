import { Navigate } from 'react-router-dom';

class WCSession extends React.Component {
    componentDidMount() {
        const queryParams = new URLSearchParams(window.location.search);

        this.addItem("login", queryParams.get("login"));
        this.addItem("token", queryParams.get("token"));
    }

    addItem(key, base64Value) {
        if (base64Value) {
            const data = atob(base64Value);
            const date = new Date();
            sessionStorage.setItem(key, JSON.stringify({ "data": data, "date": date }));
        }
    }

    render() {
        return <Navigate to="/account/feed" />;
    }
}

export default WCSession;