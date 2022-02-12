import React, { useState, useEffect} from 'react';
import UserCard from '../UserCard/UserCard';
import './UserList.css'


const UserList = () => {


    const [userData, setUserData] = useState([]);

// Fetching data from API 

    const fetchUserData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((err) => console.log(err));
    }

// Use useEffect hook to fetch data everytime the page loads 

    useEffect(() => fetchUserData(), []);



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
