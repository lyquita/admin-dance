import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';


const baseURL = 'http://localhost:5000/';

let authToken = localStorage.getItem('access_token');
let refreshToken = localStorage.getItem('refresh_token');

const axiosInstance = axios.create({
    baseURL,
    headers: {Authorization: `Bearer ${authToken}`}
});

axiosInstance.interceptors.request.use(req =>{
  

  let authToken = localStorage.getItem('access_token');
  let refreshToken = localStorage.getItem('refresh_token');

  if(authToken !== null && authToken !==undefined ){
    const user: any = jwt_decode(authToken);
    const isExpired = dayjs.unix(user.expiresIn).diff(dayjs())<1;
    req.headers.Authorization = `Bearer ${authToken}`;
    if(!isExpired) return req;

    axios.post(`${baseURL}auth/refresh`, { 
      refresh_token: refreshToken
     })
     .then(res => localStorage.setItem('access_token', res.data.access_token))
     .catch(err => Promise.reject(err));

     return req;
  }
  return req;

}, err =>{} );

export default axiosInstance;