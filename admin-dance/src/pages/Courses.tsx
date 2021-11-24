import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import CourseTable from '../components/courses/Table';
import Toolkit from '../components/courses/Toolkit';
import { ITable, ITableProps } from '../interfaces/Course';


const Course = () =>{

    const navigate = useNavigate();
    const [count, setCount]= useState<number>(20);
    const [tableData, setTableData] = useState([]);

    useEffect(()=>{

        // axios before
    axios.interceptors.request.use( config =>{
        // @ts-ignore
        config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
        return config;
      }, err =>{
  
        return Promise.reject(err);
      }  );
  

        axios('/course/')
        .then((res)=>{
            console.log('res', );
            setCount( parseInt(res.headers['content-range']) );
            setTableData(res.data);
        })
        .catch(function(err){
            if(err.response.status == '401'){
              navigate('/login', {replace:true});
            }
            return Promise.reject(err);
          });


    }, []);

    return (
        <>
            <Grid container direction='column' sx={{padding:'100px 20px 50px 20px'}}>
                <Grid item width='100%'>
                    <Toolkit />
                </Grid>
                <Grid item width='100%'>
                    <CourseTable tableData={tableData} count={count}/>
                </Grid>
            </Grid>
        </>
    );
};

export default Course;