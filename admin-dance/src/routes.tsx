import React from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';

const AppRoutes =() =>{
    return(
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='login' element={ <Login /> }/>
            <Route path='main' element={<Dashboard />}>
            </Route>
        </Routes>
    );
};

export default AppRoutes;