import React from 'react';
import { Role } from '../interfaces/Hooks';


function useAdmin(): Role{

const admin = ( localStorage.getItem('admin') === 'true');

    return {
       admin: admin
    };
}

export default useAdmin;

