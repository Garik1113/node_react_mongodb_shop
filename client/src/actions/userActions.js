import axios from 'axios';
import {
  ADD_SIGNUP_NAME,
  ADD_SIGNUP_SURNAME,
  ADD_SIGNUP_AGE,
  ADD_SIGNUP_EMAIL,
  ADD_SIGNUP_PASSWORD,
  ADD_SIGNUP_CONFIRM_PASSWORM,
  ADD_LOGIN_EMAIL,
  ADD_LOGIN_PASSWORD,
} from '../types';
import { returnSignupErrors, returnSignupSucces } from './errorActions';

//Signup new user
export const signupUserName = (name) => (dispatch) => {
  return dispatch({
    type: ADD_SIGNUP_NAME,
    payload: name,
  });
};

export const signupUserSurName = (surname) => (dispatch) => {
  return dispatch({
    type: ADD_SIGNUP_SURNAME,
    payload: surname,
  });
};

export const signupUserAge = (age) => (dispatch) => {
  return dispatch({
    type: ADD_SIGNUP_AGE,
    payload: age,
  });
};

export const signupUserEmail = (email) => (dispatch) => {
  return dispatch({
    type: ADD_SIGNUP_EMAIL,
    payload: email,
  });
};

export const signupUserPassword = (password) => (dispatch) => {
  return dispatch({
    type: ADD_SIGNUP_PASSWORD,
    payload: password,
  });
};

export const signupUserConfirmPassword = (confirmPassword) => (dispatch) => {
  return dispatch({
    type: ADD_SIGNUP_CONFIRM_PASSWORM,
    payload: confirmPassword,
  });
};

export const signupNewUser = () => (dispatch, getState) => {
  axios.post('/users/create', getState().signupUser).then((res) => {
    console.log(this);
    if (res.data.errors) {
      return dispatch(returnSignupErrors(res.data.errors));
    }
    return dispatch(returnSignupSucces('ok'));
  });
};

// Login actions
export const loginUserEmail = (email) => (dispatch) => {
  return dispatch({
    type: ADD_LOGIN_EMAIL,
    payload: email,
  });
};

export const loginUserPassword = (password) => (dispatch) => {
  return dispatch({
    type: ADD_LOGIN_PASSWORD,
    payload: password,
  });
};

export const loginUser = () => (dispatch, getState) => {
  axios
    .post('/users/login', getState().loginUser)
    .then((res) => console.log(res));
};
