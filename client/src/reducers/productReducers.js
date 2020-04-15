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
  SEARCH_PRODUCT,
  CLEAR_SEARCHING_RESULTS,
} from '../types';

const addedProductinitialState = {
  name: '',
  price: '',
  category: '',
  gender: '',
  quantity: '',
  imagePaths: '',
};

export const addedProduct = (state = addedProductinitialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_NAME:
      return { ...state, name: action.payload };
    case ADD_PRODUCT_CATEGORY:
      return { ...state, category: action.payload };
    case ADD_PRODUCT_PRICE:
      return { ...state, price: action.payload };
    case ADD_PRODUCT_QUANTITY:
      return { ...state, quantity: action.payload };
    case ADD_PRODUCT_GENDER:
      return { ...state, gender: action.payload };
    case ADD_PRODUCT_IMAGE_PATHS:
      return { ...state, imagePaths: action.payload };
    case ADD_PRODUCT_SUCCESS:
      return addedProductinitialState;
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
