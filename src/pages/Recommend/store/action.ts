import * as actionTypes from './action-types';
import { fromJS } from 'immutable';// 将 JS 对象转换成 immutable 对象
import { getBannerRequest, getRecommendListRequest } from '../../../api';

export const changeBannerList = (data: any) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
});

export const changeRecommendList = (data: any) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
});

export const getBannerList = () => {
  return (dispatch: any) => {
    getBannerRequest().then((data: any) => {
      dispatch(changeBannerList(data.banners));
    }).catch(() => {
      console.log("轮播图数据传输错误");
    })
  }
};

export const getRecommendList = () => {
  return (dispatch: any) => {
    getRecommendListRequest().then((data: any) => {
      dispatch(changeRecommendList(data.result));
    }).catch(() => {
      console.log("推荐歌单数据传输错误");
    });
  }
};
