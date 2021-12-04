import React, { useEffect, useState } from 'react';
import Dog from '../assets/svgs/Dog';
import { Box } from '@mui/system';
import { Container, Grid, Stack, Typography } from '@mui/material';
import Toolkit from '../components/dashboard/Toolkit';
import AmountStatistic from '../components/dashboard/AmountStatistic';
import Chart from '../components/dashboard/Chart';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { ChartData, IAmountStatistics, Dataset } from '../interfaces/Dashboard';
import Layout  from '../components/global/Layout';
import axiosInstance from '../untils/axiosInstance';



const Dashboard = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>('huanyuhui');

  const [avgOrderAmount, setAvgOrderAmount] = useState<number>(20);
  const [avgSignAmount, setAvgSignAmount] = useState<number>(20);
  const [avgOccupyRate, setAvgOccupyRate] = useState<number>(0.80);
  const [avgCostPerUser, setAvgCostPerUser] = useState<number>(20);
  const [orderAmountList, setOrderAmountList] = useState<ChartData>({ labels: ['hip hop', 'swag', 'choreography'],
  datasets: [{data: [1, 3, 4]}]});
  const [signAmountList, setSignAmountList] = useState<ChartData>({ labels: ['hip hop', 'swag', 'choreography'],
  datasets: [{data: [1, 3, 4]}]});
  const [occupyRateList, setOccupyRateList] = useState<ChartData>({ labels: ['hip hop', 'swag', 'choreography'],
  datasets: [{data: [1, 3, 4]}]});
  const [costPerUserList, setCostPerUserList] = useState<ChartData>({ labels: ['hip hop', 'swag', 'choreography'],
  datasets: [{data: [1, 3, 4]}]});

  useEffect(()=>{

    axiosInstance(`/course/${inputValue}/last_seven_days`)
    .then((res)=>{
      const data = res.data.results[0];
      setAvgOrderAmount(data.avg_orderamount);
      setAvgSignAmount(data.avg_signamount);
      setAvgOccupyRate(data.avg_occupyrate);
      setAvgCostPerUser(data.avg_costperuser);

      let orderAmountListLabels: string[] = [];
      let orderAmountListData: number[] = [];
      let signAmountListLabels: string[] = [];
      let signAmountListData: number[] = [];
      let occupyRateListLabels: string[] = [];
      let occupyRateListData: number[] = [];
      let costPerUserListLabels: string[] = [];
      let costPerUserListData: number[] = [];
  
      //remove useless object value
        Object.keys(data).forEach((item)=>{
          if(data[item] == null || data[item] == '' || data[item] == undefined ){
            delete data[item];
          };
        });
  
        Object.keys(data).forEach((item)=>{
          if(item.match(RegExp('order'))){
              orderAmountListLabels.push(item.slice(0, -16));
              orderAmountListData.push(Math.round(data[item]*100)/100);
            };
          if(item.match(RegExp('sign'))){
            signAmountListLabels.push(item.slice(0, -15));
            signAmountListData.push(Math.round(data[item]*100)/100);
          };
          if(item.match(RegExp('occupy'))){
            occupyRateListLabels.push(item.slice(0, -15));
            occupyRateListData.push(Math.round(data[item]*100)/100);
          };
          if(item.match(RegExp('cost'))){
            costPerUserListLabels.push(item.slice(0, -16));
            costPerUserListData.push(Math.round(data[item]*100)/100);
          }
        });


      
        setOrderAmountList({labels: orderAmountListLabels, datasets: [{data: orderAmountListData}] });
        setSignAmountList({labels: signAmountListLabels, datasets: [{data: signAmountListData}] });
        setOccupyRateList({labels: occupyRateListLabels, datasets: [{data: occupyRateListData}] });
        setCostPerUserList({labels: costPerUserListLabels, datasets:[{data: costPerUserListData}]});
      return data;
    })
    .catch(function(err){
      if(err.response){
        if(err.response.status == '401'){
          console.log('401err', err);
          navigate('/login', {replace:true});
        }
      }
      console.log('status err', err);
      return Promise.reject(err);
    });

  }, [inputValue]);



  return (
    <Container style={{ padding: '100px 20px 50px 20px' }} maxWidth={false}>
      <Layout />
      <Grid container direction='column' spacing={3} alignContent='center'>
        <Grid item>
          <Toolkit inputValue = { inputValue } setInputValue = { setInputValue }/>
        </Grid>
        <Grid item>
          <AmountStatistic avgSignAmount={avgSignAmount} avgOrderAmount={avgOrderAmount} avgCostPerUser={avgCostPerUser} avgOccupyRate={avgOccupyRate}/>
        </Grid>
        <Grid item>
          <Chart orderAmountList={orderAmountList} signAmountList={signAmountList} occupyRateList={occupyRateList} costPerUserList={costPerUserList}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;