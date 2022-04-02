import React from 'react';
import { ListGroup}  from 'react-bootstrap';

import WCRoomItem from './WCRoomItem';

class WCRoomList extends React.Component {
    constructor(props) {
        super(props);

        this.className = props.className;
        this.items = props.items;
    }

    renderItems() {
        let result = [];
        for (let i = 0; i < this.items.length; i++) {
            result.push(<WCRoomItem item={ this.items[i] } />);
        }
        return result;
    }  

    render() {
        console.log(this.className);
        return(
            <div className="wc-room-list-wrapper">
                <ListGroup variant="flush" className={ this.className }>
                    { this.renderItems() }
                </ListGroup>
            </div>
        );
    }
}

export default WCRoomList;