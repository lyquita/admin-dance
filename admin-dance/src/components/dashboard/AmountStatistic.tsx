import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  box: {
    background: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '4px',
    boxShadow:
      'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(63 63 68 / 15%) 0px 1px 2px 0px',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    padding: '30px 30px',
  },
});

const AmountStatistic = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={{ xs: 1, sm:2 }}>
        <Grid item xs={12} sm={6}>
          <Box className={classes.box}>
            <Typography variant='h4'>Order Amount</Typography>
            <Typography variant='h2' fontWeight='700'>
              33
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.box}>
            <Typography variant='h4'>Order Amount</Typography>
            <Typography variant='h2' fontWeight='700'>
              33
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.box}>
            <Typography variant='h4'>Order Amount</Typography>
            <Typography variant='h2' fontWeight='700'>
              33
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.box}>
            <Typography variant='h4'>Order Amount</Typography>
            <Typography variant='h2' fontWeight='700'>
              33
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AmountStatistic;
