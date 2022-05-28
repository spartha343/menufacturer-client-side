import axios from "axios";

const axiosInterseptor= axios.create({
    baseURL: 'http://localhost:5000/'
});

axiosInterseptor.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(!config.headers.authorization){
        config.headers.authorization = 'Bearer token'
    }
    return config;
  }, function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  });

  // Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default axiosInterseptor;