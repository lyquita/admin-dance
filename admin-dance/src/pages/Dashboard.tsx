import React, { useEffect, useState } from 'react';
import Dog from '../assets/svgs/Dog';
import { Box } from '@mui/system';
import { Container, Grid, Stack, Typography } from '@mui/material';
import Toolkit from '../components/dashboard/Toolkit';
import AmountStatistic from '../components/dashboard/AmountStatistic';
import Chart from '../components/dashboard/Chart';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Dashboard = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>('huanyuhui');


  useEffect(()=>{

    axios.interceptors.request.use( config =>{
      // @ts-ignore
      config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
      return config;
    }, err =>{

      return Promise.reject(err);
    }  );

    axios(`/course/${inputValue}/last_seven_days`)
    .then(()=>{})
    .catch(err => {
      if(err.response.status == '401'){
        navigate('/login', {replace:true});
      }
    });

  }, [inputValue]);


  return (
    <Container style={{ padding: '100px 20px 50px 20px' }} maxWidth={false}>
      <Grid container direction='column' spacing={3} alignContent='center'>
        <Grid item>
          <Toolkit inputValue = { inputValue } setInputValue = { setInputValue }/>
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
