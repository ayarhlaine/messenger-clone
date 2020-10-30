import React from 'react';
import UserMessage from './UserMessage/UserMessage';
import UserMessageInput from './UserMessageInput/UserMessageInput';
import './MessageBodyLeft.scss';
const MessageBodyLeft = () => {
    return (
        <div className="messageBodyLeft">
            <div className="messageBodyLeft__Body">
                <UserMessage />
                <UserMessage receiver/>
                <UserMessage />
                <UserMessage />
            </div>
            <div className="messageBodyLeft__Input">
                <UserMessageInput/>
            </div>
        </div>
    )
}

export default MessageBodyLeft
