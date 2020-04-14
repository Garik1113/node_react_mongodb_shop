import axios from "axios";
import {
  ADD_PRODUCT_NAME,
  ADD_PRODUCT_CATEGORY,
  ADD_PRODUCT_PRICE,
  ADD_PRODUCT_QUANTITY,
  ADD_PRODUCT_GENDER,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_IMAGE_PATHS,
  GET_TOP_PRODUCTS,
  GET_PRODUCT,
} from "../types";
import { returnProductErrors, clearProductErrors } from "./errorActions";

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
    delete images[key];
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
  const product = {
    name: getState().addedProduct.name,
    price: getState().addedProduct.price,
    category: getState().addedProduct.category,
    gender: getState().addedProduct.gender,
    imagePaths: getState().addedProduct.imagePaths,
    quantity: getState().addedProduct.quantity,
  };

  axios
    .post("/products/addNewProduct", product)
    .then((res) => {
      if (res.status === 200) {
        dispatch(clearProductErrors());
        return dispatch({
          type: ADD_PRODUCT_SUCCESS,
          payload: res.data,
        });
      } else {
        return dispatch(returnProductErrors(res.data));
      }
    })
    .catch((e) => console.log(e));
};

export const getTopProducts = () => (dispatch) => {
  axios.get("/home/getTopProducts").then((res) => {
    if (res.status === 200) {
      return dispatch({
        type: GET_TOP_PRODUCTS,
        payload: res.data,
      });
    }
  });
};

//Get Product page

export const getProductPage = (id) => (dispatch) => {
  axios.get(`/products/getPage/${id}`).then((res) => {
    if (res.status === 200) {
      return dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
    }
  });
};
