import {
  SIGN_UP,
  SIGN_UP_FAILED,
  LOG_IN,
  LOG_IN_FAILED,
  LOG_OUT,
  GET_USER_DATA,
} from "../types";
const initialState = {
  user: "",
  token: "",
  isAuthorizated: false,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
    case LOG_IN:
      localStorage.setItem("jwt_token", action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthorizated: true,
      };
    case GET_USER_DATA:
      return { ...state, user: action.payload, isAuthorizated: true };
    case SIGN_UP_FAILED:
    case LOG_IN_FAILED:
      localStorage.removeItem("jwt_token");
      return { ...state, user: "", token: "", isAuthorizated: false };
    case LOG_OUT:
      localStorage.removeItem("jwt_token");
      return { ...state, isAuthorizated: false, token: "", user: "" };
    default:
      return state;
  }
};
