import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import ActionDropDown from './ActionDropDown/ActionDropDown';
import SearchIcon from '@material-ui/icons/Search';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import AdjustIcon from '@material-ui/icons/Adjust';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import PhotoIcon from '@material-ui/icons/Photo';
import ActionButton from './ActionButton/ActionButton';
import PeopleList from './PeopleList/PeopleList';
import './MessageBodyRight.scss';
const MessageBodyRight = () => {
    const [iconHover, setIconHover] = useState(false);
    return (
        <div className="messageBodyRight">
            <div className="messageBodyRight__IconContainer">
                <div className="messageBodyRight__IconContainer__icon"
                onMouseOver={() => setIconHover(true)}
                onMouseOut={() => setIconHover(false)}
                >
                    <Avatar className="messageBodyRight__icon"
                    src="https://gamerhub-uploads.s3.us-west-1.amazonaws.com/mobile-legends/akai.jpg"/>
                    {
                        iconHover &&
                        <div className="messageBodyRight__IconContainer__edit">
                         <div className={'messageBodyRight__IconContainer__edit__container'}>
                             <PhotoIcon />
                             <span>Edit</span>
                         </div>
                        </div>
                    }
                </div>
            </div>
            <div className="messageBodyRight__Title">
                <input className={'messageBodyRight__Title__input'} type="text" value="HMM Family"/>
            </div>
            <ActionDropDown title={'MORE ACTIONS'} isFirstChild>
                <ActionButton className="ActionButton--background--gray" text="Search in conversation" Icon={SearchIcon}/>
                <ActionButton className="ActionButton--background--gray" text="Edit nicknames" Icon={BorderColorIcon}/>
                <ActionButton className={'ActionButton--theme'} text="Change theme" Icon={AdjustIcon}/>
                <ActionButton text="Change Emoji" Icon={SentimentSatisfiedIcon}/>
            </ActionDropDown>
            <ActionDropDown title={'PEOPLE'}>
               <PeopleList />
            </ActionDropDown>
            <ActionDropDown title={'PRIVACY & SUPPORT'}>
            </ActionDropDown>
            <ActionDropDown title={'SHARED FILES'}>
            </ActionDropDown>
            <ActionDropDown title={'SHARED PHOTO'}>
            </ActionDropDown>
        </div>
    )
}

export default MessageBodyRight
