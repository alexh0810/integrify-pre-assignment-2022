import React from "react";
import { Link } from 'react-router-dom'
import './Button.css'



const DetailButton = (props) => {
    return (
        <div className="btn-container">
        <Link className="btn" to={`/${props.userId}`}>More Details</Link>
        </div>
    )
}

export default DetailButton;