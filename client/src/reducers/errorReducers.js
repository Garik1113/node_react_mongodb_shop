import {
  ADD_PRODUCT_FAILED,
  CLEAR_PRODUCT_ERRORS,
  ADD_PRODUCT_SUCCESS,
} from '../types';

const initialState = {
  addedProductErrors: {},
  userErrors: {},
  productSuccess: '',
};

export const errors = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_FAILED:
      return { ...state, addedProductErrors: action.payload };
    case CLEAR_PRODUCT_ERRORS:
      return { ...state, addedProductErrors: {} };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, productSuccess: action.payload };
    default:
      return state;
  }
};
