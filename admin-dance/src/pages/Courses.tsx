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
    const [coachname, setCoachname] = useState<string>('');
    const [placename, setPlacename] = useState<string>('');
    const [coursename, setCoursename] = useState<string>('');
    const [coursedate_before, setDatebefore] = useState<Date | null> (null);
    const [coursedate_after, setDateafter] = useState<Date | null>(null);


    useEffect(()=>{

        // axios before
    axios.interceptors.request.use( config =>{
        // @ts-ignore
        config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
        return config;
      }, err =>{
  
        return Promise.reject(err);
      }  );
  

    const config = {coachname, placename, coursename, coursedate_before, coursedate_after};


        axios('/course/', {params: config})
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


    }, [coachname, coursename, placename, coursedate_before, coursedate_after]);



    return (
        <>
            <Grid container direction='column' sx={{padding:'100px 20px 50px 20px'}}>
                <Grid item width='100%'>
                    <Toolkit coachname={coachname} coursename={coursename} placename={placename} datebefore={coursedate_before} dateafter={coursedate_after} setCoachName={setCoachname} setCourseName={setCoursename} setPlaceName={setPlacename} setDatebefore={setDatebefore} setDateafter={setDateafter}/>
                </Grid>
                <Grid item width='100%'>
                    <CourseTable tableData={tableData} count={count}/>
                </Grid>
            </Grid>
        </>
    );
};

export default Course;