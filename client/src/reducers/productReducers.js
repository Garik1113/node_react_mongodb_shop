import {
  ADD_PRODUCT_IMAGE_PATHS,
  GET_TOP_PRODUCTS,
  GET_PRODUCT,
  SEARCH_PRODUCT,
  CLEAR_SEARCHING_RESULTS,
  GET_PRODUCTS_BY_CATEGORY,
  DELETE_PRODUCT_BY_ID,
  CHANGE_PRODUCT_NAME,
} from "../types";

const adeedProductInitialState = {
  imagePaths: "",
};

export const addedProduct = (state = adeedProductInitialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_IMAGE_PATHS:
      return { ...state, imagePaths: action.payload };
    default:
      return state;
  }
};

const initialState = [];

export const topProducts = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_PRODUCTS:
      return action.payload;
    case CHANGE_PRODUCT_NAME:
      console.log("assda");
      const { id, name } = action.payload;
      state = state.map((e) => (e._id === id ? { ...e, name: name } : e));
      return state;
    case DELETE_PRODUCT_BY_ID:
      return state.filter((e) => e._id !== action.payload);
    default:
      return state;
  }
};

export const productPage = (state = initialState, action) => {
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
