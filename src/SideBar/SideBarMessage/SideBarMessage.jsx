import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './SideBarMessage.scss';
const SideBarMessage = ({ user, imageUrl, lastMessage, time, isHover, index, onHover}) => {
    const sideBarMessage__more__icon__class = isHover ? '--active' : '';
    return (
        <div className="sideBarMessage"
        onMouseOver={(e) => onHover(index, true)}
        onMouseOut={(e) => onHover(index, false)}
        >
            <Avatar src={imageUrl}/>
            <div className="sideBarMessage__detail">
                <h3>{user}</h3>
                <div className="sideBarMessage__detail__message">
                    <p>
                        {lastMessage}
                    </p>
                    <span>{time}</span>
                </div>
            </div>
            <MoreHorizIcon className={`sideBarMessage__more__icon sideBarMessage__more__icon${sideBarMessage__more__icon__class}`}/>
        </div>
    )
}

export default SideBarMessage
