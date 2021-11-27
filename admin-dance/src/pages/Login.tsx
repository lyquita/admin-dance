import * as React from 'react';
import { Helmet } from 'react-helmet';
import {
  Container,
  Stack,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';

import { User } from '../interfaces/Login';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import axiosInstance from '../untils/axiosInstance';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('hireoo');
  const [password, setPassword] = useState<string>('');
  const loginForm: User = {
    username: username,
    password: password,
  };

  function handleUsername(e: React.FormEvent) {
    return setUsername((e.target as HTMLInputElement).value);
  }

  function handlePassword(e: React.FormEvent) {
    return setPassword((e.target as HTMLInputElement).value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    axiosInstance
      .post('/token/', loginForm)
      .then(
        (res) => {
          localStorage.setItem('access_token', res.data.access),
          localStorage.setItem('refresh_token', res.data.refresh),
          navigate('/', {replace:true});
        }
      )
      .catch((err)=> {
        console.log('error', err);
      });
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth='md'>
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={4}
          >
            <Grid item>
              <Typography variant='h1'>You look so nice today:)</Typography>
            </Grid>
            <Grid item>
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <TextField label='username' onChange={handleUsername} />
                  <TextField
                    label='password'
                    type='password'
                    onChange={handlePassword}
                  />
                  <Button type='submit'>Login</Button>
                </Stack>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Login;
