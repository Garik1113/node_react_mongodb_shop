import { ADD_PRODUCT_FAILED, CLEAR_PRODUCT_ERRORS } from "../types";

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
