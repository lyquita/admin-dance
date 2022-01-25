import React from 'react';
import { RouteProps } from '../interfaces/Route';
import NotAllow from '../pages/NotAllow';
import useAdmin from '../hooks/useAdmin';


const PrivateRoute: React.FC<RouteProps> = ({ component: RouteComponent })=> {

    const {admin} = useAdmin();
    if(admin === true){
        return <RouteComponent />;
    }else{
        return <NotAllow />;
    }
    
};

export default PrivateRoute;