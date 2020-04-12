import {
  ADD_PRODUCT_FAILED,
  CLEAR_PRODUCT_ERRORS,
  SIGNUP_USER_FAILED,
} from '../types';

export const returnProductErrors = (errors) => (dispatch, getState) => {
  return dispatch({
    type: ADD_PRODUCT_FAILED,
    payload: errors,
  });
};

export const clearProductErrors = () => (dispatch, getState) => {
  return dispatch({
    type: CLEAR_PRODUCT_ERRORS,
  });
};

export const returnSignupErrors = (errors) => (dispatch, getState) => {
  return dispatch({
    type: SIGNUP_USER_FAILED,
    payload: errors,
  });
};
