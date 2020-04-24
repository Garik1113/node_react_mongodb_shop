import axios from "axios";
import {
  ADD_PRODUCT_IMAGE_PATHS,
  GET_TOP_PRODUCTS,
  GET_PRODUCT,
  SEARCH_PRODUCT,
  CLEAR_SEARCHING_RESULTS,
  DELETE_PRODUCT_BY_ID,
  CHANGE_PRODUCT_NAME,
  CHANGE_PRODUCT_CATEGORY,
  CHANGE_PRODUCT_PRICE,
  CHANGE_PRODUCT_QUANTITY,
} from "../types";
import { returnErrors, clearErrors } from "./errorActions";
import { tokenConfig } from "./userActions";

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

export const addProduct = (product) => (dispatch, getState) => {
  axios
    .post("/products/addNewProduct", product)
    .then((res) => {
      if (res.status !== 200) {
        dispatch(returnErrors(res.data, res.status));
      } else {
        return dispatch(clearErrors());
      }
    })
    .catch((e) => dispatch(returnErrors("Something wents wrong", "404")));
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

//Add product views

export const addProductViews = (id) => (dispatch) => {
  return axios.get(`/products/addVeiws/${id}`);
};

//Searching products in db

export const searchProducts = (name) => (dispatch) => {
  if (!name) {
    return dispatch({
      type: CLEAR_SEARCHING_RESULTS,
      payload: [],
    });
  }
  return axios.get(`/products/search/${name}`).then((res) => {
    if (res.status === 200) {
      return dispatch({
        type: SEARCH_PRODUCT,
        payload: res.data,
      });
    }
  });
};

//add product in shopping cart
export const addProductToCart = (id) => (dispatch, getState) => {
  console.log(getState().user);
  axios.post("/cart/add", { id }).then((res) => console.log(res));
};

export const deleteProductById = (id) => (dispatch, getState) => {
  axios.delete(`/products/delete/${id}`).then((res) => {
    if (res.status === 200) {
      dispatch({
        type: DELETE_PRODUCT_BY_ID,
        payload: id,
      });
    }
  });
};

//Change product properties

export const changeProductName = (name, id) => (dispatch, getState) => {
  console.log("asf");
  dispatch({
    type: CHANGE_PRODUCT_NAME,
    payload: { name, id },
  });
};
export const changeProductCategory = (category, id) => (dispatch, getState) => {
  dispatch({
    type: CHANGE_PRODUCT_CATEGORY,
    payload: { category, id },
  });
};
export const changeProductPrice = (price, id) => (dispatch, getState) => {
  dispatch({
    type: CHANGE_PRODUCT_PRICE,
    payload: { price, id },
  });
};
export const changeProductQuantity = (quantity, id) => (dispatch, getState) => {
  dispatch({
    type: CHANGE_PRODUCT_QUANTITY,
    payload: { quantity, id },
  });
};
export const saveProductChanges = (id) => (dispatch, getState) => {
  axios.post(`/products/change`, { id }, tokenConfig(getState)).then((res) => {
    console.log(res);
  });
};
