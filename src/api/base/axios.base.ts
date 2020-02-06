import axios from 'axios';

export const baseURL = 'http://localhost:3000/';

//axios 的实例及拦截器配置
const axiosBase = axios.create ({
  baseURL
});

axiosBase.interceptors.response.use (
  res => res.data,
  err => {
    console.log (err, "网络错误");
  }
);

export {
  axiosBase
};