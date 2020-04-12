import axios from 'axios';
import {
  ADD_SIGNUP_NAME,
  ADD_SIGNUP_SURNAME,
  ADD_SIGNUP_AGE,
  ADD_SIGNUP_EMAIL,
  ADD_SIGNUP_PASSWORD,
  ADD_SIGNUP_CONFIRM_PASSWORM,
} from '../types';

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
  axios.post('/users/create', getState().signupUser);
  console.log(getState().signupUser);
};
