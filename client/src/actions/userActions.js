import axios from "axios";

import { returnErrors, clearErrors } from "./errorActions";
import { SIGN_UP_FAILED, SIGN_UP, LOG_IN, LOG_OUT } from "../types";

//Signup new user
export const signupNewUser = (user) => (dispatch, getState) => {
  const url = "/users/create";
  axios.post(url, user, tokenConfig(getState)).then((res) => {
    if (res.status == 203) {
      dispatch(returnErrors(res.data.errors, res.status));
      return dispatch({
        type: SIGN_UP_FAILED,
      });
    }
    const authToken = res.data;
    if (authToken) {
      dispatch({
        type: SIGN_UP,
        payload: authToken,
      });
      return dispatch(clearErrors());
    } else {
      return dispatch({
        type: SIGN_UP_FAILED,
      });
    }
  });
};
export const loginUser = (email, password) => (dispatch, getState) => {
  axios
    .post("/users/login", { email, password }, tokenConfig(getState))
    .then((res) => {
      if (res.status == 200 && res.data.token) {
        dispatch({
          type: LOG_IN,
          payload: res.data,
        });
      } else {
        dispatch(returnErrors(res.data.errors, res.status));
      }
    });
};
export const logOut = () => (dispatch, getState) => {
  console.log("logout");
  axios.post("/users/logout", tokenConfig(getState)).then((res) => {
    console.log(res);
    if (res.status !== 200) {
      return dispatch(returnErrors(res.data, res.status));
    }
    dispatch({
      type: LOG_OUT,
    });
  });
};

export const tokenConfig = (getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const token = getState().user.token;
  if (token) {
    config.headers["Authorization"] = token;
  }

  return config;
};
