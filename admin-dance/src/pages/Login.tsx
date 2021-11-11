import * as React from 'react';
import { Helmet } from 'react-helmet';
import {
  Container,
  Stack,
  Box,
  Grid,
  Typography,
  TextField,
  Button
} from '@mui/material';

import { User } from '../interfaces/Login';

const Login = () => {
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
        <Container maxWidth="md">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <Typography variant="h1">You look so nice today:)</Typography>
            </Grid>
            <Grid item>
              <form>
                <Stack spacing={2}>
                  <TextField label="username" />
                  <TextField label="password" type="password" />
                  <Button >Login</Button>
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
