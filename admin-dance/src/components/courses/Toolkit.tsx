import React, { useEffect, useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
} from '@mui/material';
import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import axios from 'axios';
import { IToolkitProps } from '../../interfaces/Course';


const Toolkit:React.FC<IToolkitProps> = ({ coachname, coursename, placename, datebefore, dateafter, setCoachName, setCourseName, setPlaceName, setDatebefore, setDateafter  }) => {

const moment = require('moment');
const [coachNameOptions, setCoachNameOptions] = useState([]);
const [placeNameOptions, setPlaceNameOptions] = useState([]);
const [courseNameOptions, setCourseNameOptions] = useState([]);


const handleCoacnname = (e: React.SyntheticEvent, value: string) => {
  setCoachName(value);
};

const handlePlacename = (e: React.SyntheticEvent, value: string) => {
  setPlaceName(value);
};

const handleCoursename = (e: React.SyntheticEvent, value: string) => {
  setCourseName(value);
};

const handleDateafter = (e: React.SyntheticEvent, value: string) => {
  setDateafter(moment(e).format('yyyy-MM-DD'));
};

const handleDatebefore = (e: React.SyntheticEvent, value: string) => {
  setDatebefore(moment(e).format('yyyy-MM-DD'));
};

const handleReset = () => {
  window.location.reload();
};

useEffect(()=>{
  axios('course/coachname')
  .then( res => setCoachNameOptions(res.data) )
  .catch( err => Promise.reject(err));

  axios('course/placename')
  .then( res => setPlaceNameOptions(res.data))
  .catch( err => Promise.reject(err));

  axios('course/coursename')
  .then( res => setCourseNameOptions(res.data))
  .catch( err => Promise.reject(err));

}, []);
  

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
                id='coachname'
                sx={{ width: { md: 300, sm: 200 } }}
                options={coachNameOptions.map((option) => option.coachname)}
                freeSolo
                onChange={handleCoacnname}
                renderInput={(params) => (
                  <TextField {...params} label='Select Coach' />
                )}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                id='placename'
                sx={{ width: { md: 300, sm: 200 } }}
                options={placeNameOptions.map((option) => option.placename)}
                freeSolo
                onChange={handlePlacename}
                renderInput={(params) => (
                  <TextField {...params} label='Select PlaceName' />
                )}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                id='coursename'
                sx={{ width: { md: 300, sm: 200 } }}
                options={courseNameOptions.map((option) => option.coursename)}
                freeSolo
                onChange={handleCoursename}
                renderInput={(params) => (
                  <TextField {...params} label='Select CourseType' />
                )}
              />
            </Grid>
            <Grid item>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label='Date After'
                  value={dateafter}
                  onChange={handleDateafter}
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
                  value={datebefore}
                  onChange={handleDatebefore}
                  renderInput={(params) => <TextField {...params}
                  fullWidth={true}
                  />}
                />
              </LocalizationProvider>
            
            </Grid>
            <Grid item>
                <Button  variant="contained" onClick={handleReset}>Reset</Button>
              </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Toolkit;
