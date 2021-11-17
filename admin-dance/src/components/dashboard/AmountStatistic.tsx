import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { IAmountStatistics } from '../../interfaces/Dashboard';

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

const AmountStatistic:React.FC<IAmountStatistics> =({ avgOrderAmount, avgSignAmount, avgCostPerUser, avgOccupyRate }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={{ xs: 1, sm:2 }}>
        <Grid item xs={12} sm={6}>
          <Box className={classes.box}>
            <Typography variant='h4'>Avg Order Amount</Typography>
            <Typography variant='h2' fontWeight='700'>
              {Math.round(avgOrderAmount*100)/100}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.box}>
            <Typography variant='h4'>Avg Sign Amount</Typography>
            <Typography variant='h2' fontWeight='700'>
              {Math.round(avgSignAmount*100)/100}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.box}>
            <Typography variant='h4'>Avg Occupy Rate</Typography>
            <Typography variant='h2' fontWeight='700'>
              {Math.round(avgOccupyRate*100)}%
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.box}>
            <Typography variant='h4'>Avg Cost Per User</Typography>
            <Typography variant='h2' fontWeight='700'>
              {Math.round(avgCostPerUser*100)/100}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AmountStatistic;
