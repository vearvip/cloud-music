import { axiosBase } from "./base/axios.base";

export const getBannerRequest = () => {
  return axiosBase.get('/banner');
}

export const getRecommendListRequest = () => {
  return axiosBase.get('/personalized');
}