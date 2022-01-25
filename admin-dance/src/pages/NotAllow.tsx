import { Grid } from '@mui/material';
import React from 'react';
import Layout from '../components/global/Layout';

const NotAllow = () => {

    return(
        <>
            <Layout />
            <Grid container direction='column' sx={{padding:'100px 20px 50px 20px'}}>
                <Grid item width='100%'>
                    Not Permission
                </Grid>
            </Grid>
        </>
    );
};


export default NotAllow;