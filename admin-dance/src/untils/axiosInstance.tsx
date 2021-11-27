import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';

const baseURL = 'https://api-dance.hireoo.fun';

let authToken = localStorage.getItem('access_token');
let refreshToken = localStorage.getItem('refresh_token');

const axiosInstance = axios.create({
    baseURL,
    headers: {Authorization: `Bearer ${authToken}`}
});

axiosInstance.interceptors.request.use(async req => {
    if(!authToken){
        authToken =  localStorage.getItem('access_token');
        req.headers.Authorization = `Bearer ${authToken}`;
    };

    const user: any = jwt_decode(authToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs())<1 ;


    if(!isExpired) return req;

    const response = await axios.post(`${baseURL}/token/refresh/`, {
        refresh: refreshToken
      });
    

    localStorage.setItem('access_token', response.data);
    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
});

export default axiosInstance;