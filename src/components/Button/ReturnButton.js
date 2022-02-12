import React from "react";
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ReturnButton = () => {
    return (
        <div>
            <Button variant="contained"
                size="medium">
                   <Link to="/"><ArrowBackIcon/></Link>
             </Button>
        </div>
    )
}

export default ReturnButton; 