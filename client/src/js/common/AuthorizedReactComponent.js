import { Navigate } from 'react-router-dom';

export class AuthorizedReactComponent extends React.Component {
    constructor(props) {
        super(props);

        this.isUnmounted = false;
        this.state = { isAuthorized: false, isLoaded: false };
    }

    updateAutherizationState() {
        const tokenJSON = JSON.parse(sessionStorage.getItem("token"));
        if (tokenJSON !== null) {
            fetch("http://localhost:8000/token", 
            { 
                method: "POST", 
                mode: "cors", 
                headers: 
                { 
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({ token: tokenJSON.data })
            })
            .then(response => response.json())
            .then(token => { 
                if (token) {
                    const localTokenCreationDate = Date.parse(tokenJSON.date);
                    const databaseTokenCreationDate = Date.parse(token.date);
                    const dTime = localTokenCreationDate - databaseTokenCreationDate;
                    if (!this.isUnmounted) {
                        this.setState({ isAuthorized: dTime < 2500, isLoaded: true });
                    }
                }
            });
        } else {
            this.setState({ isAuthorized: false, isLoaded: true });
        }
    }

    componentDidMount() {
        this.isUnmounted = false;
        this.updateAutherizationState();
    }

    componentWillUnmount() {
        this.isUnmounted = true;
    }

    renderAuthorizedContent() {
        return <div></div>;
    }

    render() {
        const { isAuthorized, isLoaded } = this.state;
        if (isAuthorized) {
            return this.renderAuthorizedContent();
        }
        if (isLoaded) {
            return <Navigate to="/login" />;
        }
        return <div></div>;
    }
}