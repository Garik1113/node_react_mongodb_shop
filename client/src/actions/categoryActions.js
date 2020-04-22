import axios from "axios";
import {
  ADD_NEW_CATEGORY,
  ADD_NEW_CATEGORY_FAILED,
  GET__ALL_CATEGORIES,
  GET_PRODUCTS_BY_CATEGORY,
} from "../types";
import { returnErrors } from "./errorActions";

export const addNewCategory = (name) => (dispatch) => {
  axios.get(`/categories/addnew/${name}`).then((res) => {
    if (res.status === 200) {
      return dispatch({
        type: ADD_NEW_CATEGORY,
        payload: res.data,
      });
    } else {
      dispatch(returnErrors("Something wents wrong", res.status));
    }
  });
};

export const getCategories = () => (dispatch) => {
  axios.get("/categories/getall").then((res) => {
    if (res.status !== 200) {
      dispatch(returnErrors("Something wents wrong", res.status));
    }
    return dispatch({
      type: GET__ALL_CATEGORIES,
      payload: res.data,
    });
  });
};

export const getProductByCategory = (name) => (dispatch) => {
  axios.get(`/products/getProducts/${name}`, { name }).then((res) => {
    if (res.status !== 200) {
      return dispatch(returnErrors(res.data, res.status));
    }
    return dispatch({
      type: GET_PRODUCTS_BY_CATEGORY,
      payload: res.data,
    });
  });
};
