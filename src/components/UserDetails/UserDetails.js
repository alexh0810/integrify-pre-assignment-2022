import React from 'react';
import './UserDetails.css'



const UserDetails = ({userDetail}) => {

    const {name, username, email, phone, website, company, address} = userDetail;

    return (
        <div className='detail-container'>
        <div className='detail-card'>
         <ul>
             <li>Name: {name}</li>
             <li>Username: {username}</li>
             <li>Email: {email}</li>
             <li>Phone: {phone}</li>
             <li>Website: {website}</li>
             {company && <li>Company: {company.name}</li>}
             {address && (<li>Address:
                 <div className='address-list'>
                <ul>
                    <li>Street: {address.street}</li>
                    <li>Suite: {address.suite}</li>
                    <li>City: {address.city}</li>
                    <li>Zipcode: {address.zipcode}</li>
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



