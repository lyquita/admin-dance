import React from 'react';
import {
  Autocomplete,
  Box,
  Container,
  Grid,
  Stack,
  TextField,
} from '@mui/material';
import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const Toolkit = () => {
  const options = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
  ];

  return (
    <>
      <Container sx={{ width: '100%', padding: '50px 0' }} maxWidth={false}>
        <Box
          sx={{
            background: 'white',
            borderRadius: '4px',
            boxShadow:
              'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(63 63 68 / 15%) 0px 1px 2px 0px',
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            width: '100%',
            padding: '20px 20px',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Grid container spacing={2} direction={{ xs: 'column', sm: 'row' }}>
            <Grid item>
              <Autocomplete
                sx={{ width: { md: 300, sm: 200 } }}
                options={options.map((option) => option.title)}
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} label='Select Coach' />
                )}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                sx={{ width: { md: 300, sm: 200 } }}
                options={options.map((option) => option.title)}
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} label='Select PlaceName' />
                )}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                sx={{ width: { md: 300, sm: 200 } }}
                options={options.map((option) => option.title)}
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} label='Select CourseType' />
                )}
              />
            </Grid>
            <Grid item>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label='Date After'
                  value={()=>{}}
                  onChange={() => {}}
                  renderInput={(params) => <TextField {...params} 
                  fullWidth={true}
                  />
                }
                />
              </LocalizationProvider>
            </Grid>
            <Grid item>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label='Date Before'
                  value={()=>{}}
                  onChange={() => {}}
                  renderInput={(params) => <TextField {...params}
                  fullWidth={true}
                  />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Toolkit;
