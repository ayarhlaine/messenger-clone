import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import InfoIcon from '@material-ui/icons/Info';
import './MessageBodyHeader.scss';
const MessageBodyHeader = () => {
    return (
        <div className="messageBodyHeader">
           <div className="messageBodyHeader__container">
            <div className="messageBodyHeader__left">
                    <Avatar src="https://gamerhub-uploads.s3.us-west-1.amazonaws.com/mobile-legends/akai.jpg"/>
                    <h3>Akai</h3>
                </div>
                <div className="messageBodyHeader__right">
                    <CallIcon />
                    <VideocamIcon />
                    <InfoIcon />
                </div>
           </div>
        </div>
    )
}

export default MessageBodyHeader
