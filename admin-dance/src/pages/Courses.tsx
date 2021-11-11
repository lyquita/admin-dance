import { Grid } from '@mui/material';
import React from 'react';
import Toolkit from '../components/courses/Toolkit';

const Course = () =>{


    return (
        <>
            <Grid container>
                <Grid item>
                    <Toolkit />
                </Grid>
                <Grid item>course list</Grid>
            </Grid>
        </>
    );
};

export default Course;