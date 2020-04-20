import axios from 'axios';
import {
  ADD_NEW_CATEGORY,
  ADD_NEW_CATEGORY_FAILED,
  GET__ALL_CATEGORIES,
} from '../types';
// import { categoryErrors, addCategorySuccess } from './errorActions';

export const addNewCategory = (name) => (dispatch) => {
  axios.get(`/categories/addnew/${name}`).then((res) => {
    if (res.status === 200) {
      // dispatch(addCategorySuccess('Category added successfully'));
      return dispatch({
        type: ADD_NEW_CATEGORY,
        payload: res.data,
      });
    } else if (res.status === 500) {
      // return dispatch(categoryErrors('Someting wents wrong'));
    }
  });
};

export const getCategories = () => (dispatch) => {
  axios.get('/categories/getall').then((res) => {
    if (res.status === 500) {
      console.log(res.data);
      // return dispatch(categoryErrors('Someting wents wrong'));
    }
    return dispatch({
      type: GET__ALL_CATEGORIES,
      payload: res.data,
    });
  });
};
