import React from 'react';
import Dog from '../assets/svgs/Dog';
import { Box } from '@mui/system';
import { Container, Grid, Stack, Typography } from '@mui/material';
import Toolkit from '../components/dashboard/Toolkit';


const Dashboard = () => {
  return (
    <Container style={{padding:'50px 20px'}} maxWidth={false} >
     <Grid container direction='column' spacing={5}>
       <Grid item>
         <Toolkit />
       </Grid>
       <Grid item>
         there is the chart
       </Grid>
     </Grid>
    </Container>
  );
};

export default Dashboard;
