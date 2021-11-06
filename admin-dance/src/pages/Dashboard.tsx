import React from 'react';
import { Outlet } from 'react-router';



const Dashboard =() =>{

    return(
        <>
        this is the dashboard
        <Outlet />
        </>
    );
};

export default Dashboard;