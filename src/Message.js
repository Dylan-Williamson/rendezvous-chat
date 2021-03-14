import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css';

const Message = () => {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    @agxra
                    <span className="message__timestamp">
                        timestamp
                    </span>
                </h4>
                A Message
            </div>
        </div>
    )
}

export default Message
