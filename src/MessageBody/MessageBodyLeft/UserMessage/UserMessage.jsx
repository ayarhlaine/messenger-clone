import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './UserMessage.scss';
const UserMessage = ({receiver}) => {
    const className = receiver ? 'userMessage--me': '';
    return (
        <div className={`userMessage ${className}`}>
            <div className="userMessage__left">
                {
                     !receiver && 
                     <Avatar src="https://gamerhub-uploads.s3.us-west-1.amazonaws.com/mobile-legends/akai.jpg"/>
                }
            </div>
            <div className="userMessage__right">
                {
                    !receiver && 
                    <span className="userMessage__content__user">Akai</span>
                }
                <div className="userMessage__content">
                    <p>မင်္ဂလာပါ တွေ့ရတာဝမ်းသာပါတယ်။</p>
                </div>
            </div>
        </div>
    )
}

export default UserMessage
