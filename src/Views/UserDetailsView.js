import React, {useState, useEffect} from "react";
import UserDetails from "../components/UserDetails/UserDetails";
import { useParams } from 'react-router-dom';

const UserDetailsView = () => {
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
        <UserDetails userDetail = {userDetail}/>
    )
}

export default UserDetailsView;