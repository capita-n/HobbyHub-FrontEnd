import axios from 'axios';
const AxiosHobby = axios.create({
    baseURL :'http://localhost:1337',  
});

AxiosHobby.interceptors.request.use(
    (config) => {
        console.log('call me always')
      let token
      if ((token = localStorage.getItem('token'))) {
          console.log("TOKEN WAS FOUND")
        config.headers.Authorization = `${token}`   ;
      }
      console.log("NO TOKEN")
      return config;
    },
    err => Promise.reject(err),
  );

export default AxiosHobby;
