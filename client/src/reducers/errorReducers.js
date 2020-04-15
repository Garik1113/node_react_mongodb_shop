import {
  ADD_PRODUCT_FAILED,
  CLEAR_PRODUCT_ERRORS,
  ADD_PRODUCT_SUCCESS,
  SIGNUP_USER_FAILED,
  SIGNUP_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  ADD_NEW_CATEGORY_FAILED,
  ADD_NEW_CATEGORY_SUCCESS,
} from "../types";

const initialState = {
  addedProductErrors: {},
  userErrors: {},
  signupSuccess: "",
  loginSuccess: "",
  productSuccess: "",
  categoryErrors: "",
  categorySuccess: "",
};

export const errors = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_FAILED:
      return { ...state, addedProductErrors: action.payload };
    case CLEAR_PRODUCT_ERRORS:
      return { ...state, addedProductErrors: {} };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, productSuccess: action.payload };
    case SIGNUP_USER_FAILED:
      return { ...state, userErrors: action.payload };
    case SIGNUP_SUCCESS:
      return { ...state, signupSuccess: action.payload };
    case USER_LOGIN_FAILED:
      return { ...state, userErrors: action.payload };
    case USER_LOGIN_SUCCESS:
      return { ...state, loginSuccess: action.payload };
    case ADD_NEW_CATEGORY_FAILED:
      return { ...state, categoryErrors: action.payload, categorySuccess: "" };
    case ADD_NEW_CATEGORY_SUCCESS:
      return { ...state, categoryErrors: "", categorySuccess: action.payload };
    default:
      return state;
  }
};
