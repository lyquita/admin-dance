import React from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Course from './pages/Courses';
import UserInfo from './pages/UserDetail';
import UserList from './pages/User';
import PrivateRoute from './untils/PrivateRoute';

const AppRoutes =() =>{
    return(
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='login' element={ <Login /> }/>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='course' element={<Course/> } />
            <Route path='user/:username' element={<UserInfo/>} />
            <Route path='user'  element={
                <PrivateRoute  component={UserList} />
            } />
        </Routes>
    );
};

export default AppRoutes;