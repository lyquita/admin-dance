import { Grid } from '@mui/material';
import React from 'react';
import CourseTable from '../components/courses/Table';
import Toolkit from '../components/courses/Toolkit';

const Course = () =>{


    return (
        <>
            <Grid container direction='column'>
                <Grid item width='100%'>
                    <Toolkit />
                </Grid>
                <Grid item width='100%'>
                    <CourseTable />
                </Grid>
            </Grid>
        </>
    );
};

export default Course;