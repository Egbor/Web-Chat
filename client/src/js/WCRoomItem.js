import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';

import '../css/WCCommon.css';

class WCRoomItem extends React.Component {
    constructor(props) {
        super(props);

        this.item = props.item;
    }

    render() {
        return(
            <ListGroup.Item as="li" className="wc-room-item" action>
                <Image className="wc-room-item-image" src={ process.env.PUBLIC_URL + this.item } roundedCircle />
            </ListGroup.Item>
        );
    }
}

export default WCRoomItem;