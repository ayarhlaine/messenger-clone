import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './People.scss';
const People = ({
    imageUrl, name, isAdmin
}) => {
    return (
        <div className="people">
            <Avatar className="people__icon" src={imageUrl} />
            <p className="people__name">{name}</p>
            <p className="people__admin">{ isAdmin ? "Admin" : ""}</p>
        </div>
    )
}

export default People
