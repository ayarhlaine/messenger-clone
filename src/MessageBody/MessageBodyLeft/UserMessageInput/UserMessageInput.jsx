import React from 'react'
import './UserMessageInput.scss';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import GifIcon from '@material-ui/icons/Gif';
import PhotoIcon from '@material-ui/icons/Photo';
import NoteSharpIcon from '@material-ui/icons/NoteSharp';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const UserMessageInput = () => {
    return (
        <div className='userMessageInput'>
            <ControlPointIcon/>
            <GifIcon/>
            <NoteSharpIcon/>
            <PhotoIcon/>
            <div className="userMessageInput__InputContainer">
                <input type="text" placeholder="Type a message, @name"/>
                <SentimentSatisfiedIcon/>
            </div>
            <ThumbUpIcon />
        </div>
    )
}

export default UserMessageInput
