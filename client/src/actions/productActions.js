import axios from "axios";
import {
  ADD_PRODUCT_NAME,
  ADD_PRODUCT_CATEGORY,
  ADD_PRODUCT_PRICE,
  ADD_PRODUCT_QUANTITY,
  ADD_PRODUCT_GENDER,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_IMAGE_PATHS,
} from "../types";
import { returnProductErrors } from "./errorActions";

//Add new product action
export const addProductName = (name) => (dispatch, getState) => {
  return dispatch({
    type: ADD_PRODUCT_NAME,
    payload: name,
  });
};

export const addProductCategory = (category) => (dispatch, getState) => {
  return dispatch({
    type: ADD_PRODUCT_CATEGORY,
    payload: category,
  });
};
export const addProductPrice = (price) => (dispatch, getState) => {
  return dispatch({
    type: ADD_PRODUCT_PRICE,
    payload: price,
  });
};
export const addProductQuantity = (quantity) => (dispatch, getState) => {
  return dispatch({
    type: ADD_PRODUCT_QUANTITY,
    payload: quantity,
  });
};

export const addProductGender = (gender) => (dispatch, getState) => {
  return dispatch({
    type: ADD_PRODUCT_GENDER,
    payload: gender,
  });
};

export const addProductImages = (images) => (dispatch, getState) => {
  const formData = new FormData();
  for (let key in images) {
    formData.append("images", images[key]);
  }
  axios.post("/products/addNewImage", formData).then((res) => {
    if (res.status === 200) {
      return dispatch({
        type: ADD_PRODUCT_IMAGE_PATHS,
        payload: res.data,
      });
    }
  });
};

export const addProduct = () => (dispatch, getState) => {
  axios.post("/products/addNewProduct", getState().addedProduct).then((res) => {
    if (res.status === 200) {
      return dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: res.data.success,
      });
    } else {
      return dispatch(returnProductErrors(res.data.errors));
    }
  });
};
