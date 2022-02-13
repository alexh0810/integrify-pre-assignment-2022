import React, { useState, useEffect} from 'react';
import UserCard from '../UserCard/UserCard';
import './UserList.css'


const UserList = ({userData}) => {


    return (
       <div>
           <div className='home-container'>
               {userData.map(user => {
                   return (
                       <div key={user.id}>
                           <UserCard userInfo={user}/>
                        </div>
                   )
               })}
           </div>
        </div> 


    
    )
}


export default UserList;
