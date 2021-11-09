import React from 'react';
import Dog from '../assets/svgs/Dog';
import { Box } from '@mui/system';
import { Container, Grid, Stack, Typography } from '@mui/material';
import Toolkit from '../components/dashboard/Toolkit';
import AmountStatistic from '../components/dashboard/AmountStatistic';
import Chart from '../components/dashboard/Chart';

const Dashboard = () => {
  return (
    <Container style={{ padding: '50px 20px' }} maxWidth={false}>
      <Grid container direction='column' spacing={3}>
        <Grid item>
          <Toolkit />
        </Grid>
        <Grid item>
          <AmountStatistic />
        </Grid>
        <Grid item>
          <Chart />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
