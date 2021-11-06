import React from 'react';
import Login from './pages/Login';

const routes = [
    {
        path: 'main',
        element: <Login />,
        children: [
            { path: 'dashboard', element: null},
            { path: 'course', element: null}
        ]
    },
    {
        path: '/',
        element: <Login />,
        children: [
            { path: 'login', element: <Login />},
            { path: 'register', element: null}
        ]
    }
];

export default routes;