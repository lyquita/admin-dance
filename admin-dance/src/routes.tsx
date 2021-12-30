import React from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Course from './pages/Courses';
import UserInfo from './pages/UserDetail';

const AppRoutes =() =>{
    return(
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='login' element={ <Login /> }/>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='course' element={<Course/> } />
            <Route path='user/:username' element={<UserInfo/>} />
        </Routes>
    );
};

export default AppRoutes;