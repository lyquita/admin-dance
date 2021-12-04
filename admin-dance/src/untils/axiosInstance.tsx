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

axiosInstance.interceptors.request.use(req =>{
  
  let authToken = localStorage.getItem('access_token');
  let refreshToken = localStorage.getItem('refresh_token');

  if(authToken){
    const user: any = jwt_decode(authToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs())<1;
    req.headers.Authorization = `Bearer ${authToken}`;
    if(!isExpired) return req;

    axios.post(`${baseURL}/token/refresh`, { 
      refresh: refreshToken
     })
     .then(res => localStorage.setItem('access_token', res.data.access))
     .catch(err => Promise.reject(err));

     return req;
  }
  console.log('what?', req);
  return req;

}, err =>{} );

// axiosInstance.interceptors.request.use( req => {

    // if(!authToken){
    //     authToken =  localStorage.getItem('access_token');
    //     req.headers.Authorization = `Bearer ${authToken}`;
    // };

    // const user: any = jwt_decode(authToken);
    // const isExpired = dayjs.unix(user.exp).diff(dayjs())<1 ;


    // if(!isExpired) return req;

    // axios.post(`${baseURL}/token/refresh/`, {
    //     refresh: refreshToken
    //   })
    //   .then((response)=>{
    //     localStorage.setItem('access_token', response.data);
    //     req.headers.Authorization = `Bearer ${response.data.access}`;
    //   })
    //   .catch((err)=>{
    //     console.log('refresh token has beend expired.');
    //     Promise.reject(err);
    //     // navigate('/login', {replace : true});
    //   });

    // return req;
// });

export default axiosInstance;