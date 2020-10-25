import React, { useState } from 'react';
import './SideBar.scss';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import SideBarMessage from './SideBarMessage/SideBarMessage';
import { messages } from './SideBarMessage/messages';
const SideBar = () => {
    const [messageList, setMessageList] = useState(messages);
    const onHover = (index, isHover) => {
        const cloneMessages = [...messages];
        cloneMessages[index].isHover = isHover;
        setMessageList(cloneMessages);
    }
    return (
        <div className="sideBar">
            <div className="sideBar__header">
                <h2>Chats</h2>
                <div className="sideBar__header__icons">
                    <IconButton className="sideBar__header__icon__button">
                        <SettingsIcon />
                    </IconButton>
                    <IconButton className="sideBar__header__icon__button">
                        <CreateIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sideBar__messageList">
                <div className="sideBar__search__input">
                    <SearchIcon />
                    <input type="text" name="search" placeholder="Search Messenger"/>
                </div>
                {
                    messageList.map(( { user, imageUrl, lastMessage, time, isHover} ,index) => (
                        <SideBarMessage
                        key={index}
                        index={index}
                        isHover={isHover}
                        user={user}
                        imageUrl={imageUrl}
                        lastMessage={lastMessage}
                        time={time}
                        onHover={onHover}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SideBar
