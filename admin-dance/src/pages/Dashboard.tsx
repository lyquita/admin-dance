import React from 'react';
import Dog from '../assets/svgs/Dog';
import { Box } from '@mui/system';
import { Container, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Dog />
      <Typography>This is the Dashboard</Typography>
      </Container>
  );
};

export default Dashboard;
