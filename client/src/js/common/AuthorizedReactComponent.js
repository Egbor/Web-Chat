import { Navigate } from 'react-router-dom';

export class AuthorizedReactComponent extends React.Component {
    checkAutherization() {
        const tokenJSON = JSON.parse(sessionStorage.getItem("token"));
        if (tokenJSON !== null) {
            const responce = fetch("http://localhost:8000/token", 
            { 
                method: "POST", 
                mode: "no-cors", 
                headers: 
                { 
                    "Context-Type": "application/json"
                }, 
                body: JSON.stringify({ token: tokenJSON.token }) 
            });
            //console.log(responce.json());
            return true;
        }
        return false;
    }

    renderAuthorizedContent() {
        return <div></div>;
    }

    render() {
        if (this.checkAutherization()) {
            return this.renderAuthorizedContent();
        } else {
            return <Navigate to="/login" />;
        }
    }
}