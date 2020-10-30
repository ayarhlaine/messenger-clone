import React from 'react';
import People from './People/People';
import AddIcon from '@material-ui/icons/Add';
import './PeopleList.scss';
const PeopleList = () => {
    return (
        <div className="peopleList">
            <div className="peopleList__addPeople">
                <AddIcon/>
                <p>Add People</p>
            </div>
           <People
           imageUrl={'https://gamerhub-uploads.s3.us-west-1.amazonaws.com/mobile-legends/akai.jpg'}
           name={'Akai'}
           isAdmin
           />
           <People
           imageUrl={'https://gamerhub-uploads.s3.us-west-1.amazonaws.com/mobile-legends/angela.jpg'}
           name={'Angela'}
           />
           <People
           imageUrl={'https://gamerhub-uploads.s3.us-west-1.amazonaws.com/mobile-legends/angela.jpg'}
           name={'Angela'}
           />
        </div>
    )
}

export default PeopleList
