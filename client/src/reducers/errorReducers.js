import {
  ADD_PRODUCT_FAILED,
  CLEAR_PRODUCT_ERRORS,
  ADD_PRODUCT_SUCCESS,
  SIGNUP_USER_FAILED,
} from "../types";

const initialState = {
  addedProductErrors: {},
  userErrors: {},
  productSuccess: "",
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
    default:
      return state;
  }
};
