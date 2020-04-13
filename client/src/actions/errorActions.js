import {
  ADD_PRODUCT_FAILED,
  CLEAR_PRODUCT_ERRORS,
  SIGNUP_USER_FAILED,
  SIGNUP_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
} from '../types';

//Add ne product errors
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

//Signup errors
export const returnSignupErrors = (errors) => (dispatch, getState) => {
  dispatch({
    type: SIGNUP_USER_FAILED,
    payload: errors,
  });
};

export const returnSignupSucces = (success) => (dispatch, getState) => {
  dispatch({
    type: SIGNUP_SUCCESS,
    payload: success,
  });
};

//Login errors
export const returnLoginErrors = (errors) => (dispatch) => {
  return dispatch({
    type: USER_LOGIN_FAILED,
    payload: errors,
  });
};

export const returnLoginSuccess = (success) => (dispatch) => {
  return dispatch({
    type: USER_LOGIN_SUCCESS,
    payload: success,
  });
};
