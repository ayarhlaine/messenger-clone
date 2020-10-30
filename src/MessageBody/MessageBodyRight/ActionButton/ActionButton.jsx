import React from 'react';
import './ActionButton.scss';
const ActionButton = ({
    className, text, Icon,
}) => {
    return (
        <div className={`actionButton ${className}`}>
            <p>{text}</p>
            <Icon />
        </div>
    )
}

export default ActionButton
