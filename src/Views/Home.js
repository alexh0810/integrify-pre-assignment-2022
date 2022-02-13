import React, {useState, useEffect} from 'react'
import UserList from '../components/UserList/UserList';


const Home = () => {
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
        <UserList userData={userData}/>
    )
}

export default Home; 