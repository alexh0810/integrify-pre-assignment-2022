import * as React from 'react';
import DetailButton from '../Button/DetailButton'
import './UserCard.css'




const UserCard = (props) => { 
    const {id, name, username, website} = props.userInfo; 
   
    return (
        <div className='card'>
            <div className='avatar'>
                <h2>{name.substring(0,1)}</h2>
            </div>
            <div className='card-text'>
                <h3>{name}</h3>
                <p>@{username}</p>
            </div>
            <div className='card-link'>
                <a href={website}>http://{website}</a>
            </div>
            <div>
                <DetailButton userId={id}/>
            </div>
        </div>
    )
    

}

export default UserCard;