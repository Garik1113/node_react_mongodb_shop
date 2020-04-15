import {
  ADD_PRODUCT_FAILED,
  CLEAR_PRODUCT_ERRORS,
  SIGNUP_USER_FAILED,
  SIGNUP_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  ADD_NEW_CATEGORY_FAILED,
  ADD_NEW_CATEGORY_SUCCESS,
} from "../types";

//Add ne product errors
export const returnProductErrors = (errors) => {
  return {
    type: ADD_PRODUCT_FAILED,
    payload: errors,
  };
};

export const clearProductErrors = () => {
  return {
    type: CLEAR_PRODUCT_ERRORS,
  };
};

//Signup errors
export const returnSignupErrors = (errors) => {
  return {
    type: SIGNUP_USER_FAILED,
    payload: errors,
  };
};

export const returnSignupSucces = (success) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: success,
  };
};

//Login errors
export const returnLoginErrors = (errors) => {
  return {
    type: USER_LOGIN_FAILED,
    payload: errors,
  };
};

export const returnLoginSuccess = (success) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: success,
  };
};

//category errors

export const categoryErrors = (errors) => {
  return {
    type: ADD_NEW_CATEGORY_FAILED,
    payload: errors,
  };
};

export const addCategorySuccess = (success) => {
  return {
    type: ADD_NEW_CATEGORY_SUCCESS,
    payload: success,
  };
};
