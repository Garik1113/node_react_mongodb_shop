import {
  ADD_PRODUCT_IMAGE_PATHS,
  GET_TOP_PRODUCTS,
  GET_PRODUCT,
  SEARCH_PRODUCT,
  CLEAR_SEARCHING_RESULTS,
  GET_PRODUCTS_BY_CATEGORY,
} from "../types";

const initialState = {
  imagePaths: "",
};

export const addedProduct = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_IMAGE_PATHS:
      return { ...state, imagePaths: action.payload };
    default:
      return state;
  }
};

const topProductsInitialState = [];

export const topProducts = (state = topProductsInitialState, action) => {
  switch (action.type) {
    case GET_TOP_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

const initialProductPageState = {};
export const productPage = (state = initialProductPageState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export const searchingProducts = (state = [], action) => {
  switch (action.type) {
    case SEARCH_PRODUCT:
      return action.payload;
    case CLEAR_SEARCHING_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

export const productsByCatName = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS_BY_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};
