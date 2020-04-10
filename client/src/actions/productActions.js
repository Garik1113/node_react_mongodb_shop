import axios from "axios";
import {
  ADD_PRODUCT_NAME,
  ADD_PRODUCT_CATEGORY,
  ADD_PRODUCT_PRICE,
  ADD_PRODUCT_QUANTITY,
  ADD_PRODUCT_GENDER,
  ADD_PRODUCT,
} from "../types";

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
  axios.post("/products/addNewImage", formData).then((e) => console.log(e));
};

export const addProduct = (product) => (dispatch, getState) => {
  return dispatch({
    type: ADD_PRODUCT,
    payload: product,
  });
};
