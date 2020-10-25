import React from 'react';
import MessageBodyHeader from './MessageBodyHeader/MessageBodyHeader';
import './MessageBody.scss';
import MessageBodyLeft from './MessageBodyLeft/MessageBodyLeft';
import MessageBodyRight from './MessageBodyRight/MessageBodyRight';
const MessageBody = () => {
    return (
        <div className="messageBody">
            <MessageBodyHeader />
            <div className="messageBody__body">
                <MessageBodyLeft />
                <MessageBodyRight />
            </div>
        </div>
    )
}

export default MessageBody
