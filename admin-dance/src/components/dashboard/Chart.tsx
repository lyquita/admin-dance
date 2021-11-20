import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, IChartProps } from '../../interfaces/Dashboard';
import CostPerUserChart from './CostPerUser';
import OccupyRateChart from './OccupyRateChart';
import OrderAmountChart from './OrderAmountChart';
import SignAmountChart from './SignAmountChart';


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

const Chart:React.FC<IChartProps> = ({orderAmountList}) => {
  const classes = useStyles();
  
  return (
    <>
      <Grid container spacing={{ xs: 1, sm: 2 }}>
        <Grid item xs={12} sm={6}>
          <Box className={classes.box}>
            <Typography variant='h4'>Sign Amount</Typography>
            <Typography variant='h2' fontWeight='700'>
                <SignAmountChart />
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.box}>
            <Typography variant='h4'>Order Amount</Typography>
            <Typography variant='h2' fontWeight='700'>
              <OrderAmountChart orderAmountList={orderAmountList}/>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.box}>
            <Typography variant='h4'>Occupy Rate</Typography>
            <Typography variant='h2' fontWeight='700'>
              <OccupyRateChart />
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.box}>
            <Typography variant='h4'>Cost Per User</Typography>
            <Typography variant='h2' fontWeight='700'>
              <CostPerUserChart />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Chart;
