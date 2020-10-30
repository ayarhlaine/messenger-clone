import React, {useState} from 'react';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './ActionDropDown.scss';
const ActionDropDown = ({isFirstChild, title, children}) => {
    const [open, setOpen] = useState(false);
    const firstChildClass = isFirstChild ? `actionDropDown--first--child` : '';
    return (
        <>
        <div className={`actionDropDown ${firstChildClass}`} onClick={() => setOpen(!open)}>
            <p>{title}</p>
            {
                open ?
                <KeyboardArrowDownIcon /> :
                <KeyboardArrowLeftIcon />
            }
        </div>
        {
                open && children
        }
        </>
    )
}

export default ActionDropDown
