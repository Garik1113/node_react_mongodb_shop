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
  ADD_PRODUCT_TO_SHOPPING_CART,
  GET_CART_PRODUCTS,
  INCREMENT_CART_PRODUCT_QUANTITY,
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
export const addProductToCart = (product_id) => (dispatch, getState) => {
  if (!getState().user.isAuthorizated) {
    return dispatch(returnErrors("Not Authorizated", 203));
  } else {
    dispatch(clearErrors());
    console.log(tokenConfig(getState));
    axios
      .post("/cart/add", { product_id }, tokenConfig(getState))
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          // return dispatch({
          //   type: ADD_PRODUCT_TO_SHOPPING_CART,
          //   payload: res.data,
          // });
          return;
        } else {
          dispatch(returnErrors("Something went wrong", res.status));
        }
      });
  }
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

//get cart component
export const getCartProducts = () => (dispatch, getState) => {
  axios
    .post("/cart/getCartProducts", {}, tokenConfig(getState))
    .then((res) => {
      if (res.status == 401 || res.status == 403) {
        return dispatch(returnErrors(res.data, res.status));
      }
      dispatch({
        type: GET_CART_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((e) => {
      return dispatch(returnErrors(e.message, "401"));
    });
};

export const incrementProductQuantity = (product_id, num, cart_id) => (
  dispatch,
  getState
) => {
  axios
    .post("/cart/increment", { product_id, num }, tokenConfig(getState))
    .then((res) => {
      if (res.status !== 200) {
        return dispatch(returnErrors("Something wents wrong", res.status));
      } else {
        const user_id = getState().user.user.user_id;

        return dispatch({
          type: INCREMENT_CART_PRODUCT_QUANTITY,
          payload: { num, user_id, product_id, cart_id },
        });
      }
    })
    .catch((e) => {
      return dispatch(returnErrors("Something wents wrong", "401"));
    });
};

//Change product properties
export const changeProductName = (name, id) => (dispatch, getStae) => {
  console.log(name);
  return dispatch({
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
  axios
    .post(`/products/change`, { id }, tokenConfig(getState))
    .then((res) => {});
};
