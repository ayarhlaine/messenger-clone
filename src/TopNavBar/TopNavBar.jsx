import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined';
import Avatar from '@material-ui/core/Avatar';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';
import './TopNavBar.scss';
const TopNavBar = () => {
    return (
        <div className="topNavBar">
            <div className="topNavBar__left">
                <img className="topNavBar__left__logo" src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png" alt=""/>
                <div className="topNavBar__input">
                    <SearchIcon/>
                    <input type="text" name="search" placeholder="Search Facebook"/>
                </div>
            </div>
            <div className="topNavBar__center">
                <div className="topNavBar__tab">
                    <HomeOutlinedIcon />
                </div>
                <div className="topNavBar__tab">
                    <FlagOutlinedIcon />
                </div>
                <div className="topNavBar__tab">
                    <OndemandVideoOutlinedIcon />
                </div>
                <div className="topNavBar__tab">
                    <SportsEsportsOutlinedIcon />
                </div>
                <div className="topNavBar__tab">
                    <GroupWorkOutlinedIcon />
                </div>
            </div>
            <div className="topNavBar__right">
                <div className="topNavBar__avatar">
                    <Avatar src="https://scontent.frgn7-1.fna.fbcdn.net/v/t1.0-1/p100x100/69783494_956063828076672_2353582305148141568_o.jpg?_nc_cat=111&ccb=2&_nc_sid=7206a8&_nc_eui2=AeHgz6pbjMRfzlre8bjaQApZKNRbH6sWZYwo1FsfqxZljOFphkv_PL-9ipuZZTJAPpfsXfzkoz5BNlGJY0_l_8CZ&_nc_ohc=92LcSWmoH-YAX_3VtU8&_nc_ht=scontent.frgn7-1.fna&tp=6&oh=793e5e7f1b2ca33ee0bc0e4585dfd79e&oe=5FBC52D5"/>
                    <h3>Ayar</h3>
                </div>
                <IconButton className="topNavBar__right__button">
                    <AddOutlinedIcon />
                </IconButton>
                <IconButton className="topNavBar__right__button">
                    <NotificationsIcon />
                </IconButton>
                <IconButton className="topNavBar__right__button">
                    <ArrowDropDownIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default TopNavBar
