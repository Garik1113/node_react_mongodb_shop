import {
  ADD_PRODUCT_NAME,
  ADD_PRODUCT_CATEGORY,
  ADD_PRODUCT_PRICE,
  ADD_PRODUCT_QUANTITY,
  ADD_PRODUCT_GENDER,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_IMAGE_PATHS,
} from '../types';

const initialState = {
  name: '',
  price: '',
  category: '',
  gender: '',
  quantity: '',
  imagePaths: '',
};

export const addedProduct = (state = initialState, action) => {
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
      return initialState;
    default:
      return state;
  }
};
