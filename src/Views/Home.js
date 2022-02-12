import React from 'react'
import { Grid } from '@mui/material'
import UserList from '../components/UserList/UserList'

const Home = () => {
    return (
        <Grid container direction="column">
            <Grid item container>
                <UserList />
            </Grid>
        </Grid>
    )
}

export default Home; 