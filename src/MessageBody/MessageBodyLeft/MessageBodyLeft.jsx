import React from 'react';
import UserMessage from './UserMessage/UserMessage';
import './MessageBodyLeft.scss';
const MessageBodyLeft = () => {
    return (
        <div className="messageBodyLeft">
            <UserMessage />
            <UserMessage receiver/>
            <UserMessage />
        </div>
    )
}

export default MessageBodyLeft
