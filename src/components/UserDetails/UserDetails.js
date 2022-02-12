import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import './UserDetails.css'



const UserDetails = () => {
    let { userId } = useParams(); 
    const [userDetail, setUserDetail] = useState({});
    const fetchUserDetail = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => setUserDetail(data))
        .catch((err) => console.log(err));
    }

    useEffect(() => fetchUserDetail(), [userDetail.id]);
    console.log(userDetail);

    return (
        <div className='detail-container'>
        <div className='detail-card'>
         <ul>
             <li>Name: {userDetail.name}</li>
             <li>Username: {userDetail.username}</li>
             <li>Email: {userDetail.email}</li>
             <li>Phone: {userDetail.phone}</li>
             <li>Website: {userDetail.website}</li>
             {userDetail.company && <li>Company: {userDetail.company.name}</li>}
             {userDetail.address && (<li>Address:
                 <div className='address-list'>
                <ul>
                    <li>Street: {userDetail.address.street}</li>
                    <li>Suite: {userDetail.address.suite}</li>
                    <li>City: {userDetail.address.city}</li>
                    <li>Zipcode: {userDetail.address.zipcode}</li>
                </ul>
                </div>
             </li>
             )}
        </ul> 
        </div>
        </div>
    )

    
}

export default UserDetails;



