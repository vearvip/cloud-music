import * as actionTypes from './action-types';
import { fromJS } from 'immutable';// 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构
import { actionInterface } from '../../../store'

const defaultState = fromJS ({
  bannerList: [],
  recommendList: [],
});


export default (state = defaultState, action: actionInterface) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set ('bannerList', action.data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set ('recommendList', action.data);
    default:
      return state;
  }
}