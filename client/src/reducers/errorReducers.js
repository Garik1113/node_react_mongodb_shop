import { ADD_PRODUCT_FAILED, CLEAR_PRODUCT_ERRORS } from "../types";

const initialState = {
  addedProductErrors: {},
  userErrors: {},
};

export const errors = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_FAILED:
      return { ...state, addedProductErrors: action.payload };
    case CLEAR_PRODUCT_ERRORS:
      return { ...state, addedProductErrors: {} };
    default:
      return state;
  }
};
